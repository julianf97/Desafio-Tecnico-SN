import express from "express";
import { getAllUsers, loginUser, signUpUser } from "../controllers/usersControllers.js";
import { signUpUserMiddleware } from "../middleware/signUpUserMiddleware.js";
import { authenticateUserMiddlewere } from "../middleware/autenticateUserMiddlewere.js";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.status(200).send("Server is running");
});

userRouter.get("/api/usuarios", getAllUsers);

userRouter.post("/api/iniciarsesion", authenticateUserMiddlewere, loginUser);

userRouter.post("/api/registro", signUpUserMiddleware, signUpUser);


export default userRouter;
