import { Global } from "@emotion/react"
import * as React from "react"
import { get } from "theme-ui"
import Footer from "./footer"

interface LayoutProps { children: React.ReactNode }

function Layout({ children }: LayoutProps) {
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
						background: get(t, `colors.text`),
						color: get(t, `colors.background`),
					},
				})}
			/>
			{children}
			<Footer />
		</>
	)
}

export default Layout
