/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import { Global } from "@emotion/react"
import { MDXProvider } from "@mdx-js/react"
import Sidebar from "./sidebar"
import MdxComponents from "./mdx-components"

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <MDXProvider components={MdxComponents}>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
        },
        "[hidden]": {
          display: `none`,
        },
      })}
    />
    <div sx={{ display: `grid`, gridTemplateColumns: [`200px 1fr`, `200px 1fr`, `250px 1fr`], minHeight: `100vh` }}>
      <Sidebar />
      <main sx={{ backgroundColor: `backgroundContent`, padding: [3, 3, 4, 5] }}>{children}</main>
    </div>
  </MDXProvider>
)

export default Layout
