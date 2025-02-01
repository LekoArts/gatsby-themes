/** @jsx jsx */
import { Flex } from "theme-ui"

interface ProjectInfoItemProps {
	name: string
	content: string
}

function ProjectInfoItem({ name, content }: ProjectInfoItemProps) {
	return (
		<Flex
			sx={{
				"flexDirection": `column`,
				"&:not(:last-of-type)": {
					mr: 5,
				},
				"mb": 2,
			}}
		>
			<div
				sx={{
					textTransform: `uppercase`,
					color: `primary`,
					letterSpacing: `wider`,
					fontWeight: `semibold`,
				}}
			>
				{name}
			</div>
			<div sx={{ fontSize: 2 }}>{content}</div>
		</Flex>
	)
}

export default ProjectInfoItem
