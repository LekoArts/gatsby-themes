/** @jsx jsx */
import { Link } from "gatsby"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import useSiteMetadata from "../hooks/use-site-metadata"
import replaceSlashes from "../utils/replaceSlashes"

function HeaderTitle() {
	const { siteTitle } = useSiteMetadata()
	const { basePath } = useMinimalBlogConfig()

	return (
		<Link
			to={replaceSlashes(`/${basePath}`)}
			aria-label={`${siteTitle} - Back to home`}
			sx={{ color: `heading`, textDecoration: `none` }}
		>
			<div sx={{ my: 0, fontWeight: `semibold`, fontSize: [3, 4] }}>{siteTitle}</div>
		</Link>
	)
}

export default HeaderTitle
