import { Global } from "@emotion/react"
import { MDXProvider } from "@mdx-js/react"
import * as React from "react"
import { get } from "theme-ui"
import MdxComponents from "./mdx-components"

interface LayoutProps { children: React.ReactNode, className?: string }

function Layout({ children, className = `` }: LayoutProps) {
	return (
		<>
			<Global
				styles={t => ({
					"*": {
						"boxSizing": `inherit`,
						"&:before": {
							boxSizing: `inherit`,
						},
						"&:after": {
							boxSizing: `inherit`,
						},
					},
					"[hidden]": {
						display: `none`,
					},
					"::selection": {
						backgroundColor: get(t, `colors.primary`),
						color: get(t, `colors.background`),
					},
				})}
			/>
			<MDXProvider components={MdxComponents}>
				<main className={className}>{children}</main>
			</MDXProvider>
		</>
	)
}

export default Layout
