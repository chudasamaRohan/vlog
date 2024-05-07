import express from "express";
import * as userController from "../controller/user.Controller.js";
import { authgaurd } from "../middlewear/authGaurd.js";

const userRoutes = express.Router();

userRoutes.post("/register", userController.userRegister);
userRoutes.post("/update",authgaurd,userController.updateUser)
userRoutes.get("/list",authgaurd,userController.userList)

export default userRoutes;
