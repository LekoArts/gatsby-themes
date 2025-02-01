import type { HeadFC } from "gatsby"
import { Link } from "gatsby"
/** @jsx jsx */
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import useSiteMetadata from "../hooks/use-site-metadata"
import { visuallyHidden } from "../styles/utils"
import Bottom from "../texts/bottom.mdx"
import Hero from "../texts/hero.mdx"
import replaceSlashes from "../utils/replaceSlashes"
import Layout from "./layout"
import List from "./list"
import Listing from "./listing"
import Seo from "./seo"
import Title from "./title"

export interface MBHomepageProps {
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

function Homepage({ posts }: MBHomepageProps) {
	const { basePath, blogPath } = useMinimalBlogConfig()
	const { siteTitle } = useSiteMetadata()

	return (
		<Layout>
			<h1 sx={visuallyHidden}>{siteTitle}</h1>
			<section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 }, variant: `section_hero` }}>
				<Hero />
			</section>
			<Title text="Latest Posts">
				<Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
			</Title>
			<Listing posts={posts} showTags={false} />
			<List>
				<Bottom />
			</List>
		</Layout>
	)
}

export default Homepage

export const Head: HeadFC = () => <Seo />
