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
        body {
          border: 0;
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
            "Helvetica Neue", sans-serif;
          font-size: 18px;
          color: #24242d;
          background: #fff;
        }
      `}
    />
    {children}
  </React.Fragment>
)

export default Layout
