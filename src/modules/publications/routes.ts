import { postPublication, updatePublication, deletePublication } from "../../middlewares/validation/publication";
import validate from "../../middlewares/validation/validate";
import { Router } from "express";
import {Publications} from "./publications"
import protect from "../../middlewares/auth/protect";


const PublicationRouter = Router()

PublicationRouter
    .get("/", Publications.Get)
    .post("/", protect, validate(postPublication), Publications.Post)
    .patch("/", protect, validate(updatePublication), Publications.Update)
    .delete("/:id", protect, validate(deletePublication, "params"), Publications.Delete)


export default PublicationRouter