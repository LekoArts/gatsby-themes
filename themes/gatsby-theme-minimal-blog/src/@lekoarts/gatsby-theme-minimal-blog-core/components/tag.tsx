import * as React from "react"
import Tag, { Head } from "../../../components/tag"

interface Props {
	data: {
		allPost: any
		[key: string]: any
	}
	pageContext: {
		isCreatedByStatefulCreatePages: boolean
		slug: string
		name: string
		[key: string]: any
	}
	[key: string]: any
}

export default function MinimalBlogCoreTag({ ...props }: Props) {
	const {
		data: { allPost },
	} = props

	return <Tag posts={allPost.nodes} {...props} />
}

export { Head }
