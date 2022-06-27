import { Router } from "express";
const mainRouter = Router();

import { wbController } from "../controllers/wbController";

mainRouter
    .route("/actualwb")
    /**
     * @swagger
     * /api/actualwb:
     *  get:
     *    summary: Get all users and actual World boss score in database
     *    tags: [Actual]
     *    responses:
     *      200:
     *        description: List of all user with score in world boss on json format
     *        content:
     *          application/json:
     *            schema:
     *              type: json
     *              example: [{"wizard_id":988024,"pseudo":"Sekito","country":"FR","level":50,"worldboss_id":10393,"battle_start_time":"2022-05-14T21:15:00.000Z","battle_end_time":"2022-05-20T00:35:00.000Z","actu_ranking":12912,"actu_accumulate_damage":"7253265","actu_rating_id":3002,"actu_ranking_rate":12.4,"worldboss_used_unit":[["2125661987"],["13387619315"],["12435349869"]]}]
     *
     */
    .get(wbController.getAllActualWb);

mainRouter
    .route("/actualwb/:pseudo")
    /**
     * @swagger
     * /api/actualwb/{pseudo}:
     *  get:
     *    summary: Get one user with actual score in world boss
     *    tags: [Actual]
     *    responses:
     *      200:
     *        description: One user with score in world boss on json format
     *        content:
     *          application/json:
     *            schema:
     *              type: json
     *              example: {"wizard_id":988024,"pseudo":"Sekito","country":"FR","level":50,"worldboss_id":10393,"battle_start_time":"2022-05-14T21:15:00.000Z","battle_end_time":"2022-05-20T00:35:00.000Z","actu_ranking":12912,"actu_accumulate_damage":"7253265","actu_rating_id":3002,"actu_ranking_rate":12.4,"worldboss_used_unit":[["2125661987"],["13387619315"],["12435349869"]]}
     *
     */
    .get(wbController.GetOneActualWb);

export default mainRouter;