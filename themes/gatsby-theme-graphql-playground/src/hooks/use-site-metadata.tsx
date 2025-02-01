import { graphql, useStaticQuery } from "gatsby"

interface UseSiteMetadataProps {
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

function useSiteMetadata() {
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
