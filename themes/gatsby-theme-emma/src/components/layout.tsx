import React from "react"
import { Global } from "@emotion/core"
import { Main, css, Styled } from "theme-ui"
import Footer from "./footer"
import Header from "./header"

type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => (
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
        "::selection": {
          backgroundColor: `primary`,
          color: `background`,
        },
      })}
    />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Styled.root>
)

export default Layout
