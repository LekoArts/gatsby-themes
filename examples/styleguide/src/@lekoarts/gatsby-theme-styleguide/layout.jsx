/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { css, Global } from "@emotion/core"

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
        }
      `}
    />
    <div sx={{ p: 3, maxWidth: 1024, margin: `0 auto` }}>{children}</div>
  </Styled.root>
)
