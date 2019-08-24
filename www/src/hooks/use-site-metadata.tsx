import { graphql, useStaticQuery } from "gatsby"

type Props = {
  site: {
    siteMetadata: {
      [key: string]: string
    }
  }
}

const useSiteMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          title
          titleAlt
          siteUrl
          description
          headline
          language
          image
          author
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
