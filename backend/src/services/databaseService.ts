import { db } from "@/database/jsonDB";

export const getMessages = async (): Promise<string[]> => {
  return db.getData("/messages");
};

export const setMessages = async (messages: string[]): Promise<void> => {
  await db.push("/messages", messages);
};
