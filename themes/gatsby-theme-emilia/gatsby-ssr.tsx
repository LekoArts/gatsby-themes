import type { GatsbySSR } from "gatsby"
import { withPrefix } from "gatsby"
import React from "react"

export const onRenderBody: GatsbySSR[`onRenderBody`] = ({ setHeadComponents }) => {
	setHeadComponents([
		<link key="icons-preload" rel="preload" href={withPrefix(`/icons.svg`)} as="image" type="image/svg+xml" />,
	])
}
