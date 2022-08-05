import * as React from "react"
import Projects, { Head } from "../../../components/projects"

type Props = {
  data: {
    allProject: any
    [key: string]: string
  }
  [key: string]: any
}

export default function EmiliaCoreProjects({ ...props }: Props) {
  const {
    data: { allProject },
  } = props

  return <Projects projects={allProject.nodes} {...props} />
}

export { Head }
