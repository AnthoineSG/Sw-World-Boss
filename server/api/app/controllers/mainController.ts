import Debug from "debug";
const debug = Debug("mainController");

import { mainModel } from "../models";

interface result {
    title: string,
    content: string
}

interface ReceivedMessage {
    content: string;
    pseudo: string;
}

export const mainController = {
    async home(req: Request, res) {
        const result: result = {
            title: "hello",
            content: "world"
        };

        debug(result);

        const toto = await mainModel.allUsers();

        res.json(toto);
    },

    async oneUser(req, res) {
        function saveMessage(message: ReceivedMessage) {
            const savedMessage = message;
            debug("chat", savedMessage.pseudo);
        }
        saveMessage({ content: "ze", pseudo: "to" });

        const id = req.params.id;
        const oneUser = await mainModel.getOneUser(id);
        res.json(oneUser);
    },
};
