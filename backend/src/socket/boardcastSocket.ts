import IntervalManager from "@/utils/intervalManager";
import { logger } from "@/utils/logger";
import { Server, Socket } from "socket.io";

export const handleBoardcastEvent = (
  io: Server,
  IntervalManager: IntervalManager,
  sendMessageFn: (socket: Socket, messageIndex: number) => void
) => {
  return (data: { text: string }) => {
    logger.info("Boarcasting message " + data);

    IntervalManager.clearAllIntervals();

    io.emit("speak", { text: data.text });

    setTimeout(() => {
      IntervalManager.restoreIntervals(sendMessageFn, 900000);
    }, 5000);
  };
};
