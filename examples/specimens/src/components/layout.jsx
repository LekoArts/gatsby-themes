import * as React from "react"
import { Global } from "@emotion/react"
import { MDXProvider } from "@mdx-js/react"
import MdxComponents from "./mdx-components"

const Layout = ({ children }) => (
  <MDXProvider components={MdxComponents}>
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
        h3: { marginTop: `4rem !important` },
        ".sizes-table": {
          "> div:not(:first-of-type)": {
            paddingTop: `0.5rem !important`,
            paddingBottom: `0.5rem !important`,
          },
        },
        pre: {
          padding: `0.75rem`,
          borderRadius: `0.25rem`,
          overflow: `auto`,
        },
        code: {
          padding: `0.25rem 0.5rem`,
          borderRadius: `0.25rem`,
          marginLeft: `0.25rem`,
          marginRight: `0.25rem`,
        },
      })}
    />
    <main style={{ maxWidth: `1200px`, margin: `2rem auto`, padding: `1.5rem` }}>{children}</main>
  </MDXProvider>
)

export default Layout
