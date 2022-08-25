import useSWR from "swr";
import { Spinner } from "baseui/spinner";
import { useRouter } from "next/router";

import { genericFetcher, getSearchMovieURL } from "../api/apiUtils";

import Preview from "../../components/Preview";
import { useState } from "react";

const SearchResults = () => {
	const router = useRouter();
	const { search } = router.query;

	const [page, setPage] = useState(1);
	const [previousPages, setPreviousPages] = useState([]);

	const { error, data } = useSWR(search ? getSearchMovieURL(search, page) : null, genericFetcher);

	if (error) {
		return <div>Error !</div>;
	}

	if (!data) {
		return <Spinner />;
	}

	const { total_pages: totalPages, results } = data;
	const searchResults = [...previousPages, ...results];

	const askForMore = () => {
		setPage(page + 1);
		setPreviousPages([...searchResults]);
	};

	return (
		<div className="search">
			<div className="title">Résultats pour {`"${search}"`}</div>
			<section className="results">
				{searchResults.length > 0 && searchResults.map((movie) => <Preview key={movie.id} {...movie} />)}
				{page < totalPages && <div onClick={() => askForMore()}> MOAR ! </div>}
			</section>
		</div>
	);
};

export default SearchResults;
