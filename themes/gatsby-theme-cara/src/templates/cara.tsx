import type { HeadFC } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import * as React from "react"
import About from "../components/about"
import Contact from "../components/contact"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Projects from "../components/projects"
import Seo from "../components/seo"

function Cara() {
	return (
		<Layout>
			<Parallax pages={5}>
				<Hero offset={0} factor={1} />
				<Projects offset={1} factor={2} />
				<About offset={3} factor={1} />
				<Contact offset={4} factor={1} />
			</Parallax>
		</Layout>
	)
}

export default Cara

export const Head: HeadFC = () => <Seo />
