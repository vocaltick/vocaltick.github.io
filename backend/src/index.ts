import dotenv from "./config/dotenv";
dotenv();
import { createServer } from "http";
import { app } from "./app";
import { Server } from "socket.io";
import { socketHandler } from "./socket/sockethandler";
import { logger } from "./utils/logger";


const port = process.env.PORT || 3000;

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

socketHandler(io);

server.listen(port, () => {
  logger.info("Server is runing at port " + port);
});
