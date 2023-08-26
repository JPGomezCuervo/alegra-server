import { BASE_URL } from "../../utils/constants.js";
import { queryFormatter } from "../../utils/utils.js";
import { ImageResult } from "../server.types.js";
import axios from "axios";

export const searchImage = async (queries: string) => {

    const strTrimmed = queries.trim();
    
	if (!strTrimmed)throw new Error("La barra de búsqueda no pueda estar vacía");

    const queryFormatted = queryFormatter(strTrimmed);

	const numberOfResults = 10;
	const searchType = "image";
	const link = `${BASE_URL}num=${numberOfResults}&searchType=${searchType}&q=${queryFormatted}%20hd`;
    const response = await axios.get(link);
	

    const extractImageLinks = response.data.items.map((el:ImageResult) => el.link)

    return extractImageLinks;

};

export const checkImageAvailability = async (images: string[], desiredImages: number) => {
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

  return checkedImages.slice(0,desiredImages);
};
