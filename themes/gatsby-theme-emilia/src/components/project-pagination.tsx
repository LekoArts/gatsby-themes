import type { IGatsbyImageData } from "gatsby-plugin-image"
/** @jsx jsx */
import Card from "./card"

interface ProjectPaginationProps {
	prev: {
		slug: string
		contentFilePath: string
		title: string
		cover: {
			childImageSharp: {
				gatsbyImageData: IGatsbyImageData
			}
		}
	}
	next: {
		slug: string
		contentFilePath: string
		title: string
		cover: {
			childImageSharp: {
				gatsbyImageData: IGatsbyImageData
			}
		}
	}
}

function ProjectPagination({ prev, next }: ProjectPaginationProps) {
	return (
		<div sx={{ mt: 6, mb: 4 }}>
			<div sx={{ display: `grid`, gridTemplateColumns: `250px 1fr`, alignItems: `center`, mb: 4 }}>
				<h2
					sx={{
						color: `textMuted`,
						fontWeight: `medium`,
						letterSpacing: `widest`,
						textTransform: `uppercase`,
						fontSize: 1,
						my: 0,
					}}
				>
					More Projects
				</h2>
				<div sx={{ width: `100%`, height: `2px`, backgroundColor: `muted` }} />
			</div>
			<div
				sx={{
					"display": `grid`,
					"gridTemplateColumns": [`1fr`, `1fr`, `1fr 1fr`],
					"gridGap": [4, 4, 5],
					"a": { position: `relative` },
					"[data-name='card-overlay']": {
						position: `absolute`,
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
					},
				}}
			>
				{prev && <Card item={prev} />}
				{next && <Card item={next} />}
			</div>
		</div>
	)
}

export default ProjectPagination
