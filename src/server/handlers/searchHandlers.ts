import { Request, Response } from "express";
import {
	searchImage,
	checkImageAvailability,
} from "../controllers/searchControllers.js";

export const getSearch = async (req: Request, res: Response) => {
	const { q } = req.query as { q: string };
	const desiredImages = 3;
	const response = await searchImage(q);
	const filteredImages = await checkImageAvailability(response, desiredImages);
	res.status(200).json(filteredImages);
};
