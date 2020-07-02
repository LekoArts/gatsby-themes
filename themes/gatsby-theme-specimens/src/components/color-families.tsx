/** @jsx jsx */
import React from "react"
import { jsx, Theme } from "theme-ui"
import Palette from "./palette"
import normalizeThemeUIColors from "../utils/normalize-theme-ui-colors"
import theme from "../theme"

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

type ColorFamiliesProps = {
  colors?: Theme["colors"]
}

const ColorFamilies = ({ colors = undefined }: ColorFamiliesProps) => {
  if (colors) {
    Object.entries(colors).map(([key, color]) => {
      if (!color || !Array.isArray(color)) return null

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
  }

  return <div>No colors defined</div>
}

export default ColorFamilies
