import { config } from "dotenv";
config()

export default  {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "krupa$har",
    DB: "vlog",
    dialect: "mysql", 
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};