import { Router } from "express";
const mainRouter = Router();

import { mainController } from "../controllers/mainController";



/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of task
 *        name:
 *          type: string
 *          description: the name of the task
 *        description:
 *          type: string
 *          description: the description of the task
 *      required:
 *        - name
 *        - description
 *      example:
 *        id: gQBOyGbxcQy6tEp0aZ78X
 *        name: My first Task
 *        description: I have to do Something
 *    TaskNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found task
 *      example:
 *        msg: Task was not found
 *
 *  parameters:
 *    taskId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the task id
 */

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 */

mainRouter
    .route("/")
    /**
     * @swagger
     * /tasks:
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
     * /tasks/count:
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