import React, { useEffect, useState } from "react";
import socket from "../services/socket";

const TTSListener = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    // Cargar las voces disponibles
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    // Algunos navegadores requieren este evento para cargar las voces
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  useEffect(() => {
    // Escuchar el evento 'speak' del servidor
    socket.on("speak", (data) => {
      const { text, rate, pitch, voiceName } = data;
      if (!text) return;

      console.log(`Texto recibido: ${text}`);

      // Crear el objeto SpeechSynthesisUtterance
      const utterance = new SpeechSynthesisUtterance(text);
      const selectedVoice = voices.find((voice) => voice.name === voiceName);
      if (selectedVoice) utterance.voice = selectedVoice;

      utterance.rate = rate || 1;
      utterance.pitch = pitch || 1;
      
      // Reproducir el texto
      window.speechSynthesis.speak(utterance);
    });

    return () => socket.off("speak");
  }, [voices]);

  return <div>Escuchando mensajes desde el servidor...</div>;
};

export default TTSListener;
