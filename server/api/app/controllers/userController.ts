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
            res.status(500).json({ message: result.message });
            return;
        }
        res.status(200).json(result);
    },

    /**
    * Recupere un user en fonction de sont pseudo
    * @param req Recupere le pseudo dans l'url
    * @param res Retourne un object en format json
    * @returns Return si pas d'object
    */
    async getByPseudo(req: Request, res: Response) {
        const pseudo = req.params.pseudo;
        const result = await userModel.getByPseudo(pseudo);
        if (result.message) {
            res.status(500).json({ message: result.message });
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
            res.status(500).json({ message: result.message });
            return;
        }
        res.status(200).json(result);
    },

    /**
    * Modifie un user en BDD
    * @param req Recupere le pseudo dans l'url et le body du formulaire
    * @param res Retourne un object en format json
    * @returns Return si pas d'object
    */
    async patchByPseudo(req: Request, res: Response) {
        const pseudo = req.params.pseudo;
        const body = req.body;
        const result = await userModel.patchByPseudo(pseudo, body);
        if (result.message) {
            res.status(500).json({ message: result.message });
            return;
        }
        res.status(200).json(result);
    },

    /**
    * Delele un user en BDD
    * @param req Recupere le pseudo dans l'url et le body du formulaire
    * @param res Retourne un object en format json
    * @returns Return si pas d'object
    */
    async deleteByPseudo(req: Request, res: Response) {
        const pseudo = req.params.pseudo;
        const result = await userModel.deleteByPseudo(pseudo);
        if (result.message) {
            res.status(500).json({ message: result.message });
            return;
        }
        res.status(200).json(result);
    },
};
