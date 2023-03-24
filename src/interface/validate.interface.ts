import { Request } from "express"

export interface ValidateRequest extends Request {
    typeSchema: any
}