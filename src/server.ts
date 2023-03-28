import express, { Application, Request, Response } from "express";
import mongo from "./config/mongo";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import api from "./routes"
import dotenv from "dotenv";
dotenv.config()
import path from "path";
import fileUpload from "express-fileupload";

const app: Application = express()

//// cors
app.use(cors({ origin: "*" }))

// Parsers
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use(fileUpload({
    limits: { fileSize: 40 * 1024 * 1024 },
    abortOnLimit: true,
}))

mongo()
    .then(() => console.log("Connected"))
    .catch((err: unknown) => console.log(err));

app.use("/api/v1", api)
app.use("/*", (req: Request, res: Response ): void => {
     res.status(404).json({
        success: false,
        message: "Url topilmadi !"
     })
})
app.use(errorHandler)


export default app;