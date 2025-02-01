import { graphql, useStaticQuery } from "gatsby"

interface UseSiteMetadataProps {
	site: {
		siteMetadata: {
			title: string
			titleAlt: string
			siteUrl: string
			description: string
			headline: string
			image: string
			author: string
		}
	}
}

function useSiteMetadata() {
	const data = useStaticQuery<UseSiteMetadataProps>(graphql`
    query {
      site {
        siteMetadata {
          title
          titleAlt
          siteUrl
          description
          headline
          image
          author
        }
      }
    }
  `)

	return data.site.siteMetadata
}

export default useSiteMetadata
