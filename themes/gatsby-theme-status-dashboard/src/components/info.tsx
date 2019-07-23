/** @jsx jsx */
import React from "react"
import { jsx, Flex } from "theme-ui"
import Package from "../icons/package"
import Bug from "../icons/bug"
import useNetlify from "../hooks/use-netlify"
import useCircleCi from "../hooks/use-circle-ci"

const Item = ({ input, icon }: { input: string; icon: React.ReactNode }) => (
  <Flex sx={{ mr: 4, mb: 4, alignItems: `center` }}>
    {icon}
    <div
      sx={{
        boxShadow: `default`,
        background: `white`,
        px: 3,
        py: 2,
        borderRadius: `lg`,
        ml: 2,
        fontSize: 0,
        fontWeight: `semibold`,
      }}
    >
      {input}
    </div>
  </Flex>
)

const Info = () => {
  const { count: netlify } = useNetlify()
  const {
    me: { num_projects_followed: circleci },
  } = useCircleCi()

  return (
    <Flex
      sx={{
        flexDirection: [`column`, `column`, `row`],
        svg: {
          width: [6, 6, 8],
          borderRadius: `full`,
          p: 2,
          background: `white`,
          ".primary": {
            fill: `currentColor`,
            color: `primary`,
          },
          ".secondary": {
            fill: `currentColor`,
            color: `blue.8`,
          },
        },
      }}
    >
      <Item input={`${netlify} Websites`} icon={<Package />} />
      <Item input={`${circleci} CircleCI Projects`} icon={<Bug />} />
    </Flex>
  )
}

export default Info
