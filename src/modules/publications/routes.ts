import { postPublication, updatePublication, deletePublication } from "../../middlewares/validation/publication";
import validate from "../../middlewares/validation/validate";
import { Router } from "express";
import {Publications} from "./publications"


const PublicationRouter = Router()

PublicationRouter
    .get("/", Publications.Get)
    .post("/", validate(postPublication), Publications.Post)
    .patch("/", validate(updatePublication), Publications.Update)
    .delete("/:id", validate(deletePublication, "params"), Publications.Delete)


export default PublicationRouter