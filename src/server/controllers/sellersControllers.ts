import { Seller } from "../../database/models/Seller.js";
import { SellerBody } from "../server.types.js";

export const createSeller = async (body: SellerBody) => {

    const { name, id, points = 0, victories = 0, currentPoints = 0 } = body;
    if (!name || !id) throw new Error("No ingresaste todos los datos requeridos. El vendedor debe tener un nombre y id válido");
    try {
        return await Seller.create({ id, name, victories, points, currentPoints });
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error de validación, el usuario con el ID:${id}` );
        } else {
            throw new Error("An unknown error occurred");
        }
    }
};

export const getAllSellers = async () => {
    try {
        const response = await Seller.findAll();

        if (response.length) return response;
        throw new Error("Aún no tienes vendedores inscritos...")

    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unknown error occurred");
        }
    }
}
