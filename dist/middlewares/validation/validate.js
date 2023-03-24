"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = require("../../errors/errorHandler");
const validate = (schema, typeSchema = "body") => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let validated;
            if (typeSchema === "body") {
                validated = yield schema.validateAsync(req.body);
                req.body = validated;
            }
            if (typeSchema === "params") {
                validated = yield schema.validateAsync(req.params);
                req.params = validated;
            }
            next();
        }
        catch (err) {
            next(new errorHandler_1.ErrorHandler(err.message, 400));
        }
    });
};
exports.default = validate;
