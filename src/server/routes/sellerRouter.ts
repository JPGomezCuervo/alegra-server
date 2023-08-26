import { Router } from "express";
import {
	deleteSellers,
	getSellers,
	postSellers,
} from "../handlers/sellersHandlers.js";
const sellersRouter = Router();

sellersRouter.get("/", getSellers);
sellersRouter.post("/", postSellers);
sellersRouter.delete("/:id", deleteSellers);

export default sellersRouter;
