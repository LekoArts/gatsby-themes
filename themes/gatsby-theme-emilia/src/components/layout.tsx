import * as React from "react"
import { get } from "theme-ui"
import { Global } from "@emotion/react"
import Footer from "./footer"

type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(t) => ({
        "*": {
          boxSizing: `inherit`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          background: get(t, `colors.text`),
          color: get(t, `colors.background`),
        },
      })}
    />
    {children}
    <Footer />
  </React.Fragment>
)

export default Layout
