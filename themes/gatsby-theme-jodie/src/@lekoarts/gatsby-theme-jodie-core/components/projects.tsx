import * as React from "react"
import { PageProps } from "gatsby"
import Projects from "../../../components/projects"
import { ChildImageSharp } from "../../../types"

type DataProps = {
  projects: {
    nodes: {
      shortTitle: string
      slug: string
      cover: ChildImageSharp
    }[]
  }
}

export default function JodieCoreProjects({ children, ...props }: PageProps<DataProps>) {
  return <Projects {...props}>{children}</Projects>
}
