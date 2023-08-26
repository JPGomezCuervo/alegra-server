import { Router } from "express";
import { getSearch } from "../handlers/searchHandlers.js";

const searchRouter = Router();

searchRouter.get("/", getSearch);

export default searchRouter;
