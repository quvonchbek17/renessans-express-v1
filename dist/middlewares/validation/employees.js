"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.postEmployee = void 0;
const joi_1 = __importDefault(require("joi"));
exports.postEmployee = joi_1.default.object().keys({
    fullname: joi_1.default.string().required(),
    position: joi_1.default.string().required(),
    degree: joi_1.default.string(),
    university: joi_1.default.string(),
    imgUrl: joi_1.default.string()
});
exports.updateEmployee = joi_1.default.object().keys({
    id: joi_1.default.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    fullname: joi_1.default.string(),
    position: joi_1.default.string(),
    degree: joi_1.default.string(),
    university: joi_1.default.string(),
    imgUrl: joi_1.default.string()
});
exports.deleteEmployee = joi_1.default.object().keys({
    id: joi_1.default.string().regex(/^[0-9a-fA-F]{24}$/).required()
});
