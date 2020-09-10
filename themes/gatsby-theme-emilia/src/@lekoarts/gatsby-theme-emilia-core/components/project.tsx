import React from "react"
import Project from "../../../components/project"

type Props = {
  data: {
    project: any
    images: any
    [key: string]: any
  }
  pageContext: {
    prev: any
    next: any
  }
  [key: string]: any
}

export default function EmiliaCoreProject({ ...props }: Props) {
  return <Project {...props} />
}
