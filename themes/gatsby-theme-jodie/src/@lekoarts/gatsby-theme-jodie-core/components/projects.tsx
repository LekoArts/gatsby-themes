import type { PageProps } from "gatsby"
import type { JodieProjectsProps } from "../../../components/projects"
import * as React from "react"
import Projects, { Head } from "../../../components/projects"

export default function JodieCoreProjects({ children, ...props }: PageProps<JodieProjectsProps>) {
	return <Projects {...props}>{children}</Projects>
}

export { Head }
