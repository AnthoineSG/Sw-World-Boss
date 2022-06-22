import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.render("index", { title: "API SWWB", message: "Bienvenue sur cette api !"});
});

import mainRouter from "./mainRouter";
router.use("/api", mainRouter);

import { notFound } from "../middlewares/notFound";
router.use("*", notFound);

export default router;