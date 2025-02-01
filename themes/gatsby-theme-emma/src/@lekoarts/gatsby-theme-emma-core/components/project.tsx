import type { PageProps } from "gatsby"
import type { EmmaProjectProps } from "../../../components/project"
import * as React from "react"
import Project, { Head } from "../../../components/project"

export default function EmmaCoreProject({ ...props }: PageProps<EmmaProjectProps>) {
	return <Project {...props} />
}

export { Head }
