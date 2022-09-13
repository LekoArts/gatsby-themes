/** @jsx jsx */
import { jsx } from "theme-ui"
import { Themed } from "@theme-ui/mdx"

const Footer = () => (
  <footer
    sx={{ pt: 2, my: 4, color: `secondary`, borderTopColor: `muted`, borderTopStyle: `solid`, borderTopWidth: `1px` }}
  >
    <Themed.p>
      Created with{` `}
      <Themed.a href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-styleguide">
        @lekoarts/gatsby-theme-styleguide
      </Themed.a>
      {` `}
      by
      {` `}
      <Themed.a href="https://www.lekoarts.de?utm_source=styleguide&utm_medium=Theme">LekoArts</Themed.a>.
    </Themed.p>
  </footer>
)

export default Footer
