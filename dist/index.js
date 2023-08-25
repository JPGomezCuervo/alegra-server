import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import sequelize from "./database/index_db.js";
dotenv.config(); // dotenv
// Morgan config
morgan(function (tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, "content-length"),
        "-",
        tokens["response-time"](req, res),
        "ms",
    ].join(" ");
});
// start server
const server = express();
const PORT = 5000;
const HOST_NAME = "localhost";
server.listen(PORT, async () => {
    const { PGUSER, PGHOST, PGPASSWORD, PGPORT, PGDATABASE } = process.env;
    console.log("Arranque");
    console.log(PGUSER, PGHOST, PGPASSWORD, PGPORT, PGDATABASE);
    await sequelize.sync({ force: true });
    console.log(`Server listening to http://${HOST_NAME}:${PORT}`);
});
//# sourceMappingURL=index.js.map