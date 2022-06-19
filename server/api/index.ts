import "dotenv/config";
import * as express from "express";
import router from "./app/routes";

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(router);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(`Server start on http://localhost:${PORT}`);
});
