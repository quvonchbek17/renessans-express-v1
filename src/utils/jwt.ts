import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
dotenv.config()

export class Jwt {

    static async generateToken(payload: any) {
         return jwt.sign(payload,  process.env.SECRET_KEY || "")
    }

    static async verify(payload: any)  {
        return jwt.verify(payload, process.env.SECRET_KEY || "")
   }
}
