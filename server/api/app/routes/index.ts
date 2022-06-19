import { Router } from "express";

const router = Router();

import { mainController } from "../controllers/mainController";

router
    .route("/api")
    .get(mainController.home);

export default router;