import express from "express";

import { getBilling } from "../controller/billingController.js";

const router = express.Router();

router.get("/", getBilling);

export default router;