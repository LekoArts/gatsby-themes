import type { HeadFC, PageProps } from "gatsby"
import Header from "@lekoarts/gatsby-theme-emilia/src/components/header"
import Layout from "@lekoarts/gatsby-theme-emilia/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-emilia/src/components/seo"
import { Themed } from "@theme-ui/mdx"
import { Link } from "gatsby"
import * as React from "react"
import { Container, Link as TLink } from "theme-ui"

function NotFound(_props: PageProps) {
	return (
		<Layout>
			<Header />
			<Container>
				<Themed.p>
					Oh, no!
					<br />
					You found a page that doesn't exist.
					{` `}
					<TLink as={Link} to="/">
						Do you want to visit the homepage?
					</TLink>
				</Themed.p>
			</Container>
		</Layout>
	)
}

export default NotFound

export const Head: HeadFC = () => <Seo title="404 - Not Found" />
