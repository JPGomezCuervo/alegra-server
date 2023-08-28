import server from "./server/index_server.js";
import sequelize from "./database/index_db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = 5000;
const HOST_NAME = "localhost";

server.listen(PORT, async () => {
	await sequelize.sync({ force: false });
	console.log(`Server listening to http://${HOST_NAME}:${PORT}`);
});
