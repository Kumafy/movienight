import { convertTime, getRelaseYear } from "../utils/movieFormatUtils";

const Description = ({ movie }) => {
	const { title, genres, release_date: releaseDate, runtime, overview } = movie;

	const releaseYear = getRelaseYear(releaseDate);
	const genresString = genres.reduce((value, genre) => value + genre.name + ", ", "").slice(0, -2);

	return (
		<section className="description">
			<div className="info">
				<span className="title">{title}</span>
				<span className="releaseYear">{" (" + releaseYear + ")"}</span>
			</div>
			<div className="genres">{genresString}</div>
			<div className="runtime">{convertTime(runtime)}</div>
			<div className="actions"></div>
			<div className="synopsis">{overview}</div>
			<div className="crew"></div>
		</section>
	);
};

export default Description;
