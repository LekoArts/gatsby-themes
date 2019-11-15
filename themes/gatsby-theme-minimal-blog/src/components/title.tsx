/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Heading, Flex } from "@theme-ui/components"

type TitleProps = {
  children?: React.ReactNode
  as?: string
  className?: string
  text: string
}

const Title = ({ text, children, as = `h2`, className }: TitleProps) => (
  <Flex
    sx={{
      justifyContent: `space-between`,
      alignItems: `center`,
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `divide`,
      pb: 3,
      mb: 4,
      flexFlow: `wrap`,
    }}
  >
    <Heading as={as} sx={{ fontWeight: `medium`, fontSize: [3, 4] }} className={className}>
      {text}
    </Heading>
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
  </Flex>
)

export default Title
