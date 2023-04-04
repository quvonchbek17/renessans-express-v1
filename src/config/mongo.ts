import mongoose from "mongoose"
import * as dotenv from "dotenv"
dotenv.config()

export default async ()=> {
     return await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`)
}