import "dotenv/config";
import * as express from "express";
const app = express();

import router from "./app/routes";

app.use(router);

app.get("/", (req, res) => {

    interface ReceivedMessage {
        content: string;
        pseudo: string;
    }

    async function saveMessage(message: ReceivedMessage) {
        const savedMessage = message;
        console.log("chat", savedMessage.content);
    }

    saveMessage({ content: "to", pseudo: "to" });


    res.send("trop hype");
});

const PORT = process.env.PORT ?? 8000;
app.listen(PORT, () => {
    console.log(`server start on http://localhost:${PORT}`);
});