/** @jsx jsx */
import type { ThemeUICSSObject } from "theme-ui"
import * as React from "react"

interface SkipNavLinkProps {
	children: React.ReactNode
}

const skipNavStyles: ThemeUICSSObject = {
	"border": 0,
	"clip": `react(0 0 0 0)`,
	"height": `1px`,
	"width": `1px`,
	"margin": `-1px`,
	"padding": 0,
	"overflow": `hidden`,
	"position": `absolute`,
	"&:focus": {
		padding: 3,
		position: `fixed`,
		top: `15px`,
		left: `15px`,
		backgroundColor: `heading`,
		color: `background`,
		zIndex: 1,
		width: `auto`,
		height: `auto`,
		clip: `auto`,
		textDecoration: `none`,
	},
}

function SkipNavLink({ children, ...props }: SkipNavLinkProps) {
	return (
		<a {...props} sx={skipNavStyles} href="#skip-nav" data-skip-link="true">
			{children}
		</a>
	)
}

export default SkipNavLink
