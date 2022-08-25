import Link from "next/link";
import ImageBlurLoading from "./ImageBlurLoading";

const Preview = ({ id: movieId, title, poster_path, runtime, style }) => {
	return (
		<Link href={"/detail/" + movieId}>
			<div className="preview" style={{ ...style }}>
				<ImageBlurLoading path={poster_path} width={200} height={300} />
				{title}
				{runtime}
			</div>
		</Link>
	);
};

export default Preview;
