import type { HeadFC } from "gatsby"
// @ts-ignore
import { kebabCase } from "@lekoarts/themes-utils"
import { Link } from "gatsby"
/** @jsx jsx */
import { Box, Flex, Heading } from "theme-ui"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"
import Layout from "./layout"
import Seo from "./seo"

export interface MBTagsProps {
	list: {
		fieldValue: string
		totalCount: number
	}[]
}

function Tags({ list }: MBTagsProps) {
	const { tagsPath, basePath } = useMinimalBlogConfig()

	return (
		<Layout>
			<Heading as="h1" variant="styles.h1">
				Tags
			</Heading>
			<Box mt={[4, 5]}>
				{list.map(listItem => (
					<Flex key={listItem.fieldValue} mb={[1, 1, 2]} sx={{ alignItems: `center` }}>
						<Link
							sx={t => ({ ...t.styles?.a, variant: `links.listItem`, mr: 2 })}
							to={replaceSlashes(`/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`)}
						>
							{listItem.fieldValue}
							{` `}
							<span sx={{ color: `secondary` }}>
								(
								{listItem.totalCount}
								)
							</span>
						</Link>
					</Flex>
				))}
			</Box>
		</Layout>
	)
}

export default Tags

export const Head: HeadFC = () => <Seo title="Tags" />
