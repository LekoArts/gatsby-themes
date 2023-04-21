import * as React from "react"
import { Global } from "@emotion/react"
import { MDXProvider } from "@mdx-js/react"
import MdxComponents from "./mdx-components"

const Layout = ({ children }: { children: React.ReactNode }) => (
  <MDXProvider components={MdxComponents}>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `border-box`,
        },
      })}
    />
    <main style={{ maxWidth: `1200px`, margin: `2rem auto`, padding: `1.5rem` }}>{children}</main>
  </MDXProvider>
)

export default Layout
