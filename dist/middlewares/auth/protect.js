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
const jwt_1 = require("../../utils/jwt");
const model_1 = __importDefault(require("../../modules/login/model"));
const protect = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let authToken = "";
        const token = req.headers.authorization;
        if (token && token.startsWith("Bearer ")) {
            authToken = token.split(" ")[1];
        }
        if (!authToken) {
            res.status(401).json({
                success: false,
                message: "Foydalanish uchun tizimga kiring !"
            });
            return;
        }
        const decodedToken = yield jwt_1.Jwt.verify(authToken);
        if (!decodedToken) {
            res.status(400).json({
                success: false,
                message: "Tokenda muammo bor !"
            });
            return;
        }
        const admin = yield model_1.default.findOne({ username: decodedToken.username, password: decodedToken.password });
        if (!admin) {
            res.status(404).json({
                success: false,
                message: "Admin topilmadi !"
            });
            return;
        }
        next();
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: "Tokenda muammo yoki xatolik, Iltimos tokenni yangilang yoki tizimga qaytadan kiring !!!"
        });
        return;
    }
});
exports.default = protect;
