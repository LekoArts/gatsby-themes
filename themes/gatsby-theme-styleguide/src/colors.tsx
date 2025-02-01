import { normalizeThemeUIColors, Palette } from "@lekoarts/gatsby-theme-specimens"
import { Themed } from "@theme-ui/mdx"
/** @jsx jsx */
import * as React from "react"
import ColorsPalette from "./colors-palettes"
import { useTheme } from "./context"

function Colors() {
	const { rawColors: colors } = useTheme()

	if (!colors) {
		return (
			<>
				<section id="styleguide-colors">No colors are defined or could be found.</section>
			</>
		)
	}

	const filteredKeys = Object.keys(colors).filter(k => Array.isArray(colors[k]) || typeof colors[k] === `object`)
	const filteredColors = Object.keys(colors)
		.filter(key => filteredKeys.includes(key))
		.reduce(
			(obj, key) => ({
				...obj,
				[key]: colors[key],
			}),
			{},
		)
	const hasPalettes = filteredKeys.length > 0

	return (
		<>
			<section id="styleguide-colors">
				<Themed.h2>Colors</Themed.h2>
				<Palette colors={normalizeThemeUIColors({ colors })} single mode="swatch" />
			</section>
			{hasPalettes && <ColorsPalette colors={filteredColors} />}
		</>
	)
}

export default Colors
