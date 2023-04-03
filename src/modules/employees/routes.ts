import { postEmployee, updateEmployee, deleteEmployee } from "../../middlewares/validation/employees";
import validate from "../../middlewares/validation/validate";
import { Router } from "express";
import { Employees } from "./employees"
import protect from "../../middlewares/auth/protect";


const EmployeesRouter = Router()

EmployeesRouter
    .get("/", Employees.Get)
    .post("/", protect, validate(postEmployee), Employees.Post)
    .patch("/", protect, validate(updateEmployee), Employees.Update)
    .delete("/:id", protect, validate(deleteEmployee, "params"), Employees.Delete)


export default EmployeesRouter