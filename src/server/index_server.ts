import express from "express";
import routes from "./routes/index_routes.js";
import morgan from "morgan";

const server = express();


// Morgan config
server.use(morgan('dev'));
// start server
server.use("/", routes);


export default server;
