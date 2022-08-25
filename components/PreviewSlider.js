import useSWR from "swr";
import { Spinner } from "baseui/spinner";
import { useKeenSlider } from "keen-slider/react";

import { genericFetcher } from "../pages/api/apiUtils";

import Preview from "./Preview";

import "keen-slider/keen-slider.min.css";

const PreviewSlider = ({ url, sectionTitle }) => {
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: "auto",
			spacing: 10,
		},
		selector: ".keen-slider__slide",
	});

	const { error, data } = useSWR(url, genericFetcher);

	if (error) {
		return <div>Error !</div>;
	}

	if (!data) {
		return <Spinner />;
	}

	const movies = data?.results;

	return (
		<section className="previewSlider">
			<div className="title">{sectionTitle}</div>
			<div ref={sliderRef} className="keen-slider">
				{movies.map((movie, index) => (
					<div key={movie.id} className={"keen-slider__slide number-slide" + index}>
						<Preview key={movie.id} {...movie} />
					</div>
				))}
			</div>
		</section>
	);
};

export default PreviewSlider;
