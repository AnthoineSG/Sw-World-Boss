import { Request, Response } from "express";

import { userModel } from "../models/userModel";

export const userController = {
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
