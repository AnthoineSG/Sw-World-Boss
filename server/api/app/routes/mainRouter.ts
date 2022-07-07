import { Router } from "express";
const mainRouter = Router();

import { wbController } from "../controllers/wbController";

mainRouter
    .route("/actualwb")
    /**
    * @swagger
    * /api/actualwb:
    *  get:
    *    tags: [Actual]
    *    summary: Get all users and actual World boss score in database
    *    responses:
    *      200:
    *        description: List of all user with score in world boss on json format
    *        content:
    *          application/json:
    *            schema:
    *              type: array
    *              items:
    *                $ref: '#/components/schemas/Actual'
    *      404:
    *         description: Error not found
    */
    .get(wbController.getAllActualWb)
;

mainRouter
    .route("/actualwb/:pseudo")
    /**
    * @swagger
    * /api/actualwb/{pseudo}:
    *  get:
    *    tags: [Actual]
    *    summary: Get one user with actual score in world boss
    *    parameters:
    *          - name: pseudo
    *            in: path
    *            required: true
    *            description: Pseudo pour récupérer un utilisateur
    *            schema:
    *                type: string
    *    responses:
    *      200:
    *        description: One user with score in world boss on json format
    *        content:
    *          application/json:
    *            schema:
    *              type: array
    *              items:
    *                $ref: '#/components/schemas/Actual'
    *      404:
    *         description: Error not found
    */
    .get(wbController.GetOneActualWb)
;

export default mainRouter;
