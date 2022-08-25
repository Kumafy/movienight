import { Provider as StyletronProvider } from "styletron-react";
import { DarkTheme, BaseProvider } from "baseui";
import { styletron } from "./styletron";

import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<StyletronProvider value={styletron}>
			<BaseProvider theme={DarkTheme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</BaseProvider>
		</StyletronProvider>
	);
}

export default MyApp;
