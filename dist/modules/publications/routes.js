"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const publication_1 = require("../../middlewares/validation/publication");
const validate_1 = __importDefault(require("../../middlewares/validation/validate"));
const express_1 = require("express");
const publications_1 = require("./publications");
const PublicationRouter = (0, express_1.Router)();
PublicationRouter
    .get("/", publications_1.Publications.Get)
    .post("/", (0, validate_1.default)(publication_1.postPublication), publications_1.Publications.Post)
    .patch("/", (0, validate_1.default)(publication_1.updatePublication), publications_1.Publications.Update)
    .delete("/:id", (0, validate_1.default)(publication_1.deletePublication, "params"), publications_1.Publications.Delete);
exports.default = PublicationRouter;
