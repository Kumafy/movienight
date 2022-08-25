import Head from "next/head";
import TopSection from "./TopSection";

const Layout = ({ children }) => (
	<>
		<Head>
			<title>Movienight</title>
			<meta name="description" content="Movienight" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<TopSection />
		<main className="main">{children}</main>
	</>
);

export default Layout;
