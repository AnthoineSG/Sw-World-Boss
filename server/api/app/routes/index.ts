import { Router } from "express";
const router = Router();

import mainRouter from "./mainRouter";
router.use("/api", mainRouter);

import { notFound } from "../middlewares/notFound";
router.use("*", notFound);

export default router;