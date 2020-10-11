import { graphql } from "gatsby"
import ProjectComponent from "../components/project"

export default ProjectComponent

export const query = graphql`
  query($slug: String!, $formatString: String!, $relativeDirectory: String!) {
    project(slug: { eq: $slug }) {
      body
      excerpt
      color
      date(formatString: $formatString)
      slug
      title
      shortTitle
      category
      cover {
        childImageSharp {
          resize(width: 1200, quality: 85) {
            src
          }
        }
      }
    }
    images: allFile(
      filter: {
        relativeDirectory: { eq: $relativeDirectory }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
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
  }
`
