import { Sequelize } from "sequelize-typescript";
import { Seller } from "./models/Seller.js";
import { Admin } from "./models/Admin.js";
import dotenv from "dotenv";

dotenv.config(); // dotenv

const { PGUSER, PGHOST, PGPASSWORD, PGPORT, PGDATABASE } = process.env;

const sequelize = new Sequelize({
	dialect: "postgres",
	port: Number(PGPORT),
	host: PGHOST,
	database: PGDATABASE,
	username: PGUSER,
	password: PGPASSWORD,
	models: [Seller, Admin],
	native: false,
	logging: false,
});

export default sequelize;
