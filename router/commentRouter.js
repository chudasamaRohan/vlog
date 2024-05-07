import express from "express";
import * as commnetController from "../controller/comment.Controller.js"
import {authgaurd} from "../middlewear/authGaurd.js"

const commentRoutes = express.Router()
commentRoutes.post("/createCommnet",authgaurd,commnetController.createCommment)
commentRoutes.get("/commentList",authgaurd,commnetController.getAllCommentList)
commentRoutes.get("/byId",authgaurd,commnetController.getCommentById)
commentRoutes.get("/commentByVlog",commnetController.commentByVlog)

export default commentRoutes;