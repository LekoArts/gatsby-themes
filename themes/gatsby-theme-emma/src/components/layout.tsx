import React from "react"
import { Global } from "@emotion/core"
import { Main, css, Styled } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"
import useNavigation from "../hooks/use-navigation"
import Footer from "./footer"
import Header from "./header"

type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => {
  const meta = useSiteMetadata()
  const nav = useNavigation()

  return (
    <Styled.root>
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
          },
          "::selection": {
            backgroundColor: `primary`,
            color: `background`,
          },
          a: {
            transition: `all 0.3s ease-in-out`,
          },
        })}
      />
      <Header meta={meta} nav={nav} />
      <Main>{children}</Main>
      <Footer />
    </Styled.root>
  )
}

export default Layout
