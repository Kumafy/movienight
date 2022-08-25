import Image from "next/image";
import { getImageURL, getLowImageURL } from "../pages/api/apiUtils";

import placeholder from "../assets/placeholder.png";

const PLACEHOLDER =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsamlZAAAFZgI0KMHsAQAAAABJRU5ErkJggg==";
const ImageBlurLoading = ({ path, width, height, style, lowQuality = false, noBlur = false, ...props }) => {
	if (!path) {
		return (
			<Image
				className="image"
				src={placeholder}
				width={width}
				alt="placeholder"
				height={height}
				style={{ ...style }}
				{...props}
			/>
		);
	}

	return (
		<Image
			className="image"
			src={lowQuality ? getLowImageURL(path) : getImageURL(path)}
			blurDataURL={noBlur ? null : PLACEHOLDER}
			placeholder={noBlur ? null : "blur"}
			alt={path}
			width={width}
			height={height}
			style={{ ...style }}
			{...props}
		/>
	);
};

export default ImageBlurLoading;
