import type { PageProps } from "gatsby"
import type { JodieProjectProps } from "../../../components/project"
import * as React from "react"
import Project, { Head } from "../../../components/project"

export default function JodieCoreProject({ children, ...props }: PageProps<JodieProjectProps>) {
	return <Project {...props}>{children}</Project>
}

export { Head }
