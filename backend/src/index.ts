import { createServer } from "http";
import { app } from "./app";
import dotenv from "./config/dotenv";
import { Server } from "socket.io";
import { socketHandler } from "./socket/sockethandler";
import { logger } from "./utils/logger";

dotenv();

const port = process.env.PORT || 3000;

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONT_URL,
  },
});

socketHandler(io);

server.listen(port, () => {
  logger.info("Server is runing at port " + port);
});
