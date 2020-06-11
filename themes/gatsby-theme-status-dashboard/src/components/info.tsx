/** @jsx jsx */
import React from "react"
import { jsx, Flex } from "theme-ui"
import Package from "../icons/package"
import Bug from "../icons/bug"
import useNetlify from "../hooks/use-netlify"
import useCircleCi from "../hooks/use-circle-ci"

const Item = ({ input, icon }: { input: string; icon: React.ReactNode }) => (
  <Flex sx={{ mr: [3, 3, 4], mb: [3, 3, 4], alignItems: `center` }}>
    {icon}
    <div
      sx={{
        variant: `cards.label`,
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
        variant: `cards.icon`,
      }}
    >
      <Item input={`${netlify} Websites`} icon={<Package />} />
      <Item input={`${circleci} CircleCI Projects`} icon={<Bug />} />
    </Flex>
  )
}

export default Info
