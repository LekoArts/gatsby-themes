import { graphql, useStaticQuery } from "gatsby"

interface ISiteMetadata {
  site: {
    siteMetadata: {
      siteTitle: string
      siteTitleAlt: string
      siteHeadline: string
      siteUrl: string
      siteDescription: string
      siteImage: string
      siteLanguage: string
      author: string
    }
  }
}

const useSiteMetadata = () => {
  const data = useStaticQuery<ISiteMetadata>(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleAlt
          siteHeadline
          siteUrl
          siteDescription
          siteImage
          siteLanguage
          author
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
