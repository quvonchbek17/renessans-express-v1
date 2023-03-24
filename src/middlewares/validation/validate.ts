import { ErrorHandler } from "../../errors/errorHandler";
import { Request, Response, NextFunction } from "express";
import Joi, { ObjectSchema } from "joi";
import { ValidateRequest } from "../../interface/validate.interface";

const validate = (schema: ObjectSchema<any>, typeSchema = "body") => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
     let validated;
      if(typeSchema === "body"){
        validated = await schema.validateAsync(req.body);
        req.body= validated;
      }

      if(typeSchema === "params"){
        validated = await schema.validateAsync(req.params);
        req.params= validated;
      }

      next();
    } catch (err: unknown) {
        next(new ErrorHandler((err as Error).message, 400));
    }
  };
};

export default validate;