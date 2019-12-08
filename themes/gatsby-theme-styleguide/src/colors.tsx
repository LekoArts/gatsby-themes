/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { Palette, normalizeThemeUIColors } from "@lekoarts/gatsby-theme-specimens"
import { useTheme } from "./context"

const Colors = () => {
  const { colors } = useTheme()

  return (
    <section id="styleguide-colors">
      <Styled.h2>Colors</Styled.h2>
      <Palette colors={normalizeThemeUIColors({ colors })} single mode="swatch" />
    </section>
  )
}

export default Colors
