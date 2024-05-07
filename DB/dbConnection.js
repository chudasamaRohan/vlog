import {Sequelize,DataTypes} from "sequelize";
import dbConfig from "./config.js";
import { config } from "dotenv";
import User from "./userModel.js";
import Vlog from "./vlogModel.js";
import Comment from "./commentModel.js"
import Like from "./likeModel.js";
config()

const sequelize = new Sequelize(
    dbConfig.DB, 
    dbConfig.USER,
    dbConfig.PASSWORD, 
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operationsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
	    }
    }
);

let dbConnection = {}

 dbConnection = {
    sequelize
};

dbConnection.Users = User(sequelize,DataTypes)
dbConnection.Vlogs = Vlog(sequelize,DataTypes)
dbConnection.Comments = Comment(sequelize,DataTypes)
dbConnection.Likes = Like(sequelize,DataTypes)

dbConnection.Users.hasMany(dbConnection.Vlogs,{ foreignKey: 'userId' }); 
dbConnection.Vlogs.belongsTo(dbConnection.Users,{ foreignKey: 'userId' });

dbConnection.Users.hasMany(dbConnection.Comments, { foreignKey: 'userId' }); 
dbConnection.Comments.belongsTo(dbConnection.Users, { foreignKey: 'userId' }); 

 dbConnection.Vlogs.hasMany(dbConnection.Comments, { foreignKey: 'vlogId' });
dbConnection.Comments.belongsTo(dbConnection.Vlogs, { foreignKey: 'vlogId' }); 

dbConnection.Users.hasMany(dbConnection.Likes, {foreignKey:'UserId'})
dbConnection.Likes.belongsTo(dbConnection.Users,{foreignKey:'userId'})

dbConnection.Vlogs.hasMany(dbConnection.Likes,{foreignKey:'vlogId'})
dbConnection.Likes.belongsTo(dbConnection.Vlogs,{foreignKey:'vlogId'})

dbConnection.sequelize.sync().then(() => {    
    console.log("Drop and Re-sync DB");
});

export default dbConnection;    