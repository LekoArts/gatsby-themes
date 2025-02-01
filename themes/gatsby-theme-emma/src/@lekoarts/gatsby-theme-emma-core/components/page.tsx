import type { PageProps } from "gatsby"
import type { EmmaPageProps } from "../../../components/page"
import * as React from "react"
import Page, { Head } from "../../../components/page"

export default function EmmaCorePage({ ...props }: PageProps<EmmaPageProps>) {
	return <Page {...props} />
}

export { Head }
