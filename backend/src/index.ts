import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Server } from "socket.io";
import { createServer, ServerResponse } from "http";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONT_URL,
  },
});

io.on("connection", (socket) => { 
  console.log("new connection!");
  setTimeout(() => socket.emit("speak", { text: Math.floor(Math.random()*30000).toString() }), 1000);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
