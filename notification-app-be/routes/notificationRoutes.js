import express from "express";
import { getTopNotifications } from "../controllers/notificationController.js";

const router = express.Router();

router.get("/notifications", getTopNotifications);

export default router;