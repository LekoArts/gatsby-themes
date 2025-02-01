import { Link } from "gatsby"
/** @jsx jsx */
import * as React from "react"
import { Box } from "theme-ui"
import ItemTags from "./item-tags"

interface BlogListItemProps {
	post: {
		slug: string
		title: string
		date: string
		excerpt: string
		description: string
		timeToRead?: number
		tags?: {
			name: string
			slug: string
		}[]
	}
	showTags?: boolean
}

function BlogListItem({ post, showTags = true }: BlogListItemProps) {
	return (
		<Box mb={4}>
			<Link to={post.slug} sx={t => ({ ...t.styles?.a, fontSize: [1, 2, 3], color: `text` })}>
				{post.title}
			</Link>
			<p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
				<time>{post.date}</time>
				{post.tags && showTags && (
					<>
						{` — `}
						<ItemTags tags={post.tags} />
					</>
				)}
			</p>
		</Box>
	)
}

export default BlogListItem
