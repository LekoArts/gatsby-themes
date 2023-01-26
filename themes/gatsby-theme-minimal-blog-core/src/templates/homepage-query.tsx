import { graphql } from "gatsby"
import HomepageComponent, { Head } from "../components/homepage"

export default HomepageComponent

export { Head }

export const query = graphql`
  query ($formatString: String!, $maxLatestPostsOnHomepage: Int) {
    allPost(sort: { date: DESC }, limit: $maxLatestPostsOnHomepage) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
      }
    }
  }
`
