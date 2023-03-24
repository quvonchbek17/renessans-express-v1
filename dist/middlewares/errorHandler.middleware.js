"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    res.status(err.status).json({
        message: err.message || "Something went wrong!",
        success: false
    });
};
exports.errorHandler = errorHandler;
