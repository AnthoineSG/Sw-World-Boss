import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.render("index", { title: "API SWWB", message: "Bienvenue sur cette API !"});
});

import userRouter from "./userRouter";
router.use("/api", userRouter);

import mainRouter from "./mainRouter";
router.use("/api", mainRouter);

import { notFound } from "../middlewares/notFound";
router.use("*", notFound);

export default router;
