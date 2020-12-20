import { graphql } from "gatsby"
import HomepageComponent from "../components/homepage"

export default HomepageComponent

export const query = graphql`
  query($homepagePageLimit: Int!, $homepageProjectLimit: Int!) {
    pages: allPage(sort: { fields: title, order: ASC }, limit: $homepagePageLimit) {
      nodes {
        slug
        title
        cover {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    projects: allProject(sort: { fields: date, order: DESC }, limit: $homepageProjectLimit) {
      nodes {
        slug
        title: shortTitle
        cover {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
