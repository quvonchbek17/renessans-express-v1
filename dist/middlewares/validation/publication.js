"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePublication = exports.updatePublication = exports.postPublication = void 0;
const joi_1 = __importDefault(require("joi"));
exports.postPublication = joi_1.default.object().keys({
    name: joi_1.default.string().required(),
    desc: joi_1.default.string().required(),
    imgUrl: joi_1.default.string(),
    fileUrl: joi_1.default.string()
});
exports.updatePublication = joi_1.default.object().keys({
    id: joi_1.default.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    name: joi_1.default.string(),
    desc: joi_1.default.string(),
    imgUrl: joi_1.default.string(),
    fileUrl: joi_1.default.string()
});
exports.deletePublication = joi_1.default.object().keys({
    id: joi_1.default.string().regex(/^[0-9a-fA-F]{24}$/).required()
});
