import mongoose from "mongoose";
import logger from "./logger.js";

const db = 'mongodb+srv://Irfan234:Irfan1234@cluster0.vnozfqc.mongodb.net/warehouse';
mongoose.set('strictQuery', true);
mongoose.connect(db,{
}).then(()=> logger.debug("DataBase connected"))
.catch((err)=>{
    logger.debug(`Database connection failed`)
    logger.log(err);
})

export default db;