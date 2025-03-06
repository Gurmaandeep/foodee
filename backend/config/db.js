import mongoose from "mongoose"
import 'dotenv/config'

export const connectDB = async () => {
    // const DB_URL = process.env.DB_URL;
    await mongoose.connect('mongodb://127.0.0.1:27017/maan').then(() => {
        console.log("DB connected Successfully");
    }).catch((err) => {
        console.log("Connection Failure to DataBase");
        console.log(err.message);
    })
}