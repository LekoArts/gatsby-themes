import React from "react"
import { Link } from "gatsby"
import "typeface-work-sans"
import { Global } from "@emotion/core"
import Wrapper from "./layout-wrapper"
import Sidebar from "./sidebar"
import useJodieConfig from "../hooks/use-jodie-config"

type LayoutProps = { children: React.ReactNode; color?: string }

const Layout = ({ children, color = `white` }: LayoutProps) => {
  const { navigation } = useJodieConfig()

  return (
    <React.Fragment>
      <Global
        styles={(theme) => ({
          "*": {
            boxSizing: `inherit`,
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
            background: theme.colors.primary,
            color: theme.colors.white,
          },
          "@media(max-width: 600px)": {
            html: {
              fontSize: `16px`,
            },
          },
        })}
      />
      <Wrapper>
        <Sidebar bg={color}>
          <Link to="/">Home</Link>
          {navigation.map((navItem) => (
            <Link to={navItem.slug} key={navItem.slug}>
              {navItem.name}
            </Link>
          ))}
        </Sidebar>
        <main>{children}</main>
        <footer>footer</footer>
      </Wrapper>
    </React.Fragment>
  )
}

export default Layout
