import { Link } from "gatsby"
/** @jsx jsx */
import * as React from "react"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"

interface NavigationProps {
	nav: {
		title: string
		slug: string
	}[]
}

function Navigation({ nav }: NavigationProps) {
	const { basePath } = useMinimalBlogConfig()

	return (
		<>
			{nav && nav.length > 0 && (
				<nav sx={{ "a:not(:last-of-type)": { mr: 3 }, "fontSize": [1, `18px`], ".active": { color: `heading` } }}>
					{nav.map(item => (
						<Link
							activeClassName="active"
							key={item.slug}
							sx={t => ({ ...t.styles?.a })}
							to={replaceSlashes(`/${basePath}/${item.slug}`)}
						>
							{item.title}
						</Link>
					))}
				</nav>
			)}
		</>
	)
}

export default Navigation
