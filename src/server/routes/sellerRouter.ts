import { Router } from "express";
import {
	deleteSellers,
	getSellers,
	postSellers,
	putSellers,
} from "../handlers/sellersHandlers.js";
const sellersRouter = Router();

sellersRouter.get("/", getSellers);
sellersRouter.post("/", postSellers);
sellersRouter.delete("/:id", deleteSellers);
sellersRouter.put("/:id/:points", putSellers);

export default sellersRouter;
