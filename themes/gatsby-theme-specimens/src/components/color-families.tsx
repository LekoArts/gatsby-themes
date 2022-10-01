/** @jsx jsx */
import * as React from "react"
import { jsx, ColorModesScale } from "theme-ui"
import Palette from "./palette"
import normalizeThemeUIColors from "../utils/normalize-theme-ui-colors"
import theme from "../theme"

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

type ColorFamiliesProps = {
  colors?: {
    [key: string]: ColorModesScale
  }
}

const ColorFamilies = ({ colors = undefined }: ColorFamiliesProps) => (
  <div sx={{ ...theme.families.specimens }}>
    {colors ? (
      Object.entries(colors).map(([key, color]) => {
        if (!color || (!Array.isArray(color) && typeof color !== `object`)) return null

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
    ) : (
      <div>No colors were defined.</div>
    )}
  </div>
)

export default ColorFamilies
