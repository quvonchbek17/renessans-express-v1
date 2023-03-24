"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongo_1 = __importDefault(require("./config/mongo"));
const errorHandler_middleware_1 = require("./middlewares/errorHandler.middleware");
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const path_1 = __importDefault(require("path"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const app = (0, express_1.default)();
// Parsers
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/uploads", express_1.default.static(path_1.default.join(__dirname, "uploads")));
app.use((0, express_fileupload_1.default)({
    limits: { fileSize: 40 * 1024 * 1024 },
    abortOnLimit: true,
}));
(0, mongo_1.default)()
    .then(() => console.log("Connected"))
    .catch((err) => console.log(err));
app.use("/api/v1", routes_1.default);
app.use("/*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Url topilmadi !"
    });
});
app.use(errorHandler_middleware_1.errorHandler);
exports.default = app;
