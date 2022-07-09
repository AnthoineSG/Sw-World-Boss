import { Router } from "express";
const userRouter = Router();

import { userController } from "../controllers/userController";

import { bodyValidator } from "../middlewares/checkForm";

//! --------- GET ---------

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
    */
    .get(userController.getAll)
;

userRouter
    .route("/user/:pseudo")
    /**
    * @swagger
    * /api/user/{pseudo}:
    *  get:
    *    tags: [User]
    *    summary: Get all infos of one user
    *    parameters:
    *          - name: pseudo
    *            in: path
    *            required: true
    *            description: Name of wizard
    *            schema:
    *                type: string
    *    responses:
    *      200:
    *        description: Object of one user on json format
    *        content:
    *          application/json:
    *            schema:
    *              type: array
    *              items:
    *                $ref: '#/components/schemas/User'
    *      404:
    *         description: Error not found
    */
    .get(userController.getByPseudo)
;

//! --------- POST ---------

userRouter
    .route("/user")
    /**
    * @swagger
    * /api/user:
    *  post:
    *    tags: [User]
    *    summary: Add one user in BDD
    *    requestBody:
    *     required: true
    *     content:
    *      application/x-www-form-urlencoded:
    *        schema:
    *          type: object
    *          properties:
    *            pseudo:
    *              type: string
    *            email:
    *              type: string
    *            password:
    *              type: string
    *          required:
    *            - pseudo
    *            - email
    *            - password
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
    */
    .post(bodyValidator, userController.insertOne)
;

//! --------- PATCH ---------

userRouter
    .route("/user/:pseudo")
    /**
    * @swagger
    * /api/user/{pseudo}:
    *  patch:
    *    tags: [User]
    *    summary: Modifie all infos of one user
    *    parameters:
    *          - name: pseudo
    *            in: path
    *            required: true
    *            description: Name of wizard
    *            schema:
    *                type: string
    *    requestBody:
    *     required: true
    *     content:
    *      application/x-www-form-urlencoded:
    *        schema:
    *          type: object
    *          properties:
    *            pseudo:
    *              type: string
    *            email:
    *              type: string
    *            password:
    *              type: string
    *    responses:
    *      200:
    *        description: Object of one user on json format
    *        content:
    *          application/json:
    *            schema:
    *              type: array
    *              items:
    *                $ref: '#/components/schemas/User'
    *      404:
    *         description: Error not found
    */
    .patch(userController.patchByPseudo)
;

//! --------- PUT ---------

//! --------- DELETE ---------

userRouter
    .route("/user/:pseudo")
    /**
    * @swagger
    * /api/user/{pseudo}:
    *  delete:
    *    tags: [User]
    *    summary: Delete all infos of one user
    *    parameters:
    *          - name: pseudo
    *            in: path
    *            required: true
    *            description: Name of wizard
    *            schema:
    *                type: string
    *    responses:
    *      200:
    *        description: Object of one user on json format
    *        content:
    *          application/json:
    *            schema:
    *              type: array
    *              items:
    *                $ref: '#/components/schemas/User'
    *      404:
    *         description: Error not found
    */
    .delete(userController.deleteByPseudo)
;

export default userRouter;
