import dbConnection from "../DB/dbConnection.js";
import bcrypt from "bcrypt";

export const userRegister = async (userData) => {
  try {

    const isUserExits = await dbConnection.Users.findOne({where:{
      email:userData.email
    }}).catch((e) => {
      console.log("Error::",e);
      return e
    })
    if(isUserExits){
      return {
        message:" user Allready Exits."
      }
    }
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(userData.password, salt);
    userData.password = hashedPassword
    const userSaveData = await dbConnection.Users.create(userData);
    return userSaveData;
  } catch (error) {
    return error;
  }
};

export const updateUser = async (updatedData,req) => {
  try {
    const user = await dbConnection.Users.findOne({
      where: {
        id: req.id,
      },
    });
    if (user && user.dataValues.id) {
      return await dbConnection.Users.update(updatedData, {
        where: {
          id: user.id,
        },
      });
    } else {
      return {
        message: "user Not Found.",
      };
    }
  } catch (error) {
    return error;
  }
};

export const userList = async () => {
  try {
    const userData = await dbConnection.Users.findAll()
    return userData
  } catch (error) {
    return error
  }
}
