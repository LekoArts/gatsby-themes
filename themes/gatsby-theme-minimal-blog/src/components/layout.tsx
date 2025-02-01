import { Global } from "@emotion/react"
import { MDXProvider } from "@mdx-js/react"
/** @jsx jsx */
import * as React from "react"
import { Box, Container, get } from "theme-ui"
import CodeStyles from "../styles/code"
import Footer from "./footer"
import Header from "./header"
import MdxComponents from "./mdx-components"
import SkipNavLink from "./skip-nav"

interface LayoutProps { children: React.ReactNode, className?: string }

function Layout({ children, className = `` }: LayoutProps) {
	return (
		<MDXProvider components={MdxComponents}>
			<Global
				styles={t => ({
					"*": {
						boxSizing: `inherit`,
					},
					"[hidden]": {
						display: `none`,
					},
					"::selection": {
						backgroundColor: get(t, `colors.text`),
						color: get(t, `colors.background`),
					},
				})}
			/>
			<SkipNavLink>Skip to content</SkipNavLink>
			<Container>
				<Header />
				<Box id="skip-nav" as="main" variant="layout.main" sx={{ ...CodeStyles }} className={className}>
					{children}
				</Box>
				<Footer />
			</Container>
		</MDXProvider>
	)
}

export default Layout
