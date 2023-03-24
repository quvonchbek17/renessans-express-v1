import { NextFunction, Response, Request } from "express";
import { ErrorHandler } from "../errors/errorHandler";

export const errorHandler = (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
	res.status(err.status).json({
        message: err.message || "Something went wrong!",
        success: false
    })
}