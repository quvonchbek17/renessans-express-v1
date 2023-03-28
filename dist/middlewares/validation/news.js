"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNews = exports.updateNews = exports.postNews = void 0;
const joi_1 = __importDefault(require("joi"));
exports.postNews = joi_1.default.object().keys({
    title: joi_1.default.string().required(),
    desc: joi_1.default.string().required(),
    imgUrl: joi_1.default.string()
});
exports.updateNews = joi_1.default.object().keys({
    id: joi_1.default.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    title: joi_1.default.string(),
    desc: joi_1.default.string(),
    imgUrl: joi_1.default.string()
});
exports.deleteNews = joi_1.default.object().keys({
    id: joi_1.default.string().regex(/^[0-9a-fA-F]{24}$/).required()
});
