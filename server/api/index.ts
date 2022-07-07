import "dotenv/config";

import * as path from "path";

import * as express from "express";
const app = express();

//? *********CORS*********/
import * as cors from "cors";
app.use(cors());

import * as multer from "multer";
const upload = multer();
app.use(upload.none());

app.use(express.static(__dirname + "/public"));

app.set("views", path.join(__dirname, "/app/views"));
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: false }));

//? *********SWAGGER*********/
import * as swaggerJsDoc from "swagger-jsdoc";
import * as swaggerUI from "swagger-ui-express";
import { options, cssOptions } from "./app/services/swagger";
const swaggerSpecs = swaggerJsDoc(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs, cssOptions));

//? *********ROUTES*********/
import router from "./app/routes";
app.use(router);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(`Server API start on http://localhost:${PORT}`);
});
