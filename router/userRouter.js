import express from "express";
import * as userController from "../controller/user.Controller.js";
const userRoutes = express.Router();

userRoutes.post("/register", userController.userRegister);
// userRoutes.get("/userlist",)

export default userRoutes;
