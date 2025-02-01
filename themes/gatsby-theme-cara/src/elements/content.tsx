import { ParallaxLayer } from "@react-spring/parallax"
/** @jsx jsx */

interface ContentProps {
	speed: number
	offset: number
	children: React.ReactNode
	className?: string
	factor?: number
}

function Content({ speed, offset, children, className = ``, factor = 1 }: ContentProps) {
	return (
		<ParallaxLayer
			sx={{
				padding: [3, 4, 4, 5],
				display: `flex`,
				flexDirection: `column`,
				alignItems: `center`,
				justifyContent: `center`,
				zIndex: 50,
			}}
			speed={speed}
			offset={offset}
			factor={factor}
			className={className}
		>
			{children}
		</ParallaxLayer>
	)
}

export default Content
