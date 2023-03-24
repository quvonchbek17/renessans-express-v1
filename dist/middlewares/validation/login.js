"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh = exports.login = void 0;
const joi_1 = __importDefault(require("joi"));
exports.login = joi_1.default.object().keys({
    username: joi_1.default.string().required(),
    password: joi_1.default.string().required()
});
exports.refresh = joi_1.default.object().keys({
    refresh_token: joi_1.default.string().required()
});
