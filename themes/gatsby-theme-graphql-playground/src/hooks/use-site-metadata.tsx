import { graphql, useStaticQuery } from "gatsby"

type UseSiteMetadataProps = {
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
      graphiQLUrl: string
    }
  }
}

const useSiteMetadata = () => {
  const data = useStaticQuery<UseSiteMetadataProps>(graphql`
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
          graphiQLUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
