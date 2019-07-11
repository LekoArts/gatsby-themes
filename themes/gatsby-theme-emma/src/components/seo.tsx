import React from "react"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/use-site-metadata"

const SEO = () => {
  const site = useSiteMetadata()

  const { siteTitle: defaultTitle, siteUrl, siteDescription: defaultDesc, siteLanguage } = site

  return (
    <Helmet>
      <title>title</title>
    </Helmet>
  )
}

export default SEO
