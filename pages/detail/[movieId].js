import useSWR from "swr";
import { useRouter } from "next/router";
import { Spinner } from "baseui/spinner";

import Description from "../../components/Description";

import { genericFetcher, getMovieURL } from "../api/apiUtils";
import ImageBlurLoading from "../../components/ImageBlurLoading";
import CoverImage from "../../components/CoverImage";

const MovieDetail = () => {
	const router = useRouter();
	const { movieId } = router.query;

	const { error, data } = useSWR(getMovieURL(movieId), genericFetcher);

	if (error) {
		return <div>Error !</div>;
	}

	if (!data) {
		return (
			<div>
				<Spinner />
			</div>
		);
	}

	const { poster_path: posterPath } = data;

	return (
		<div className="detail">
			<section className="banner">
				<CoverImage path={posterPath} />
				<Description movie={data} />
				<section className="poster">
					<ImageBlurLoading path={posterPath} width={400} height={600} />
				</section>
			</section>
			<div className="trailers"></div>
			<div className="cast"></div>
		</div>
	);
};

export default MovieDetail;
