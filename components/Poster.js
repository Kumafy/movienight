import Image from "next/image";

import { getImageURL } from "../pages/api/apiUtils";

const Poster = ({ posterPath, width, height, style, ...props }) => (
	<Image
		className="poster"
		src={getImageURL(posterPath)}
		blurDataURL={"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkCAEAAFoAVkokQzEAAAAASUVORK5CYII="}
		placeholder="blur"
		alt={posterPath}
		width={width}
		height={height}
		style={{ ...style }}
		{...props}
	/>
);

export default Poster;
