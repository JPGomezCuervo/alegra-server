import { Request, Response } from "express";
import {
	searchImage,
	checkImageAvailability,
    assignOwner
} from "../controllers/searchControllers.js";
import { queryCleaner } from "../../utils/utils.js";

export const getSearch = async (req: Request, res: Response) => {
	const { q } = req.query as { q: string };
	const desiredImages = 3;

	try {
		const strTrimmed = q.trim();
		if (!strTrimmed)
			throw new Error("La barra de búsqueda no pueda estar vacía");
		const cleanedQuery = queryCleaner(strTrimmed);
		const response = await searchImage(cleanedQuery);
		const filteredImages = await checkImageAvailability(
			response,
			desiredImages,
		);
        const assignOwnerOfEachImage = await assignOwner(filteredImages, desiredImages);
		const finalResponse = {
			links: assignOwnerOfEachImage,
            query: cleanedQuery
		};
		res.status(200).json(finalResponse);
	} catch (error) {
		if (error instanceof Error) {
			res.status(400).json(error.message);
		} else {
			res.status(400).json("Error en el servidor :(");
		}
	}
};
