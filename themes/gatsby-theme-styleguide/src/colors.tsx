/** @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui"
import { Palette, normalizeThemeUIColors } from "@lekoarts/gatsby-theme-specimens"
import { useTheme } from "./context"
import ColorsPalette from "./colors-palettes"

const Colors = () => {
  const { colors } = useTheme()
  const filteredKeys = Object.keys(colors).filter((k) => Array.isArray(colors[k]))
  const filteredColors = Object.keys(colors)
    .filter((key) => filteredKeys.includes(key))
    .reduce(
      (obj, key) => ({
        ...obj,
        [key]: colors[key],
      }),
      {}
    )
  const hasPalettes = filteredKeys.length > 0

  return (
    <React.Fragment>
      <section id="styleguide-colors">
        <Styled.h2>Colors</Styled.h2>
        <Palette colors={normalizeThemeUIColors({ colors })} single mode="swatch" />
      </section>
      {hasPalettes && <ColorsPalette colors={filteredColors} />}
    </React.Fragment>
  )
}

export default Colors
