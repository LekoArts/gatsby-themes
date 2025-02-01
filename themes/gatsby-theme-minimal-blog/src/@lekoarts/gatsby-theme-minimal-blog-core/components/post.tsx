import type { PageProps } from "gatsby"
import type { MBPostProps } from "../../../components/post"
import * as React from "react"
import Post, { Head } from "../../../components/post"

export default function MinimalBlogCorePost({ ...props }: PageProps<MBPostProps>) {
	return <Post {...props} />
}

export { Head }
