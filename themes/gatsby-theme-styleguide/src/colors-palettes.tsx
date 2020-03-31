/** @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui"
import { Palette, normalizeThemeUIColors } from "@lekoarts/gatsby-theme-specimens"

type ColorsPaletteProps = {
  colors: {
    [key: string]: string[]
  }
}

const ColorsPalette = ({ colors }: ColorsPaletteProps) => (
  <section id="styleguide-colors-palette">
    <Styled.h2>Palettes</Styled.h2>
    {Object.entries(colors).map((entry, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <React.Fragment key={`${entry[0]}-${index}`}>
        <Styled.h3>{entry[0].charAt(0).toUpperCase() + entry[0].slice(1)}</Styled.h3>
        <Palette colors={normalizeThemeUIColors({ colors: entry[1] })} prefix={`${entry[0]} - `} />
      </React.Fragment>
    ))}
  </section>
)

export default ColorsPalette
