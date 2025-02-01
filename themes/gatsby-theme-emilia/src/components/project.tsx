/** @jsx jsx */
import type { HeadFC, PageProps } from "gatsby"
import type { IGatsbyImageData } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import { animated, config, useSpring } from "react-spring"
import { Container } from "theme-ui"
import HeaderProject from "./header-project"
import Layout from "./layout"
import ProjectPagination from "./project-pagination"
import Seo from "./seo"

export interface EmiliaProjectProps {
	project: {
		excerpt: string
		date: string
		slug: string
		title: string
		areas: string[]
		cover: {
			childImageSharp: {
				resize: {
					src: string
				}
			}
		}
	}
	images: {
		nodes: {
			name: string
			childImageSharp: {
				gatsbyImageData: IGatsbyImageData
			}
		}[]
	}
}

export interface EmiliaProjectPageContext {
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

const Project: React.FC<React.PropsWithChildren<PageProps<EmiliaProjectProps, EmiliaProjectPageContext>>> = ({
	data: { project, images },
	pageContext: { prev, next },
	children,
}) => {
	const imageFade = useSpring({ config: config.slow, delay: 800, from: { opacity: 0 }, to: { opacity: 1 } })

	return (
		<Layout>
			<HeaderProject title={project.title} description={children} areas={project.areas} date={project.date} />
			<Container sx={{ mt: [`-6rem`, `-6rem`, `-8rem`] }}>
				{images.nodes.map(image => (
					<animated.div key={image.name} style={imageFade}>
						<GatsbyImage
							image={image.childImageSharp.gatsbyImageData}
							alt={image.name}
							sx={{ mb: [4, 4, 5], boxShadow: `xl` }}
						/>
					</animated.div>
				))}
				<ProjectPagination prev={prev} next={next} />
			</Container>
		</Layout>
	)
}

export default Project

export const Head: HeadFC<EmiliaProjectProps> = ({ data: { project } }) => (
	<Seo
		title={project.title}
		description={project.excerpt}
		pathname={project.slug}
		image={project.cover.childImageSharp.resize.src}
	/>
)
