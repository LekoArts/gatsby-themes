import { graphql } from "gatsby"
import HomepageComponent, { Head } from "../components/homepage"

export default HomepageComponent

export { Head }

export const query = graphql`
  query ($formatString: String!) {
    allPost(sort: { date: DESC }, limit: 3) {
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
