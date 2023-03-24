"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = __importDefault(require("../modules/news/routes"));
const routes_2 = __importDefault(require("../modules/employees/routes"));
const routes_3 = __importDefault(require("../modules/publications/routes"));
const routes_4 = __importDefault(require("../modules/login/routes"));
const protect_1 = __importDefault(require("../middlewares/auth/protect"));
const routes_5 = __importDefault(require("../modules/fileupload/routes"));
const router = (0, express_1.Router)();
router.use("/auth", routes_4.default);
router.use("/news", protect_1.default, routes_1.default);
router.use("/employees", protect_1.default, routes_2.default);
router.use("/publications", protect_1.default, routes_3.default);
router.use("/files", routes_5.default);
exports.default = router;
