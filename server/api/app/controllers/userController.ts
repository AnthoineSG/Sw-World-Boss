import { Request, Response } from "express";

import { userModel } from "../models/userModel";

export const userController = {
    /**
    * Recupere tout les utilisateur
    * @param res Retourne un tableau en format json
    * @returns Return si pas de tableau
    */
    async getAll(req: Request, res: Response) {
        const result = await userModel.getAll();
        if (result.message) {
            res.json({ message: result.message });
            return;
        }
        res.status(200).json(result);
    },

    /**
    * Insert un nouvelle utilisateure en BDD
    * @param req Recupere le Body sur la route post
    * @param res Retourne un object en format json
    * @returns Return si pas d'object
    */
    async insertOne(req: Request, res: Response) {
        const body = req.body;
        const result = await userModel.insertOne(body);
        if (result.message) {
            res.json({ message: result.message });
            return;
        }
        res.status(200).json(result);
    },
};
