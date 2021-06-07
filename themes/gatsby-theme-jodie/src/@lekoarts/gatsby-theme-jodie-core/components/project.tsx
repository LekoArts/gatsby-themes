import * as React from "react"
import { PageProps } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Project from "../../../components/project"

type DataProps = {
  project: {
    body: string
    excerpt: string
    color: string
    date: string
    slug: string
    title: string
    shortTitle: string
    category: string
    cover: {
      childImageSharp: {
        resize: {
          src: string
        }
      }
    }
  }
  images: {
    nodes: {
      name: string
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }[]
  }
}

export default function JodieCoreProject({ children, ...props }: PageProps<DataProps>) {
  return <Project {...props}>{children}</Project>
}
