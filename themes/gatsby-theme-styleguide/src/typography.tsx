/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { FontFamily, FontSize, Heading, filterStyles } from "@lekoarts/gatsby-theme-specimens"
import { useTheme } from "./context"

const Typography = () => {
  const { fonts, fontSizes, styles } = useTheme()

  return (
    <section id="styleguide-typography">
      <Styled.h2>Typography</Styled.h2>
      <Styled.h3>Font Family</Styled.h3>
      <FontFamily fonts={fonts} />
      <Styled.h3>Font Sizes</Styled.h3>
      <FontSize fontSizes={fontSizes} />
      <Styled.h3>Headings</Styled.h3>
      <Heading
        theme={useTheme()}
        styles={filterStyles({
          input: styles,
          allowed: [`h1`, `h2`, `h3`, `h4`],
        })}
      />
    </section>
  )
}

export default Typography
