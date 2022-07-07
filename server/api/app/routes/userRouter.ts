import { Router } from "express";
const userRouter = Router();

import { userController } from "../controllers/userController";

userRouter.get("/user", (req, res) => {
    res.json({});
});

userRouter
    .route("/user")
    .post(userController.insertOne)
;

export default userRouter;