import mongoose from "mongoose"
import dotenv from "dotenv";
const { env } = process

dotenv.config()

export default async ()=> {
     return await mongoose.connect(`mongodb://${env.host}:${env.db_port}/${env.database}`)
}