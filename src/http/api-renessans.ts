import http from "http";
import app from "../server";
import * as dotenv from "dotenv";
dotenv.config()

const server = http.createServer(app)
const port = process.env.PORT
server.listen(port, () => console.log("Listening port on " + port))