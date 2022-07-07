import { Router, Request, Response } from "express";
const userRouter = Router();

import { userController } from "../controllers/userController";

userRouter.get("/user", (req: Request, res: Response) => {
    res.json({});
});

userRouter
    .route("/user")
    .post(userController.insertOne)
;

export default userRouter;
