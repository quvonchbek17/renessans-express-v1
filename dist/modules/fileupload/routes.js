"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fileupload_1 = require("./fileupload");
const protect_1 = __importDefault(require("../../middlewares/auth/protect"));
const FilesRouter = (0, express_1.Router)();
FilesRouter
    .get("/:name", fileupload_1.FileUpload.GetFile)
    .post("/", protect_1.default, fileupload_1.FileUpload.Upload);
exports.default = FilesRouter;
