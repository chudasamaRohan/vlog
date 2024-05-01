import express from "express";
import { config  } from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./router/userRouter.js";
import dbConnection from "./DB/dbConnection.js";
import User from "./DB/dbConnection.js"
config()
// console.log(">>>>>",dbConnection);



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user",userRoutes)

app.listen(process.env.PORT, () =>
  console.log(`Server running on port: http://localhost:${process.env.PORT}`)
);
