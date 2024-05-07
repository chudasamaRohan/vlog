import express from "express";
import * as likeController from "../controller/like.Controller.js"
import { authgaurd } from "../middlewear/authGaurd.js";

const likeRoutes = express.Router()
likeRoutes.post("/createLike",authgaurd,likeController.createLike)
likeRoutes.get("/likeList",authgaurd,likeController.likeList)
likeRoutes.get("/likeByVlog",authgaurd,likeController.likeByVlog)

export default likeRoutes;