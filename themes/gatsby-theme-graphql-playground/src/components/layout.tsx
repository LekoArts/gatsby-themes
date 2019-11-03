/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Global, css } from "@emotion/core"
import SEO from "./seo"
import Sidebar from "./sidebar"

type LayoutProps = {
  children: React.ReactNode
  title?: string
}

const Layout = ({ children, title }: LayoutProps) => (
  <Styled.root>
    <Global
      styles={css({
        "*": {
          boxSizing: `inherit`,
        },
        body: {
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          textRendering: `optimizeLegibility`,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
        },
      })}
    />
    <SEO title={title} />
    <div sx={{ display: `grid`, gridTemplateColumns: `250px 1fr`, minHeight: `100vh` }}>
      <Sidebar />
      <main sx={{ backgroundColor: `backgroundContent`, padding: 5 }}>{children}</main>
    </div>
  </Styled.root>
)

export default Layout
