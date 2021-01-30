import React from "react"
import { Global } from "@emotion/react"
import { Themed, Box, useColorMode } from "theme-ui"
import SEO from "./seo"
import Header from "./header"
import "../fonts/benguiat.css"

type LayoutProps = { children: React.ReactNode; className?: string; thought?: boolean }

const Layout = ({ children, className = ``, thought = false }: LayoutProps) => {
  const [mode] = useColorMode()

  let headingStyles = {}

  if (mode === `strangerThings`) {
    headingStyles = {
      "h1, h2, h3": {
        fontFamily: `Benguiat Bold !important`,
        textShadow: `-0.05rem -0.05rem 1px #ed2b12,
        0.05rem -0.05rem 1px #ed2b12,
        -0.05rem 0.05rem 1px #ed2b12,
        0.05rem 0.05rem 1px #ed2b12,
        0 0 15px #630100,
        0 0 20px #450100`,
      },
    }
  }

  return (
    <>
      <Global
        styles={(theme) => ({
          "*": {
            boxSizing: `inherit`,
          },
          "::selection": {
            backgroundColor: theme.colors.text,
            color: theme.colors.background,
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
              boxShadow: theme.shadows.outline,
            },
          },
          ...headingStyles,
        })}
      />
      {!thought && <SEO />}
      <Header />
      <Box as="main" className={className}>
        {children}
      </Box>
      <Box as="footer" variant="layout.footer">
        &copy; {new Date().getFullYear()} by <Themed.a href="https://www.lekoarts.de/en">LekoArts</Themed.a>. All rights
        reserved.{` `}
        <Themed.a rel="nofollow" href="https://www.lekoarts.de/en/imprint">
          Imprint
        </Themed.a>
        .{` `}
        <Themed.a rel="nofollow" href="https://www.lekoarts.de/en/privacy">
          Privacy
        </Themed.a>
        .<br />
        This website is open source on{` `}
        <Themed.a href="https://github.com/LekoArts/gatsby-themes/tree/master/www">GitHub</Themed.a>.
      </Box>
    </>
  )
}

export default Layout
