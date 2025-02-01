/** @jsx jsx */
import * as React from "react"
import { Link as TLink } from "theme-ui"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"

function HeaderExternalLinks() {
	const { externalLinks } = useMinimalBlogConfig()

	return (
		<>
			{externalLinks && externalLinks.length > 0 && (
				<div sx={{ "a:not(:first-of-type)": { ml: 3 }, "fontSize": [1, `18px`] }}>
					{externalLinks.map(link => (
						<TLink key={link.url} href={link.url}>
							{link.name}
						</TLink>
					))}
				</div>
			)}
		</>
	)
}

export default HeaderExternalLinks
