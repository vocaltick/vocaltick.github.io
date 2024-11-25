import messageRoutes from "@/routes/messageRoutes";
import bodyParser from "body-parser";
import cors from "cors";
import express, { Express, NextFunction, Request, Response } from "express";
import helmet from "helmet";
import { logger, morganLogger } from "./utils/logger";

export const app: Express = express();

app.use(morganLogger)
console.log(process.env.FRONT_URL)
app.use(cors({ origin: "*" }));
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
