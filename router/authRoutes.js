import express from "express";
const authRoutes = express.Router()
import * as authController from "../controller/auth.Controller.js"

authRoutes.post("/login",authController.login)

export default authRoutes