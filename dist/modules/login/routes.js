"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = require("../../middlewares/validation/login");
const validate_1 = __importDefault(require("../../middlewares/validation/validate"));
const express_1 = require("express");
const login_2 = require("./login");
const LoginRouter = (0, express_1.Router)();
LoginRouter
    .post("/login", (0, validate_1.default)(login_1.login), login_2.Login.Login);
exports.default = LoginRouter;
