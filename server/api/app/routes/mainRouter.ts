import { Router } from "express";
const mainRouter = Router();

import { mainController } from "../controllers/mainController";

mainRouter
    .route("/")
    /**
     * @swagger
     * /api:
     *  get:
     *    summary: Get a task by Id
     *    tags: [Tasks]
     *    responses:
     *      200:
     *        description: the total number of tasks
     *        content:
     *          text/plain:
     *            schema:
     *              type: integer
     *              example: 15
     *
     */
    .get(mainController.toto);

mainRouter
    .route("/swwb")
    /**
     * @swagger
     * /api/swwb:
     *  get:
     *    summary: Get a task by Id
     *    tags: [Tasks]
     *    responses:
     *      200:
     *        description: the total number of tasks
     *        content:
     *          text/plain:
     *            schema:
     *              type: integer
     *              example: 15
     *
     */
    .get(mainController.home);

export default mainRouter;