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
            console.log("chat", savedMessage.content);
        }
        saveMessage({ content: "to", pseudo: "to" });
        res.send("trop hype");
    },
};

