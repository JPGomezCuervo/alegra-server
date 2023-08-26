import dotenv from "dotenv";
dotenv.config();

const { G_APIKEY, G_SEARCH_ENGINE } = process.env;

export const GOOGLE_API = "https://www.googleapis.com/customsearch/v1?";

export const BASE_URL = `${GOOGLE_API}key=${G_APIKEY}&cx=${G_SEARCH_ENGINE}&`;

