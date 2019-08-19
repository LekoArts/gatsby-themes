/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Palette from "./palette"
import normalizeThemeUIColors from "../utils/normalize-theme-ui-colors"

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

type ColorFamiliesProps = {
  colors: {
    [key: string]: string | string[]
  }
}

const ColorFamilies = ({ colors }: ColorFamiliesProps) => {
  Object.entries(colors).map(([key, color]) => {
    if (!color || !Array.isArray(color)) return null

    return (
      <React.Fragment key={key}>
        <h3>{capitalize(key)}</h3>
        <Palette colors={normalizeThemeUIColors({ colors: color })} prefix={`${capitalize(key)} - `} sx={{ mb: 4 }} />
      </React.Fragment>
    )
  })
}

export default ColorFamilies
