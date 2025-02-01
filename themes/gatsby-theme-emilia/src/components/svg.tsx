import { withPrefix } from "gatsby"
/** @jsx jsx */

type IconType = `bgPattern` | `leftArrow` | `location`

interface SVGProps {
	id: IconType
	[x: string]: any
}

function Svg({ id, ...props }: SVGProps) {
	return (
		<svg {...props}>
			<use href={withPrefix(`/icons.svg#${id}`)} />
		</svg>
	)
}

export default Svg
