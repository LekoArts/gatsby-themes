import React from "react"
import Project from "../../../components/project"

type Props = {
  data: {
    project: any
    [key: string]: any
  }
  [key: string]: any
}

export default function EmmaCoreProject({ ...props }: Props) {
  return <Project {...props} />
}
