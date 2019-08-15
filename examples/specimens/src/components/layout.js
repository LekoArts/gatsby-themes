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
          font-size: 16px;
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
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #434190;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 3rem;
        }
        h1 {
          font-size: 3rem;
        }
        h2 {
          font-size: 2.25rem;
        }
        h3 {
          font-size: 1.875rem;
        }
        h4 {
          font-size: 1.5rem;
        }
      `}
    />
    {children}
  </React.Fragment>
)

export default Layout
