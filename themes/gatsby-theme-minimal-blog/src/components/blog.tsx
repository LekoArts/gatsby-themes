import type { HeadFC } from "gatsby"
import { Link } from "gatsby"
/** @jsx jsx */
import { Flex, Heading } from "theme-ui"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"
import Layout from "./layout"
import Listing from "./listing"
import Seo from "./seo"

export interface MBBlogProps {
	posts: {
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
	}[]
}

function Blog({ posts }: MBBlogProps) {
	const { tagsPath, basePath } = useMinimalBlogConfig()

	return (
		<Layout>
			<Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
				<Heading as="h1" variant="styles.h1" sx={{ marginY: 2 }}>
					Blog
				</Heading>
				<Link
					sx={t => ({ ...t.styles?.a, variant: `links.secondary`, marginY: 2 })}
					to={replaceSlashes(`/${basePath}/${tagsPath}`)}
				>
					View all tags
				</Link>
			</Flex>
			<Listing posts={posts} sx={{ mt: [4, 5] }} />
		</Layout>
	)
}

export default Blog

export const Head: HeadFC = () => <Seo title="Blog" />
