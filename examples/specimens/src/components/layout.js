import React from "react"
import { css, Global } from "@emotion/core"

const Layout = ({ children }) => (
  <React.Fragment>
    <Global
      styles={css`
        *::before,
        *::after {
          box-sizing: border-box;
        }
        ::selection {
          color: #fff;
          background-color: #3490dc;
        }
        html {
          font-size: 18px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
            "Helvetica Neue", sans-serif;
        }
        body {
          border: 0;
          margin: 0;
          padding: 0;
          color: #24242d;
          background: #fff;
        }
      `}
    />
    {children}
  </React.Fragment>
)

export default Layout
