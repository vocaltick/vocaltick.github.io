import { Request, Response, NextFunction } from "express";
import { getMessages, setMessages } from "@/services/databaseService";

export const getMessagesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const messages = await getMessages();
    res.send(messages);
  } catch (error) {
    next(error);
  }
};

export const setMessagesController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    if (!Array.isArray(req.body)) {
      return res.status(400).send({ error: "Invalid data format" });
    }
    await setMessages(req.body);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
