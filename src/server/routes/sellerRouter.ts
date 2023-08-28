import { Router } from "express";
import {
	deleteSellers,
	getSellers,
	postSellers,
	putSellers,
    getAllSellersInformation
} from "../handlers/sellersHandlers.js";
const sellersRouter = Router();

sellersRouter.get("/", getSellers);
sellersRouter.post("/", postSellers);
sellersRouter.get("/all",getAllSellersInformation);
sellersRouter.delete("/:id", deleteSellers);
sellersRouter.put("/:id/:points", putSellers);

export default sellersRouter;
