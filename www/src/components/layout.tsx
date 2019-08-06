import React from "react"
import { Global } from "@emotion/core"
import { Main, css, Styled, Footer, useColorMode } from "theme-ui"
import "typeface-ibm-plex-sans"
import "../fonts/benguiat.css"
import SEO from "./seo"
import Header from "./header"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className }: LayoutProps) => {
  const [mode] = useColorMode()

  let headingStyles = {}

  if (mode === `strangerThings`) {
    headingStyles = {
      "h1, h2, h3": {
        fontFamily: `Benguiat Bold !important`,
        textShadow: `0px 0px 20px rgba(231,37,29,0.6)`,
      },
    }
  }

  return (
    <>
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
            fontSize: `18px`,
            WebkitFontSmoothing: `antialiased`,
            MozOsxFontSmoothing: `grayscale`,
            color: `text`,
            backgroundColor: `background`,
            fontFamily: `body`,
            lineHeight: `body`,
            fontWeight: `body`,
          },
          "::selection": {
            backgroundColor: `text`,
            color: `background`,
          },
          "#___gatsby": {
            position: `relative`,
            overflowX: `hidden`,
          },
          a: {
            transition: `all 0.3s ease-in-out`,
            textDecoration: `none`,
            outline: `none`,
            "&:focus": {
              boxShadow: `outline`,
            },
          },
          ...headingStyles,
        })}
      />
      <SEO />
      <Header />
      <Main className={className}>{children}</Main>
      <Footer>
        &copy; {new Date().getFullYear()} by <Styled.a href="https://www.lekoarts.de/en">LekoArts</Styled.a>. All rights
        reserved.{` `}
        <Styled.a rel="nofollow" href="https://www.lekoarts.de/en/imprint">
          Imprint
        </Styled.a>
        .{` `}
        <Styled.a rel="nofollow" href="https://www.lekoarts.de/en/privacy">
          Privacy
        </Styled.a>
        .<br />
        This website is open source on{` `}
        <Styled.a href="https://github.com/LekoArts/gatsby-themes/tree/master/www">GitHub</Styled.a>.
      </Footer>
    </>
  )
}

export default Layout
