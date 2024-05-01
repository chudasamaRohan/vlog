// import dbConnection from "../DB/dbConnection.js";
// console.log(dbConnection.sequelize);
// import { DataTypes } from "sequelize";

// const sequelize = dbConnection.sequelize
 const User = (sequelize,DataTypes)=> {
   sequelize.define("User", {
     firstName: {
       type: DataTypes.STRING,
       allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER
      },
      contactNumber: {
        type: DataTypes.BIGINT
      }
    });
  }

(async () => {
  try {
    // console.log("hello>>>>>>>");
    // await sequelize.sync();
    console.log('User table created successfully!');
  } catch (error) {
    console.error('Unable to create User table:', error);
  }
})();

// const User='';

export default User;
