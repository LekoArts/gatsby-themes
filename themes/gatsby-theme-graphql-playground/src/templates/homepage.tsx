import type { HeadFC } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Index from "../data/index.mdx"

function Homepage() {
	return (
		<Layout>
			<Index />
		</Layout>
	)
}

export default Homepage

export const Head: HeadFC = () => <SEO />
