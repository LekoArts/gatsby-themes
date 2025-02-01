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
			[key: string]: unknown
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
        }
      }
    }
  `)

	return data.site.siteMetadata
}

export default useSiteMetadata
