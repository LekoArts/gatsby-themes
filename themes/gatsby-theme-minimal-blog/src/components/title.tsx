/** @jsx jsx */
import * as React from "react"
import { Box } from "theme-ui"

interface TitleProps {
	children: React.ReactNode
	as?: React.ElementType<any> | undefined
	className?: string
	text: string
}

function Title({ text, children, as = `h2`, className = `` }: TitleProps) {
	return (
		<div
			sx={{
				justifyContent: `space-between`,
				alignItems: `center`,
				borderBottomStyle: `solid`,
				borderBottomWidth: `1px`,
				borderBottomColor: `divide`,
				pb: 3,
				mb: 4,
				flexFlow: `wrap`,
				boxSizing: `border-box`,
				display: `flex`,
			}}
		>
			<Box
				as={as}
				sx={{ fontWeight: `medium`, fontSize: [3, 4], fontFamily: `heading`, lineHeight: `heading`, color: `heading` }}
				className={className}
			>
				{text}
			</Box>
			{children
				? (
						<div
							sx={{
								color: `secondary`,
								a: {
									variant: `links.secondary`,
								},
							}}
						>
							{children}
						</div>
					)
				: null}
		</div>
	)
}

export default Title
