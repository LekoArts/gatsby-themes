import { Global } from "@emotion/react"
import * as React from "react"
import { Box, get } from "theme-ui"
import useNavigation from "../hooks/use-navigation"
import useSiteMetadata from "../hooks/use-site-metadata"
import Footer from "./footer"
import Header from "./header"

interface LayoutProps { children: React.ReactNode, className?: string }

function Layout({ children, className = `` }: LayoutProps) {
	const meta = useSiteMetadata()
	const nav = useNavigation()

	return (
		<>
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
			<Header meta={meta} nav={nav} />
			<Box as="main" variant="layout.main" className={className}>
				{children}
			</Box>
			<Footer />
		</>
	)
}

export default Layout
