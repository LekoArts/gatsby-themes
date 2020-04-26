import React from "react"
import { Global } from "@emotion/core"
import Footer from "./footer"
import SEO from "./seo"

type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          fontSize: `18px`,
        },
        "::selection": {
          background: `black`,
          color: `white`,
        },
        "@media(max-width: 600px)": {
          html: {
            fontSize: `16px`,
          },
        },
      })}
    />
    <SEO />
    {children}
    <Footer />
  </React.Fragment>
)

export default Layout
