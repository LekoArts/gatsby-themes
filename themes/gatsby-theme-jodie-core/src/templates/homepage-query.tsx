import { graphql } from "gatsby"
import HomepageComponent from "../components/homepage"

export default HomepageComponent

export const query = graphql`
  query {
    pages: allPage {
      nodes {
        slug
        title
      }
    }
    projects: allProject(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        title
        shortTitle
      }
    }
  }
`
