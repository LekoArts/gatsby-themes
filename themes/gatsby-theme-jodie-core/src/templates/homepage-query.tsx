import { graphql } from "gatsby"
import HomepageComponent from "../components/homepage"

export default HomepageComponent

export const query = graphql`
  query {
    allPage {
      nodes {
        slug
        title
      }
    }
    allProject(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        title
        shortTitle
      }
    }
  }
`
