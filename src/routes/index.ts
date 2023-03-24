import { Router } from "express";
import NewsRouter from "../modules/news/routes";
import EmployeesRouter from "../modules/employees/routes";
import PublicationsRouter from "../modules/publications/routes";
import LoginRouter from "../modules/login/routes";
import protect from "../middlewares/auth/protect";
import FilesRouter from "../modules/fileupload/routes";

const router = Router()

router.use("/auth", LoginRouter)
router.use("/news", protect, NewsRouter)
router.use("/employees", protect, EmployeesRouter)
router.use("/publications", protect, PublicationsRouter)
router.use("/files", FilesRouter)

export default router