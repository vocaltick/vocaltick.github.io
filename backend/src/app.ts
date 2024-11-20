import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import messageRoutes from "@/routes/messageRoutes";
import { logger, morganLogger } from "./utils/logger";

export const app: Express = express();

app.use(morganLogger)
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use("/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("API");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err);
  res.status(500).send({ error: "Internal Server Error" });
});
