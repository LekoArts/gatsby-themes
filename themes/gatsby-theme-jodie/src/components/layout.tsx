import { Global } from "@emotion/react"
import * as React from "react"
/** @jsx jsx */
import { get } from "theme-ui"
import Footer from "./footer"
import Wrapper from "./layout-wrapper"
import Sidebar from "./sidebar"
import { SkipNavTarget, SkipNavTrigger } from "./skip-nav"

interface LayoutProps { children: React.ReactNode, color?: string }

function Layout({ children, color = `white` }: LayoutProps) {
	return (
		<>
			<Global
				styles={t => ({
					"*,*:after,*:before": {
						boxSizing: `border-box`,
					},
					"[hidden]": {
						display: `none`,
					},
					"::selection": {
						background: get(t, `colors.primary`),
						color: get(t, `colors.white`),
					},
				})}
			/>
			<SkipNavTrigger />
			<Wrapper>
				<Sidebar bg={color} />
				<main sx={{ gridColumnStart: [1, 1, 1, 2] }}>
					<SkipNavTarget />
					{children}
				</main>
				<Footer bg={color} />
			</Wrapper>
		</>
	)
}

export default Layout
