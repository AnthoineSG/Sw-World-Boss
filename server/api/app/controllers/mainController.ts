import Debug from "debug";
const debug = Debug("mainController");

interface result {
    title: string,
    content: string
}

interface ReceivedMessage {
    content: string;
    pseudo: string;
}

export const mainController = {
    home(req: Request, res) {
        const result: result = {
            title: "hello",
            content: "world"
        };
        res.json(result);
    },

    toto(req, res) {
        function saveMessage(message: ReceivedMessage) {
            const savedMessage = message;
            debug("chat", savedMessage.pseudo);
        }
        saveMessage({ content: "ze", pseudo: "to" });
        res.send("trop hype");
    },
};

