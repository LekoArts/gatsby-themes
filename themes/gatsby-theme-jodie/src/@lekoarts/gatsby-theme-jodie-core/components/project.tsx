import * as React from "react"
import type { PageProps } from "gatsby"
import Project, { Head, JodieProjectProps } from "../../../components/project"

export default function JodieCoreProject({ children, ...props }: PageProps<JodieProjectProps>) {
  return <Project {...props}>{children}</Project>
}

export { Head }
