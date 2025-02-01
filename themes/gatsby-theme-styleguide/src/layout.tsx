import * as React from "react"

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => <>{children}</>

export default Layout
