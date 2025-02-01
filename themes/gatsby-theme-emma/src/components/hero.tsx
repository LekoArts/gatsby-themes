import type { IGatsbyImageData } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
/** @jsx jsx */
import * as React from "react"
import BGImage from "./bg-image"

interface HeroProps {
	children: React.ReactNode
	color?: string
	slim?: boolean
	image: IGatsbyImageData
}

function Hero({ children, color = ``, image, slim = false }: HeroProps) {
	return (
		<section
			sx={{
				position: `relative`,
				height: slim ? [`400px`, `500px`] : [`500px`, `600px`, `700px`, `40vw`],
				maxHeight: `1200px`,
				width: `100%`,
				overflow: `hidden`,
			}}
		>
			<BGImage color={color} slim={slim}>
				<GatsbyImage image={image} alt="" />
			</BGImage>
			{children}
		</section>
	)
}

export default Hero
