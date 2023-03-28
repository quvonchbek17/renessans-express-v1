import mongoose from "mongoose"
import dotenv from "dotenv";
const { env } = process

dotenv.config()

export default async ()=> {
     return await mongoose.connect(`mongodb://127.0.0.1:27017/renessans`)
}