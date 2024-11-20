import { Socket } from "socket.io";
import { getMessages } from "@/services/databaseService";
import { logger } from "@/utils/logger";

export const handleClientMessages = async (
  socket: Socket,
  messageIndex: number
): Promise<number> => {
  try {
    const messages = await getMessages();
    if (!messages || messages.length === 0) {
      socket.emit("speak", { text: "Sin mensajes disponibles" });
      return messageIndex;
    }
    if (messageIndex >= messages.length) {
      messageIndex = 0;
    }

    socket.emit("speak", { text: messages[messageIndex] });
    return messageIndex + 1;
  } catch (error) {
    logger.error("Error sending message to the client!");
    logger.error(error);
    return messageIndex;
  }
};
