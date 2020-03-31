import React from "react"

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => <React.Fragment>{children}</React.Fragment>

export default Layout
