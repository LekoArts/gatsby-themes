/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import { Global } from "@emotion/react"

const Layout = ({ children }) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `border-box`,
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
        },
        body: {
          border: 0,
          margin: 0,
          padding: 0,
        },
        "h1, h2, h3, h4, h5": {
          marginTop: `4rem !important`,
          marginBottom: `2rem !important`,
        },
      })}
    />
    <div sx={{ p: 3, maxWidth: 1024, margin: `0 auto` }}>{children}</div>
  </React.Fragment>
)

export default Layout
