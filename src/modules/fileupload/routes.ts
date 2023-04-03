import { deleteNews, postNews, updateNews } from "../../middlewares/validation/news";
import validate from "../../middlewares/validation/validate";
import { Router } from "express";
import {FileUpload} from "./fileupload"
import protect from "../../middlewares/auth/protect";


const FilesRouter = Router()

FilesRouter
    .get("/:name", FileUpload.GetFile)
    .get("/download/:name", FileUpload.Download)
    .post("/", protect, FileUpload.Upload)


export default FilesRouter