import {Sequelize,DataTypes} from "sequelize";
import dbConfig from "./config.js";
import { config } from "dotenv";
import User from "./user.js";
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

dbConnection.sequelize.sync({force: true}).then(() => {    
    console.log("Drop and Re-sync DB");
});

export default dbConnection;    