import { postEmployee, updateEmployee, deleteEmployee } from "../../middlewares/validation/employees";
import validate from "../../middlewares/validation/validate";
import { Router } from "express";
import { Employees } from "./employees"


const EmployeesRouter = Router()

EmployeesRouter
    .get("/", Employees.Get)
    .post("/", validate(postEmployee), Employees.Post)
    .patch("/", validate(updateEmployee), Employees.Update)
    .delete("/:id", validate(deleteEmployee, "params"), Employees.Delete)


export default EmployeesRouter