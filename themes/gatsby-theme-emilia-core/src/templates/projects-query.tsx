import { graphql } from "gatsby"
import ProjectsComponent from "../components/projects"

export default ProjectsComponent

export const query = graphql`
  query {
    allProject(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 770, quality: 95) {
              ...GatsbyImageSharpFluid_withWebp
              presentationHeight
            }
          }
        }
      }
    }
  }
`
