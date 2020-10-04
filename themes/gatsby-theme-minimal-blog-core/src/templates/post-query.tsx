import { graphql } from "gatsby"
import PostComponent from "../components/post"

export default PostComponent

export const query = graphql`
  query($slug: String!, $formatString: String!) {
    post(slug: { eq: $slug }) {
      slug
      title
      date(formatString: $formatString)
      tags {
        name
        slug
      }
      description
      canonicalUrl
      body
      excerpt
      timeToRead
      banner {
        childImageSharp {
          resize(width: 1200, quality: 90) {
            src
          }
        }
      }
    }
  }
`
