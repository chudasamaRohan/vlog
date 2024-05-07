import bcrypt from "bcrypt";
const User = (sequelize,DataTypes) => {
   return sequelize.define("users", {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
     firstName: {
       type: DataTypes.STRING,
       allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email:{
        type: DataTypes.STRING,
        allowNull:false
      },
      password:{
        type:DataTypes.STRING,
        allowNull:false
      },
      age: {
        type: DataTypes.INTEGER
      },
      contactNumber: {
        type: DataTypes.BIGINT
      }
    },
)
// {
//   hooks: {
//    beforeCreate: async (user) => {
//     if (user.password) {
//      const salt = await bcrypt.genSaltSync(10, 'a');
//      user.password = bcrypt.hashSync(user.password, salt);
//     }
//    }}
//   };
}

export default User;
