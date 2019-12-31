/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { css, Global } from "@emotion/core"
import SEO from "../../components/seo"

export default ({ children }) => (
  <Styled.root>
    <Global
      styles={css`
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          border: 0;
          margin: 0;
          padding: 0;
          h1,
          h2,
          h3,
          h4,
          h5 {
            margin-top: 4rem !important;
            margin-bottom: 2rem !important;
          }
        }
      `}
    />
    <SEO />
    <div sx={{ p: 3, maxWidth: 1024, margin: `0 auto` }}>{children}</div>
  </Styled.root>
)
