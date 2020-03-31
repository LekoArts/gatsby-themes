import { graphql } from "gatsby"
import ProjectComponent from "../components/project"

export default ProjectComponent

export const query = graphql`
  query($slug: String!, $absolutePathRegex: String!, $formatString: String!) {
    images: allFile(
      filter: {
        absolutePath: { regex: $absolutePathRegex }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 1600, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    project(slug: { eq: $slug }) {
      body
      excerpt
      date(formatString: $formatString)
      slug
      title
      areas
      cover {
        childImageSharp {
          resize(width: 800, quality: 90) {
            src
          }
        }
      }
    }
  }
`
