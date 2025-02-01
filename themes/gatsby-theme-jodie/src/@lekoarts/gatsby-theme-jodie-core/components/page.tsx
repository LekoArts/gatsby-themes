import type { PageProps } from "gatsby"
import type { JodiePageProps } from "../../../components/page"
import * as React from "react"
import Page, { Head } from "../../../components/page"

export default function JodieCorePage({ children, ...props }: PageProps<JodiePageProps>) {
	return <Page {...props}>{children}</Page>
}

export { Head }
