import "dotenv/config";
import * as path from "path";
import * as express from "express";
import router from "./app/routes";

const app = express();

app.use(express.static(__dirname + "/public"));

app.set("views", path.join(__dirname, "/app/views"));
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: false }));

import * as swaggerJsDoc from "swagger-jsdoc";
import * as swaggerUI from "swagger-ui-express";
import { options, cssOptions } from "./app/services/swagger";

const swaggerSpecs = swaggerJsDoc(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs, cssOptions));

app.use(router);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(`Server API start on http://localhost:${PORT}`);
});
