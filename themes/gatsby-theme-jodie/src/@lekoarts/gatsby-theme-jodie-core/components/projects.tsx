import * as React from "react"
import type { PageProps } from "gatsby"
import Projects, { Head, JodieProjectsProps } from "../../../components/projects"

export default function JodieCoreProjects({ children, ...props }: PageProps<JodieProjectsProps>) {
  return <Projects {...props}>{children}</Projects>
}

export { Head }
