export function queryFormatter(str: string) {
	const regex = /[\s\n\t\r]/g;
	const stringFormatted = str.replace(regex, "%20");

	return stringFormatted;
}

export function queryCleaner(str: string) {
	// remove contiguous spaces and lowerCase the arg
	const lowerCase = str.toLowerCase();
	const newArray = [];

	for (const letter of lowerCase) {
		if (letter === " " && newArray[newArray.length - 1] === " ") continue;
		newArray.push(letter);
	}
	const strCleaned = newArray.join("");

	return strCleaned;
}
