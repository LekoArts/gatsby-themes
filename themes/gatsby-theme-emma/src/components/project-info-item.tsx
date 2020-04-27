/** @jsx jsx */
import { Flex, jsx } from "theme-ui"

type ProjectInfoItemProps = {
  name: string
  content: string
}

const ProjectInfoItem = ({ name, content }: ProjectInfoItemProps) => (
  <Flex
    sx={{
      flexDirection: `column`,
      "&:not(:last-of-type)": {
        mr: 5,
      },
      mb: 2,
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

export default ProjectInfoItem
