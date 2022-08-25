import Image from "next/image";
import Link from "next/link";

import { getImageURL } from "../pages/api/apiUtils";
import { getRelaseYear } from "../utils/movieFormatUtils";

import CoverImage from "./CoverImage";

const FeatureSlide = ({ movie }) => {
	const { backdrop_path: backdropPath, title, release_date: releaseDate, id } = movie;

	const releaseYear = getRelaseYear(releaseDate);

	return (
		<section className="featureSlide">
			<CoverImage path={getImageURL(backdropPath)} grayscale={0.5} />
			<Link href={"/detail/" + id}>
				<div className="innerSlide">
					<div className="info">
						<span className="title">{title}</span>
						<span className="releaseYear">{" (" + releaseYear + ")"}</span>
					</div>
					<Image
						className="image"
						src={getImageURL(backdropPath)}
						alt={backdropPath}
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsamlZAAAFZgI0KMHsAQAAAABJRU5ErkJggg=="
						placeholder="blur"
						layout="fill"
						objectFit="cover"
						objectPosition="top"
					/>
				</div>
			</Link>
		</section>
	);
};

export default FeatureSlide;
