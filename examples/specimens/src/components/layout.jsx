import * as React from "react"
import { Global } from "@emotion/react"

const Layout = ({ children }) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `border-box`,
        },
        html: { fontSize: `16px`, WebkitTextSizeAdjust: `100%` },
        body: { border: `0`, margin: `0`, padding: `0` },
        "h1, h2, h3, h4, h5, h6": {
          marginTop: `2rem !important`,
          marginBottom: `1rem !important`,
        },
        h3: { marginTop: `6rem !important` },
        ".sizes-table": {
          "> div:not(:first-of-type)": {
            paddingTop: `0.5rem !important`,
            paddingBottom: `0.5rem !important`,
          },
        },
        pre: {
          padding: `0.75rem`,
          borderRadius: `0.25rem`,
          fontSize: `1rem`,
          overflow: `auto`,
        },
        code: {
          backgroundColor: `rgb(30, 30, 30)`,
          color: `white`,
          padding: `0.25rem 0.5rem`,
          borderRadius: `0.25rem`,
          fontSize: `1rem`,
          marginLeft: `0.25rem`,
          marginRight: `0.25rem`,
        },
      })}
    />
    <main style={{ maxWidth: `1200px`, margin: `2rem auto`, padding: `1.5rem` }}>{children}</main>
  </React.Fragment>
)

export default Layout
