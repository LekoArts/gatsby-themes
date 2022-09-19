/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import { Themed } from "@theme-ui/mdx"
import { Palette, normalizeThemeUIColors } from "@lekoarts/gatsby-theme-specimens"
import { useTheme } from "./context"
import ColorsPalette from "./colors-palettes"

const Colors = () => {
  const { rawColors: colors } = useTheme()

  if (!colors) {
    return (
      <React.Fragment>
        <section id="styleguide-colors">No colors are defined or could be found.</section>
      </React.Fragment>
    )
  }

  const filteredKeys = Object.keys(colors).filter((k) => Array.isArray(colors[k]) || typeof colors[k] === `object`)
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
        <Themed.h2>Colors</Themed.h2>
        <Palette colors={normalizeThemeUIColors({ colors })} single mode="swatch" />
      </section>
      {hasPalettes && <ColorsPalette colors={filteredColors} />}
    </React.Fragment>
  )
}

export default Colors
