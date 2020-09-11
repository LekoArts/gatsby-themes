/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Global } from "@emotion/core"
import SEO from "./seo"
import Sidebar from "./sidebar"

type LayoutProps = {
  children: React.ReactNode
  title?: string
}

const Layout = ({ children, title }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
        },
      })}
    />
    <SEO title={title} />
    <div sx={{ display: `grid`, gridTemplateColumns: [`200px 1fr`, `200px 1fr`, `250px 1fr`], minHeight: `100vh` }}>
      <Sidebar />
      <main sx={{ backgroundColor: `backgroundContent`, padding: [3, 3, 4, 5] }}>{children}</main>
    </div>
  </React.Fragment>
)

export default Layout
