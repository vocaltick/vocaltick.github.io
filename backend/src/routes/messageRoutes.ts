import { Router } from "express";

import { setMessagesController, getMessagesController } from "@/controllers/messagesController";

const router = Router();

router.get("/", getMessagesController);
router.post("/", setMessagesController);

export default router;