/** @jsx jsx */
import { jsx } from "theme-ui"
import { Themed } from "@theme-ui/mdx"
import { FontFamily, FontSize, Heading, filterStyles, FontWeight } from "@lekoarts/gatsby-theme-specimens"
import { useTheme } from "./context"

const Typography = () => {
  const { fonts, fontSizes, styles, fontWeights } = useTheme()

  return (
    <section id="styleguide-typography">
      <Themed.h2>Typography</Themed.h2>
      <Themed.h3>Font Family</Themed.h3>
      <FontFamily fonts={fonts} />
      <Themed.h3>Font Weights</Themed.h3>
      <FontWeight fontWeights={fontWeights} />
      <Themed.h3>Font Sizes</Themed.h3>
      <FontSize fontSizes={fontSizes} />
      <Themed.h3>Headings</Themed.h3>
      <Heading
        config={useTheme()}
        styles={filterStyles({
          input: styles,
          allowed: [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`],
        })}
      />
    </section>
  )
}

export default Typography
