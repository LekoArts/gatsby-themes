import type { PageProps } from "gatsby"
import type { MBPageProps } from "../../../components/page"
import * as React from "react"
import Page, { Head } from "../../../components/page"

export default function MinimalBlogCorePage({ ...props }: PageProps<MBPageProps>) {
	return <Page {...props} />
}

export { Head }
