import React from "react"
import { Global } from "@emotion/react"
import { Box, useColorMode, get } from "theme-ui"
import { Themed } from "@theme-ui/mdx"
import Header from "./header"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => {
  const [mode] = useColorMode<"light" | "dark" | "strangerThings">()

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
        styles={(t) => ({
          "*": {
            boxSizing: `inherit`,
          },
          "::selection": {
            backgroundColor: get(t, `colors.text`),
            color: get(t, `colors.background`),
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
              boxShadow: get(t, `shadows.outline`),
            },
          },
          ...headingStyles,
        })}
      />
      <Header />
      <Box as="main" className={className}>
        {children}
      </Box>
      <Box as="footer" variant="layout.footer">
        &copy; {new Date().getFullYear()} by{` `}
        <Themed.a href="https://www.lekoarts.de?utm_source=gatsby-themes&utm_medium=www">LekoArts</Themed.a>. All rights
        reserved.
        {` `}
        <Themed.a rel="nofollow" href="https://www.lekoarts.de/legal-notice">
          Legal Notice
        </Themed.a>
        .{` `}
        <Themed.a rel="nofollow" href="https://www.lekoarts.de/privacy-policy">
          Privacy Policy
        </Themed.a>
        .<br />
        This website is open source on{` `}
        <Themed.a href="https://github.com/LekoArts/gatsby-themes/tree/main/www">GitHub</Themed.a>.
      </Box>
    </>
  )
}

export default Layout
