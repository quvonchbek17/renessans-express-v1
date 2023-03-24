"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employees_1 = require("../../middlewares/validation/employees");
const validate_1 = __importDefault(require("../../middlewares/validation/validate"));
const express_1 = require("express");
const employees_2 = require("./employees");
const EmployeesRouter = (0, express_1.Router)();
EmployeesRouter
    .get("/", employees_2.Employees.Get)
    .post("/", (0, validate_1.default)(employees_1.postEmployee), employees_2.Employees.Post)
    .patch("/", (0, validate_1.default)(employees_1.updateEmployee), employees_2.Employees.Update)
    .delete("/:id", (0, validate_1.default)(employees_1.deleteEmployee, "params"), employees_2.Employees.Delete);
exports.default = EmployeesRouter;
