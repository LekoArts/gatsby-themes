/** @jsx jsx */
import * as React from "react"
import { jsx, ColorModesScale } from "theme-ui"
import { Themed } from "@theme-ui/mdx"
import { Palette, normalizeThemeUIColors } from "@lekoarts/gatsby-theme-specimens"

type ColorsPaletteProps = {
  colors: {
    [key: string]: ColorModesScale
  }
}

const ColorsPalette = ({ colors }: ColorsPaletteProps) => (
  <section id="styleguide-colors-palette">
    <Themed.h2>Palettes</Themed.h2>
    {Object.entries(colors).map((entry, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <React.Fragment key={`${entry[0]}-${index}`}>
        <Themed.h3>{entry[0].charAt(0).toUpperCase() + entry[0].slice(1)}</Themed.h3>
        <Palette colors={normalizeThemeUIColors({ colors: entry[1] })} prefix={`${entry[0]} - `} />
      </React.Fragment>
    ))}
  </section>
)

export default ColorsPalette
