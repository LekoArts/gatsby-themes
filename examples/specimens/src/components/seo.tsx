import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface ISiteSiteMetadata {
  site: {
    siteMetadata: {
      banner: string
      siteDescription: string
      siteTitle: string
      siteUrl: string
    }
  }
}

const Seo = () => {
  const { site } = useStaticQuery<ISiteSiteMetadata>(graphql`
    {
      site {
        siteMetadata {
          banner
          siteDescription
          siteTitle
          siteUrl
        }
      }
    }
  `)

  const meta = site.siteMetadata

  return (
    <>
      <title>{meta.siteTitle}</title>
      <meta name="description" content={meta.siteDescription} />
      <meta name="image" content={meta.banner} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="lekoarts.de" />
      <meta property="og:url" content={meta.siteUrl} />
      <meta property="og:title" content={meta.siteTitle} />
      <meta property="og:description" content={meta.siteDescription} />
      <meta property="og:image" content={meta.banner} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@lekoarts_de" />
      <meta name="twitter:title" content={meta.siteTitle} />
      <meta name="twitter:description" content={meta.siteDescription} />
      <meta name="twitter:image" content={meta.banner} />
    </>
  )
}

export default Seo
