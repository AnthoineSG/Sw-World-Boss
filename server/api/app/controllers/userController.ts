import { userModel } from "../models/userModel";

export const userController = {
    async insertOne(req, res) {
        const body = req.body;
        const result = await userModel.insertOne(body);

        if (result.message) {
            res.json({ message: "result.message" });
            return;
        }
        res.json(result);
    },
};