import { deleteNews, postNews, updateNews } from "../../middlewares/validation/news";
import validate from "../../middlewares/validation/validate";
import { Router } from "express";
import {News} from "./news"


const NewsRouter = Router()

NewsRouter
    .get("/", News.Get)
    .post("/", validate(postNews), News.Post)
    .patch("/", validate(updateNews), News.Update)
    .delete("/:id", validate(deleteNews, "params"), News.Delete)


export default NewsRouter