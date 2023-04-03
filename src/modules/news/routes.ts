import { deleteNews, postNews, updateNews } from "../../middlewares/validation/news";
import validate from "../../middlewares/validation/validate";
import { Router } from "express";
import {News} from "./news"
import protect from "../../middlewares/auth/protect";


const NewsRouter = Router()

NewsRouter
    .get("/", News.Get)
    .post("/", protect, validate(postNews), News.Post)
    .patch("/", protect, validate(updateNews), News.Update)
    .delete("/:id", protect, validate(deleteNews, "params"), News.Delete)


export default NewsRouter