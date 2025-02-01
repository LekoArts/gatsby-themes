import type { PageProps } from "gatsby"
import type { JodieHomepageProps } from "../../../components/homepage"
import * as React from "react"
import Homepage, { Head } from "../../../components/homepage"

export default function JodieCoreHomepage({ children, ...props }: PageProps<JodieHomepageProps>) {
	return <Homepage {...props}>{children}</Homepage>
}

export { Head }
