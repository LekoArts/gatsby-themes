import type { PageProps } from "gatsby"
import * as React from "react"
import Project, { Head, EmiliaProjectProps, EmiliaProjectPageContext } from "../../../components/project"

export default function EmiliaCoreProject({ ...props }: PageProps<EmiliaProjectProps, EmiliaProjectPageContext>) {
  return <Project {...props} />
}

export { Head }
