import React from "react"
import { Global } from "@emotion/core"
import { Main, Styled, Container, css } from "theme-ui"
import "typeface-open-sans"
import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className }: LayoutProps) => (
  <Styled.root data-testid="theme-root">
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
          color: `white`,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`,
        },
      })}
    />
    <SEO />
    <Container>
      <Header />
      <Main className={className}>{children}</Main>
      <Footer />
    </Container>
  </Styled.root>
)

export default Layout
