import { Seller } from "../../database/models/Seller.js";
import { SellerBody } from "../server.types.js";

export const createSeller = async (body: SellerBody) => {
	const {
		name,
		id,
		points = 0,
		victories = 0,
		currentPoints = 0,
		status = true,
	} = body;
	if (!name || !id)
		throw new Error(
			"No ingresaste todos los datos requeridos. El vendedor debe tener un nombre y id válido",
		);
	try {
		return await Seller.create({
			id,
			name,
			victories,
			points,
			currentPoints,
			status,
		});
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Error de validación, el usuario con el ID:${id}`);
		} else {
			throw new Error("An unknown error occurred");
		}
	}
};

export const getAllSellers = async () => {
	try {
		const response = await Seller.findAll({
			where: {
				status: true,
			},
		});

		if (response.length) return response;
		throw new Error("Aún no tienes vendedores inscritos...");
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		} else {
			throw new Error("An unknown error occurred");
		}
	}
};

export const deleteSeller = async (id: number) => {
	const doesTheyExist = await findSeller(id);
	if (!doesTheyExist) throw new Error(`No existe el vendedor con ID: ${id}`);
	try {
		const response = await Seller.update(
			{ status: false },
			{
				where: {
					id: id,
				},
			},
		);
		return `${doesTheyExist.name} fue eliminado con éxito`;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		} else {
			throw new Error("An unknown error occurred");
		}
	}
};

export const findSeller = async (id: number) => {
	const response = await Seller.findOne({
		where: {
			id: id,
			status: true,
		},
	});
	return response;
};

export const updateSeller = async (id: number) => {
	try {
		const seller = await Seller.findOne({
			where: {
				id: id,
			},
		});

		if (seller) {
			try {
				const currentPoints = seller?.points;
				const updatedPoints = currentPoints + 1;
				seller?.update({ points: updatedPoints });
				seller.save();
				return {
					name: seller.name,
					pointsAdded: 1,
					totalPoints: updatedPoints,
				};
			} catch (error) {
				if (error instanceof Error) {
					throw new Error(error.message);
				} else {
					throw new Error("An unknown error occurred");
				}
			}
		}
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		} else {
			throw new Error("An unknown error occurred");
		}
	}
};
