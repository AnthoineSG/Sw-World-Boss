import "dotenv/config";
import * as express from "express";
import router from "./app/routes";

const app = express();

app.use(express.urlencoded({ extended: false }));

import * as swaggerUI from "swagger-ui-express";
import * as swaggerJsDoc from "swagger-jsdoc";
import { options } from "./app/services/swaggerConfig";

const specs = swaggerJsDoc(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(router);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(`Server start on http://localhost:${PORT}`);
});
