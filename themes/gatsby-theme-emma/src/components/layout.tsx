import React from "react"
import { Styled } from "theme-ui"

type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => <Styled.root>{children}</Styled.root>

export default Layout
