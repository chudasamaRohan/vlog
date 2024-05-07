import express from "express";
import { config  } from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./router/userRouter.js";
import vlogRoutes from "./router/vlogRoutes.js"
import commentRoutes from "./router/commentRouter.js"
import authRoutes from "./router/authRoutes.js";
import likeRoutes from "./router/likeRouter.js";
import fileUpload from "express-fileupload";
config()


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({
  parseNested: true,
}));



app.use("/user",userRoutes)
app.use("/vlog",vlogRoutes)
app.use("/like",likeRoutes)
app.use("/comment",commentRoutes)
app.use("/auth",authRoutes)

app.listen(3000, () =>
  console.log(`Server running on port: http://localhost:${3000}`)
);
