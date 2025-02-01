/** @jsx jsx */
import BlogListItem from "./blog-list-item"

interface ListingProps {
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
	className?: string
	showTags?: boolean
}

function Listing({ posts, className = ``, showTags = true }: ListingProps) {
	return (
		<section sx={{ mb: [5, 6, 7] }} className={className}>
			{posts.map(post => (
				<BlogListItem key={post.slug} post={post} showTags={showTags} />
			))}
		</section>
	)
}

export default Listing
