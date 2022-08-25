import Link from "next/link";

import TopSectionSearch from "./TopSectionSearch";

const TopSection = () => {
	return (
		<nav className="topSection">
			<Link href={"/"}>
				<span className="title">
					<h1>MOVIENIGHT</h1>
				</span>
			</Link>
			<div className="search">
				<TopSectionSearch />
			</div>
		</nav>
	);
};

export default TopSection;
