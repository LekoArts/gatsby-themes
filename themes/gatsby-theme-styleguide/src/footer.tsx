/** @jsx jsx */
import { Styled, jsx } from "theme-ui"

const Footer = () => (
  <footer
    sx={{ pt: 2, my: 4, color: `secondary`, borderTopColor: `muted`, borderTopStyle: `solid`, borderTopWidth: `1px` }}
  >
    <Styled.p>
      Created with{` `}
      <Styled.a href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-styleguide">
        @lekoarts/gatsby-theme-styleguide
      </Styled.a>
      .
    </Styled.p>
  </footer>
)

export default Footer
