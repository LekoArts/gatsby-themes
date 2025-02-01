import type { HeadFC } from "gatsby"
import React from "react"
import AboutMe from "../components/about-me"
import Hero from "../components/hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Themes from "../components/themes"

function Index() {
	return (
		<Layout>
			<Hero />
			<Themes />
			<AboutMe />
		</Layout>
	)
}

export default Index

export const Head: HeadFC = () => <SEO />
