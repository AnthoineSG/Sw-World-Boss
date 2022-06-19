import { Router } from "express";
const router = Router();


import mainRouter from "./mainRouter";

router.use("/api", mainRouter);


export default router;