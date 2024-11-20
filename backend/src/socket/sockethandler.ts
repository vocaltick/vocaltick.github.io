import { Server, Socket } from "socket.io";

import IntervalManager from "@/utils/intervalManager";
import { handleClientMessages } from "./messageSocket";
import { handleBoardcastEvent } from "./boardcastSocket";
import { logger } from "@/utils/logger";

export const socketHandler = (io: Server) => {
  const intervalManager = IntervalManager.getInstance();
  io.on("connection", (socket) => {
    logger.info("New web socket connection! " + socket.id + " Clients number: " + io.engine.clientsCount);

    let messageIndex = 0;

    const sendMessage = async (socket: Socket, index: number) => {
      const nextIndex = await handleClientMessages(socket, index);
      intervalManager.updateMessageIndex(socket, nextIndex);
      messageIndex = nextIndex;
    };
    const intervalId = setInterval(
      () => sendMessage(socket, messageIndex),
      18000
    );
    intervalManager.addClient(socket, intervalId, messageIndex);

    socket.on(
      "boardcastMessage",
      handleBoardcastEvent(io, intervalManager, sendMessage)
    );
    socket.on("disconnect", () => {
      logger.info("Client disconnected " + socket.id + " Clients number: " + io.engine.clientsCount);
      intervalManager.clearInterval(socket);
    });
  });
};
