import express from "express";
import morgan from "morgan";
import sequelize from "./database/index_db.js";

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
	await sequelize.sync({ force: true });
	console.log(`Server listening to http://${HOST_NAME}:${PORT}`);
});
