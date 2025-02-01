import { Space as SpaceSpecimen } from "@lekoarts/gatsby-theme-specimens"
import { Themed } from "@theme-ui/mdx"
/** @jsx jsx */
import { useTheme } from "./context"

function Space() {
	const { space } = useTheme()

	return (
		<section id="styleguide-colors">
			<Themed.h2>Space</Themed.h2>
			<SpaceSpecimen space={space} />
		</section>
	)
}

export default Space
