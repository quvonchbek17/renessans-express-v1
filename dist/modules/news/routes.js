"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const news_1 = require("../../middlewares/validation/news");
const validate_1 = __importDefault(require("../../middlewares/validation/validate"));
const express_1 = require("express");
const news_2 = require("./news");
const NewsRouter = (0, express_1.Router)();
NewsRouter
    .get("/", news_2.News.Get)
    .post("/", (0, validate_1.default)(news_1.postNews), news_2.News.Post)
    .patch("/", (0, validate_1.default)(news_1.updateNews), news_2.News.Update)
    .delete("/:id", (0, validate_1.default)(news_1.deleteNews, "params"), news_2.News.Delete);
exports.default = NewsRouter;
