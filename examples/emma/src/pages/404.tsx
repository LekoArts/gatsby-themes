import type { HeadFC, PageProps } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-emma/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-emma/src/components/seo"
import { Themed } from "@theme-ui/mdx"
import { Link } from "gatsby"
import * as React from "react"
import { Container, Link as TLink } from "theme-ui"

function NotFound(_props: PageProps) {
	return (
		<Layout>
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
