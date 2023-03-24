import { Request, Response, NextFunction } from "express";
import model from "./model"
import { ErrorHandler } from "../../errors/errorHandler"
import { Jwt } from "../../utils/jwt";


export class Login {

    static async Login(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { username, password} =  req.body;

        const admin = await model.findOne({username, password})

        if(!admin){

            res.status(404).json({
                success: false,
                message: "Username yoki parol xato !"
            })
            return
        }

        const token = await Jwt.generateToken({username: admin.username, password: admin.password})

        res.status(200).json({
            success: true,
            message: "Muvaffaqiyatli kirildi !",
            token: token
        })
    }
}
