import * as React from "react"
import { PageProps } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Homepage from "../../../components/homepage"

type DataProps = {
  projects: {
    nodes: {
      slug: string
      title: string
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
      __typename: "MdxProject"
    }[]
  }
  pages: {
    nodes: {
      slug: string
      title: string
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
      __typename: "MdxPage"
    }[]
  }
}

export default function JodieCoreHomepage({ children, ...props }: PageProps<DataProps>) {
  return <Homepage {...props}>{children}</Homepage>
}
