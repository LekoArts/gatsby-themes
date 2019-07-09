import React from "react"
import { Header as ThemeHeader } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

const Header = () => {
  const meta = useSiteMetadata()

  return <ThemeHeader>{meta.siteTitle}</ThemeHeader>
}

export default Header
