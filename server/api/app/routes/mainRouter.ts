import { Router } from "express";
const mainRouter = Router();

import { mainController } from "../controllers/mainController";

mainRouter
    .route("/users")
    /**
     * @swagger
     * /api/swwb:
     *  get:
     *    summary: Get all users in database
     *    tags: [Users]
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

mainRouter
    .route("/users/:id")
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
    .get(mainController.oneUser);

export default mainRouter;