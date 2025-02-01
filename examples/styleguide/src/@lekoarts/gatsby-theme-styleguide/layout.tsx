import { Global } from "@emotion/react"
/** @jsx jsx */
import * as React from "react"

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Global
				styles={theme => ({
					"*": {
						boxSizing: `border-box`,
					},
				})}
			/>
			<div sx={{ p: 3, maxWidth: 1024, margin: `0 auto` }}>{children}</div>
		</>
	)
}

export default Layout
