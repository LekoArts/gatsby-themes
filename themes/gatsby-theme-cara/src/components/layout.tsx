import * as React from "react"
import { Global } from "@emotion/react"
import SEO from "./seo"

type LayoutProps = { children: React.ReactNode; className?: string; customSEO?: boolean }

const Layout = ({ children, className = ``, customSEO = false }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
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
          backgroundColor: theme.colors.primary,
          color: theme.colors.background,
        },
      })}
    />
    {!customSEO && <SEO />}
    <main className={className}>{children}</main>
  </React.Fragment>
)

export default Layout
