import { graphql } from "gatsby"
import ProjectsComponent from "../components/projects"

export default ProjectsComponent

export const query = graphql`
  query {
    allProject(sort: { fields: date, order: DESC }) {
      nodes {
        color
        slug
        service
        client
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 850, quality: 90, traceSVG: { color: "#e6e6e6" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
