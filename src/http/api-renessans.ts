import http from "http";
import app from "../server";
import dotenv from "dotenv";
dotenv.config()

const server = http.createServer(app)
const port = process.env.PORT || 9988
server.listen(port, () => console.log("Listening port on " + port))