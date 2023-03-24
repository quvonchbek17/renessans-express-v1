"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const model_1 = __importDefault(require("./model"));
const jwt_1 = require("../../utils/jwt");
class Login {
    static Login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            const admin = yield model_1.default.findOne({ username, password });
            if (!admin) {
                res.status(404).json({
                    success: false,
                    message: "Username yoki parol xato !"
                });
                return;
            }
            const token = yield jwt_1.Jwt.generateToken({ username: admin.username, password: admin.password });
            res.status(200).json({
                success: true,
                message: "Muvaffaqiyatli kirildi !",
                token: token
            });
        });
    }
}
exports.Login = Login;
