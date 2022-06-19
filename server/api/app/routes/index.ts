import { Router } from "express";
const router = Router();

import mainRouter from "./mainRouter";

router.use(mainRouter);

export default router;