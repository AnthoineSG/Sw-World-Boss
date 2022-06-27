import Debug from "debug";
const debug = Debug("mainController");

import { actualWbModel } from "../models";

interface result {
    title: string,
    content: string
}

interface ReceivedMessage {
    content: string;
    pseudo: string;
}

export const wbController = {
    async getAllActualWb(req: Request, res) {
        const result: result = {
            title: "hello",
            content: "world"
        };
        debug(result);

        const toto = await actualWbModel.allUsers();
        res.json(toto);
    },

    async GetOneActualWb(req, res) {
        function saveMessage(message: ReceivedMessage) {
            const savedMessage = message;
            debug("chat", savedMessage.pseudo);
        }
        saveMessage({ content: "ze", pseudo: "to" });

        const pseudo = req.params.pseudo;
        const oneUser = await actualWbModel.getOneUser(pseudo);
        res.json(oneUser);
    },
};
