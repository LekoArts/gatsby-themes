import type { ColorModesScale } from "theme-ui"
/** @jsx jsx */
import * as React from "react"
import theme from "../theme"
import normalizeThemeUIColors from "../utils/normalize-theme-ui-colors"
import Palette from "./palette"

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

interface ColorFamiliesProps {
	colors?: {
		[key: string]: ColorModesScale
	}
}

function ColorFamilies({ colors = undefined }: ColorFamiliesProps) {
	return (
		<div sx={{ ...theme.families.specimens }}>
			{colors
				? (
						Object.entries(colors).map(([key, color]) => {
							if (!color || (!Array.isArray(color) && typeof color !== `object`))
								return null

							return (
								<React.Fragment key={key}>
									<h3>{capitalize(key)}</h3>
									<Palette
										colors={normalizeThemeUIColors({ colors: color })}
										prefix={`${capitalize(key)} - `}
										sx={{ mb: theme.space[4] }}
									/>
								</React.Fragment>
							)
						})
					)
				: (
						<div>No colors were defined.</div>
					)}
		</div>
	)
}

export default ColorFamilies
