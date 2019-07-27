import React from "react"
import { Global } from "@emotion/core"
import { css, Styled } from "theme-ui"
import SEO from "./seo"

type LayoutProps = { children?: React.ReactNode; className?: string }

const Layout: React.FC = ({ children, className }: LayoutProps) => (
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
        body: {
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          textRendering: `optimizeLegibility`,
          fontSize: `18px`,
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
)

export default Layout
