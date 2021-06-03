import * as React from "react"
import { PageProps } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Projects from "../../../components/projects"

type DataProps = {
  projects: {
    nodes: {
      shortTitle: string
      slug: string
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }[]
  }
}

export default function JodieCoreProjects({ children, ...props }: PageProps<DataProps>) {
  return <Projects {...props}>{children}</Projects>
}
