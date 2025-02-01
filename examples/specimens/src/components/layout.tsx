import { Global } from "@emotion/react"
import { MDXProvider } from "@mdx-js/react"
import * as React from "react"
import MdxComponents from "./mdx-components"

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<MDXProvider components={MdxComponents}>
			<Global
				styles={theme => ({
					"*": {
						boxSizing: `border-box`,
					},
				})}
			/>
			<main style={{ maxWidth: `1200px`, margin: `2rem auto`, padding: `1.5rem` }}>{children}</main>
		</MDXProvider>
	)
}

export default Layout
