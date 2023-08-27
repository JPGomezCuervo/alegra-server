import { BASE_URL } from "../../utils/constants.js";
import { queryFormatter } from "../../utils/utils.js";
import { ImageResult, SellerBody } from "../server.types.js";
import { getAllSellers } from "./sellersControllers.js";
import axios from "axios";

export const searchImage = async (queries: string) => {
	const queryFormatted = queryFormatter(queries);

	const numberOfResults = 10;
	const searchType = "image";
	const link = `${BASE_URL}num=${numberOfResults}&searchType=${searchType}&q=${queryFormatted}%20hd`;
	const response = await axios.get(link);

	const extractImageLinks = response.data.items.map(
		(el: ImageResult) => el.link,
	);

	return extractImageLinks;
};

export const checkImageAvailability = async (
	images: string[],
	desiredImages: number,
) => {
	const checkedImages = [];

	for (const image of images) {
		try {
			const response = await axios.get(image);
			if (response.status < 300) {
				checkedImages.push(image);
			}
		} catch (error) {
			// Handle error if necessary
		}
	}

	return checkedImages.slice(0, desiredImages);
};

export const assignOwner = async (links:string[], desiredImages:number) => {
    try {
        const sellers = await getAllSellers();
        const selectedSellers = sellers.slice(0, desiredImages);  
        const assignment = links.map((link, index) => {
           return {
                seller: {
                    id: selectedSellers[index]?.id,
                    name: selectedSellers[index]?.name
                },

                link
            } 
        })

        return assignment;
        
        
    } catch (error) {
		if (error instanceof Error) {
            throw new Error (error.message)
		} else {
            throw new Error ("Error en el servidor :(")
		}
        
    }

}
