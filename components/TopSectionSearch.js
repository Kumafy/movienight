import useSWR from "swr";
import { useRouter } from "next/router";
import { Select, TYPE } from "baseui/select";
import { StatefulMenu } from "baseui/menu";
import { useState } from "react";

import { genericFetcher, getSearchMovieURL } from "../pages/api/apiUtils";
import { getRelaseYear } from "../utils/movieFormatUtils";

import ImageBlurLoading from "./ImageBlurLoading";
import Link from "next/link";

const getOptionLabel = ({ option: { poster_path: posterPath, title, release_date: releaseDate } }) => (
	<div className="topSearch option">
		<ImageBlurLoading path={posterPath} lowQuality={true} width={30} height={50} noBlur={true} />
		<div className="info">
			<span className="label">{title}</span>
			<span>{getRelaseYear(releaseDate)}</span>
		</div>
	</div>
);

const TopSectionSearch = () => {
	const router = useRouter();
	const [uriQuery, setUriQuery] = useState();

	const { data } = useSWR(uriQuery ? getSearchMovieURL(uriQuery) : null, genericFetcher);

	const options = [];

	if (data && data.results) {
		options.push(...data.results.slice(0, 11));
	}

	const onChange = (params) => {
		if (params && params.value && params.value[0]) {
			setUriQuery();
			router.push("/detail/" + params.value[0].id);
		}
	};

	return (
		<Select
			openOnClick={false}
			type={TYPE.search}
			placeholder="Rechercher un film, un réalisateur, un acteur, etc..."
			size="compact"
			onInputChange={({ target }) => setUriQuery(encodeURI(target.value))}
			onChange={onChange}
			options={options}
			getOptionLabel={getOptionLabel}
			labelKey="id"
			valueKey="title"
			backspaceClearsInputValue={true}
			backspaceRemoves={true}
			noResultsMsg="Aucun résultat"
			overrides={{
				StatefulMenu: (props) => (
					<div>
						<StatefulMenu {...props} />
						{options.length > 0 && (
							<Link href={"/search/" + uriQuery}>
								<div className="topSearch moreLink">Afficher tous les résultats</div>
							</Link>
						)}
					</div>
				),
			}}
		/>
	);
};

export default TopSectionSearch;
