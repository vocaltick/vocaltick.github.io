import { useState } from "react";
import socket from "../services/socket";

const TTSControls = () => {
  const [text, setText] = useState("");

  const handleSend = () => {
    socket.emit("sendText", { text });
    setText("");
  };

  return (
    <div>
      <textarea
        rows={4}
        cols={50}
        placeholder="Escribe el texto aquí..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={handleSend}>Enviar al servidor</button>
    </div>
  );
};

export default TTSControls;
