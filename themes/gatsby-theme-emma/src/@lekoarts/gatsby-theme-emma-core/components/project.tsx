import React from "react"
import Project from "../../../components/project"

type Props = {
  data: {
    project: any
    [key: string]: any
  }
}

export default ({ data }: Props) => {
  const { project } = data

  return <Project data={{ ...data, project }} />
}
