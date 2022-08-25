import Image from "next/image";

import { getImageURL } from "../pages/api/apiUtils";

const CoverImage = ({ path, blur = "1.5rem", grayscale = 0.5 }) => (
	<Image
		className="cover"
		src={getImageURL(path)}
		alt={path}
		blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsamlZAAAFZgI0KMHsAQAAAABJRU5ErkJggg=="
		placeholder="blur"
		layout="fill"
		objectFit="cover"
		objectPosition="top"
		style={{ filter: `blur(${blur}) grayscale(${grayscale})` }}
	/>
);
export default CoverImage;
