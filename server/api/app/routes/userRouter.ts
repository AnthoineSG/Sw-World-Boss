import { Router } from "express";
const userRouter = Router();

import { userController } from "../controllers/userController";

userRouter
    .route("/user")
    /**
    * @swagger
    * /api/user:
    *  get:
    *    tags: [User]
    *    summary: Get all infos of all user
    *    responses:
    *      200:
    *        description: List of all user on json format
    *        content:
    *          application/json:
    *            schema:
    *              type: array
    *              items:
    *                $ref: '#/components/schemas/User'
    *      404:
    *         description: Error not found
    *
    */
    .get(userController.getAll)
;

userRouter
    .route("/user")
    /**
    * @swagger
    * /api/user:
    *  post:
    *    tags: [User]
    *    summary: Add one user in BDD
    *    parameters:
    *          - name: pseudo
    *            in: path
    *            required: true
    *            description: Name of wizard
    *            schema:
    *                type: string
    *          - name: email
    *            in: path
    *            required: true
    *            description: Email of user
    *            schema:
    *                type: string
    *          - name: password
    *            in: path
    *            required: true
    *            description: Password of user
    *            schema:
    *                type: string
    *    responses:
    *      200:
    *        description: Post one user
    *        content:
    *          application/json:
    *            schema:
    *              type: array
    *              items:
    *                $ref: '#/components/schemas/User'
    *      404:
    *         description: Error not found
    *
    */
    .post(userController.insertOne)
;

export default userRouter;
