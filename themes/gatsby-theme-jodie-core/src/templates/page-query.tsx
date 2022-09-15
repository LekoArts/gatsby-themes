import { graphql } from "gatsby"
import PageComponent, { Head } from "../components/page"

export default PageComponent

export { Head }

export const query = graphql`
  query ($slug: String!) {
    page(slug: { eq: $slug }) {
      title
      slug
      excerpt
      color
      custom
      cover {
        childImageSharp {
          resize(width: 1200, quality: 85) {
            src
          }
        }
      }
    }
  }
`
