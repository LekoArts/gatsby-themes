/** @jsx jsx */
import React from "react"
import { Global } from "@emotion/core"
import { css, Styled, jsx, ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"
import SEO from "./seo"
import ProjectCard from "./project-card"

const shortcodes = { ProjectCard }

type LayoutProps = { children?: React.ReactNode; className?: string }

const Layout = ({ children, className }: LayoutProps) => (
  <ThemeProvider theme={theme} components={shortcodes}>
    <Styled.root>
      <Global
        styles={css({
          "*": {
            boxSizing: `inherit`,
            "&:before": {
              boxSizing: `inherit`,
            },
            "&:after": {
              boxSizing: `inherit`,
            },
          },
          html: {
            fontSize: `18px`,
          },
          body: {
            margin: 0,
            padding: 0,
            boxSizing: `border-box`,
            textRendering: `optimizeLegibility`,
            WebkitFontSmoothing: `antialiased`,
            MozOsxFontSmoothing: `grayscale`,
          },
          "::selection": {
            backgroundColor: `primary`,
            color: `white`,
          },
        })}
      />
      <SEO />
      <main className={className}>{children}</main>
    </Styled.root>
  </ThemeProvider>
)

export default Layout
