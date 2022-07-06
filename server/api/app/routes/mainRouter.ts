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
    *
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
    *              type: json
    *              example: {"wizard_id":988024,"pseudo":"Sekito","country":"FR","level":50,"worldboss_id":10393,"battle_start_time":"2022-05-14T21:15:00.000Z","battle_end_time":"2022-05-20T00:35:00.000Z","actu_ranking":12912,"actu_accumulate_damage":"7253265","actu_rating_id":3002,"actu_ranking_rate":12.4,"worldboss_used_unit":[["2125661987"],["13387619315"],["12435349869"]]}
    *      404:
    *         description: Error not found
    */
    .get(wbController.GetOneActualWb)
;

//? ----------------------SCHEMAS---------------------------------------

/**
* @swagger
* components:
*  schemas:
*    Actual:
*      type: object
*      properties:
*        wizard_id:
*          type: integer
*          exemple: 988024
*          description: auto-generated id of wizard
*        pseudo:
*          type: string
*          exemple: Sekito
*          description: the pseudo of wizard
*        country:
*          type: string
*          exemple: FR
*          description: the country of wizard
*        level:
*          type: integer
*          exemple: 50
*          description: the level of wizard
*        worldboss_id:
*          type: integer
*          exemple: 10393
*          description: the id of world boss
*        battle_start_time:
*          type: string
*          exemple: 2022-05-14T21:15:00.000Z
*          description: the start of the fight
*        battle_end_time:
*          type: string
*          exemple: 2022-05-20T00:35:00.000Z
*          description: the end of the fight
*        actu_ranking:
*          type: integer
*          exemple: 12912
*          description: the ranking of actual world boss
*        actu_accumulate_damage:
*          type: string
*          exemple: 7253265
*          description: total of damage
*        actu_rating_id:
*          type: integer
*          exemple: 3002
*          description: the id of the rank
*        actu_ranking_rate:
*          type: integer
*          exemple: 12.4
*          description: the percentage of the ranking
*        worldboss_used_unit:
*          type: array
*          items:
*            type: array
*            items:
*              type: string
*              exemple: 2125661987
*              description: the units concerned
*      required:
*        - wizard_id
*
*    TaskNotFound:
*      type: object
*      properties:
*        msg:
*          type: string
*          description: A message for the not found
*      example:
*        msg: ActualWB was not found
*
*
*
*
*
*
*
*
*/

export default mainRouter;