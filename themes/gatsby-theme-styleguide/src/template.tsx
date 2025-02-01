import * as React from "react"
import Colors from "./colors"
import Footer from "./footer"
import Header from "./header"
import Layout from "./layout"
import Space from "./space"
import Typography from "./typography"

function Template() {
	return (
		<Layout>
			<Header />
			<main>
				<Colors />
				<Typography />
				<Space />
			</main>
			<Footer />
		</Layout>
	)
}

export default Template

export const Head = () => <title>Homepage</title>
