import { Link } from "gatsby"
import * as React from "react"
/** @jsx jsx */
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"

interface TagsProps {
	tags: {
		name: string
		slug: string
	}[]
}

function ItemTags({ tags }: TagsProps) {
	const { tagsPath, basePath } = useMinimalBlogConfig()

	return (
		<>
			{tags.map((tag, i) => (
				<React.Fragment key={tag.slug}>
					{!!i && `, `}
					<Link sx={t => ({ ...t.styles?.a })} to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}>
						{tag.name}
					</Link>
				</React.Fragment>
			))}
		</>
	)
}

export default ItemTags
