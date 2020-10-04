/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import "typeface-work-sans"
import { Global } from "@emotion/core"
import Wrapper from "./layout-wrapper"
import Sidebar from "./sidebar"
import Footer from "./footer"
import SEO from "./seo"

type LayoutProps = { children: React.ReactNode; color?: string }

const Layout = ({ children, color = `white` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*,*:after,*:before": {
          boxSizing: `border-box`,
        },
        html: {
          fontSize: `18px`,
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
        "::selection": {
          background: theme.colors.primary,
          color: theme.colors.white,
        },
        "@media(max-width: 600px)": {
          html: {
            fontSize: `16px`,
          },
        },
      })}
    />
    <SEO />
    <Wrapper>
      <Sidebar bg={color} />
      <main sx={{ gridColumnStart: [1, 1, 1, 2] }}>{children}</main>
      <Footer bg={color} />
    </Wrapper>
  </React.Fragment>
)

export default Layout
