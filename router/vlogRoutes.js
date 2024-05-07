import express from "express";
import * as vlogController from "../controller/vlog.controller.js"
import {authgaurd} from "../middlewear/authGaurd.js"

const vlogRoutes = express.Router()
vlogRoutes.post("/uploads",  authgaurd,vlogController.createVlog)
vlogRoutes.get("/vlogList",authgaurd,vlogController.vlogList)



export default vlogRoutes;  