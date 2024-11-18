import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Server } from "socket.io";
import { createServer, ServerResponse } from "http";
import { Config, JsonDB } from "node-json-db";
import cors from "cors";
import bodyParser = require("body-parser");
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(cors())
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
); 
let DB = new JsonDB(new Config("messages", true, false, "/"));

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONT_URL,
  },
});

io.on("connection", (socket) => {
  console.log("new connection!");
  setInterval(
    async () =>
      socket.emit("speak", {
        text: await DB.getData("/messages"),
      }),
    18000
  );
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/getmessages", async (req: Request, res: Response) => {
  res.send(await DB.getData("/messages"));
});

app.post("/setmessages", async (req: Request, res: Response) => {
  console.log(req.body)
  if (!Array.isArray(req.body)) {
    res.sendStatus(401);
    return
  }
  await DB.push("/messages",req.body)
  res.send(200);
});

server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
