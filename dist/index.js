import express from "express";
const server = express();
const PORT = 5000;
const HOST_NAME = "localhost";
server.listen(PORT, () => {
	console.log(`Server listening to http://${HOST_NAME}:${PORT}`);
});
//# sourceMappingURL=index.js.map
