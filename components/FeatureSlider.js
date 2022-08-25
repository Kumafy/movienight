import useSWR from "swr";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

import { Spinner } from "baseui/spinner";

import { genericFetcher } from "../pages/api/apiUtils";

import "keen-slider/keen-slider.min.css";
import FeatureSlide from "./FeatureSlide";

const FeatureSlider = ({ url }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider({
		initial: 0,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		},
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
		<>
			<div className="navigation-wrapper">
				<div ref={sliderRef} className="keen-slider">
					{movies.map((movie, index) => (
						<div key={movie.id} className={"keen-slider__slide number-slide" + index}>
							<FeatureSlide movie={movie} />
						</div>
					))}
				</div>
				{loaded && instanceRef.current && (
					<div className="dots">
						{[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
							return (
								<button
									key={idx}
									onClick={() => {
										instanceRef.current?.moveToIdx(idx);
									}}
									className={"dot" + (currentSlide === idx ? " active" : "")}
								></button>
							);
						})}
					</div>
				)}
			</div>
		</>
	);
};

export default FeatureSlider;
