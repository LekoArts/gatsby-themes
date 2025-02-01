import type { PageProps } from "gatsby"
import type { EmiliaProjectPageContext, EmiliaProjectProps } from "../../../components/project"
import * as React from "react"
import Project, { Head } from "../../../components/project"

export default function EmiliaCoreProject({ ...props }: PageProps<EmiliaProjectProps, EmiliaProjectPageContext>) {
	return <Project {...props} />
}

export { Head }
