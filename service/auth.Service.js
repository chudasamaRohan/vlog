import dbConnection from "../DB/dbConnection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

    
    
export const login = async (data) => {
  try {
      const user = await dbConnection.Users.findOne({ where: { email: data.email } });
      if (user) {
        const password_valid = await bcrypt.compare(data.password, user.password);
          if (password_valid) {
             const token = jwt.sign({ "id": user.id, "email": user.email }, "mysecret")
              return { token: token };
          } else {
              return{ error: "Password Incorrect" };
          }
      } else {
          return{ error: "user not found" };
      }
  } catch (error) {
      return error
  }
}