import { MOVIE_MEDIA, WEEK, getTrendingURL, getUpcoming, getTopRated } from "./api/apiUtils";

import PreviewSlider from "../components/PreviewSlider";
import FeatureSlider from "../components/FeatureSlider";

const Home2 = () => {
	return (
		<>
			<FeatureSlider url={getUpcoming()} />
			<PreviewSlider url={getTrendingURL(MOVIE_MEDIA, WEEK)} sectionTitle="À l'affiche cette semaine" />
			<PreviewSlider url={getTopRated()} sectionTitle="Les mieux notés" />
		</>
	);
};

export default Home2;
