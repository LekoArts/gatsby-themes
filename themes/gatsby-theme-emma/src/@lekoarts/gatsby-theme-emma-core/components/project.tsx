import type { PageProps } from "gatsby"
import * as React from "react"
import Project, { Head, EmmaProjectProps } from "../../../components/project"

export default function EmmaCoreProject({ ...props }: PageProps<EmmaProjectProps>) {
  return <Project {...props} />
}

export { Head }
