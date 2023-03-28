import jwt from "jsonwebtoken"
import { ErrorHandler } from "../errors/errorHandler"

export class Jwt {

    static async generateToken(payload: any) {
         return jwt.sign(payload, "secretkeyjuda" || "")
    }

    static async verify(payload: any)  {
        return jwt.verify(payload, "secretkeyjuda" || "")
   }
}
