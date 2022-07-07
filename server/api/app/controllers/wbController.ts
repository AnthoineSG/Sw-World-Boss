import { Request, Response } from "express";

import { actualWbModel } from "../models";

export const wbController = {
    /**
    * Recupere les joueur et les score actuel au world boss
    * @param res Retourne un tableau en format json
    * @returns Return si pas de tableau
    */
    async getAllActualWb(req: Request, res: Response) {
        const result = await actualWbModel.allUsers();
        if (result.message) {
            res.json({ message: result.message });
            return;
        }
        res.status(200).json(result);
    },

    /**
    * Recupere un utilisateur et sont score actuel au world boss
    * @param req Recupere le pseudo dans l'url
    * @param res Retourne un object en format json
    * @returns return si pas d'object
    */
    async GetOneActualWb(req: Request, res: Response) {
        const pseudo = req.params.pseudo;
        const oneUser = await actualWbModel.getOneUser(pseudo);
        if (oneUser.message) {
            res.json({ message: oneUser.message });
            return;
        }
        res.status(200).json(oneUser);
    },
};
