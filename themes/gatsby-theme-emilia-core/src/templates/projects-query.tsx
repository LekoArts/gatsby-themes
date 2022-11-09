import { graphql } from "gatsby"
import ProjectsComponent, { Head } from "../components/projects"

export default ProjectsComponent

export { Head }

export const query = graphql`
  {
    allProject(sort: { date: DESC }) {
      nodes {
        slug
        title
        cover {
          childImageSharp {
            gatsbyImageData(width: 770, quality: 90)
          }
        }
      }
    }
  }
`
