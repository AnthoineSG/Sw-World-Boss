import { mainController } from "../controllers/mainController";

import { Router } from "express";
const mainRouter = Router();

mainRouter
    .route("/")
    .get(mainController.toto);

mainRouter
    .route("/api")
    .get(mainController.home);

export default mainRouter;