import React from "react"
import { Styled } from "theme-ui"
import Footer from "./footer"

type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => (
  <Styled.root>
    {children}
    <Footer />
  </Styled.root>
)

export default Layout
