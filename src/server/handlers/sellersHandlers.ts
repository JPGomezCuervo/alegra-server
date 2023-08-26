import { Request, Response } from "express";
import { SellerBody } from "../server.types.js";
import {
	createSeller,
	getAllSellers,
	deleteSeller,
} from "../controllers/sellersControllers.js";

export const getSellers = async (req: Request, res: Response) => {
	try {
		const response = await getAllSellers();
		return res.status(200).json(response);
	} catch (error) {
		if (error instanceof Error) {
			res.status(400).json(error.message);
		} else {
			res.status(500).json("Error en el servidor :(");
		}
	}
};

export const postSellers = async (req: Request, res: Response) => {
	const body: SellerBody = req.body;

	try {
		const respose = await createSeller(body);
		return res
			.status(200)
			.json(`La cuenta fue creada con éxito: ¡${respose.name} a vender!`);
	} catch (error) {
		if (error instanceof Error) {
			res.status(400).json(error.message);
		} else {
			res.status(500).json("Error en el servidor :(");
		}
	}
};

export const deleteSellers = async (req: Request, res: Response) => {
	const id: string = req.params.id;
	try {
		const response = await deleteSeller(Number(id));

		return res.status(200).json(response);
	} catch (error) {
		if (error instanceof Error) {
			res.status(400).json(error.message);
		} else {
			res.status(500).json("Error en el servidor :(");
		}
	}
};
