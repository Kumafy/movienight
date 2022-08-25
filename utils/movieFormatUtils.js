export const convertTime = (minutes) => {
	const minutesInt = parseInt(minutes, 10);
	const hours = Math.floor(minutesInt / 60);
	const minutesDisplay = minutesInt - hours * 60;

	if (!!hours) {
		return `${hours}h ${minutesDisplay}m`;
	}

	return `${minutesDisplay}m`;
};

export const getRelaseYear = (releaseDate) => new Date(Date.parse(releaseDate)).getFullYear();
