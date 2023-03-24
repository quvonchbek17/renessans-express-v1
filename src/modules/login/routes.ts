import { login, refresh } from "../../middlewares/validation/login";
import validate from "../../middlewares/validation/validate";
import { Router } from "express";
import {Login} from "./login"


const LoginRouter = Router()

LoginRouter
    .post("/login", validate(login), Login.Login)


export default LoginRouter