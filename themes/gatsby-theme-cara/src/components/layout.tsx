import * as React from "react"
import { get } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import { Global } from "@emotion/react"
import MdxComponents from "./mdx-components"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(t) => ({
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
          backgroundColor: get(t, `colors.primary`),
          color: get(t, `colors.background`),
        },
      })}
    />
    <MDXProvider components={MdxComponents}>
      <main className={className}>{children}</main>
    </MDXProvider>
  </React.Fragment>
)

export default Layout
