import { graphql } from "gatsby"
import ProjectComponent from "../components/project"

export default ProjectComponent

export const query = graphql`
  query ($slug: String!, $formatString: String!) {
    project(slug: { eq: $slug }) {
      body
      excerpt
      client
      color
      date(formatString: $formatString)
      service
      slug
      title
      cover {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
          resize(width: 800) {
            src
          }
        }
      }
    }
  }
`
