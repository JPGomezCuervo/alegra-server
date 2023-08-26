export function queryFormatter(str: string) {
	// remove contiguous spaces and lowerCase the arg
	const lowerCase = str.toLowerCase();
	const newArray = [];

	for (const letter of lowerCase) {
		if (letter === " " && newArray[newArray.length - 1] === " ") continue;
		newArray.push(letter);
	}
	const strCleaned = newArray.join("");
	const regex = /[\s\n\t\r]/g;
	const stringFormatted = strCleaned.replace(regex, "%20");

	return stringFormatted;
}
