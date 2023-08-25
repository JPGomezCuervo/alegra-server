import { Sequelize } from "sequelize-typescript";

const { PGUSER, PGHOST, PGPASSWORD, PGPORT, PGDATABASE } = process.env;

const sequelize = new Sequelize({
	dialect: "postgres",
	port: Number(PGPORT),
	host: PGHOST,
	database: PGDATABASE,
	username: PGUSER,
	password: PGPASSWORD,
	models: [],
	native: false,
	logging: false,
});

export default sequelize;
