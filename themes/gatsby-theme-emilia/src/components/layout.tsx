import React from "react"
import { Global } from "@emotion/core"
import { css, Styled } from "theme-ui"
import Footer from "./footer"
import SEO from "./seo"

type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => (
  <Styled.root data-testid="theme-root">
    <Global
      styles={css({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          fontSize: `18px`,
        },
        body: {
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          textRendering: `optimizeLegibility`,
        },
        "::selection": {
          backgroundColor: `primary`,
          color: `background`,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
        },
        "@media(max-width: 600px)": {
          html: {
            fontSize: `16px`,
          },
        },
      })}
    />
    <SEO />
    {children}
    <Footer />
  </Styled.root>
)

export default Layout
