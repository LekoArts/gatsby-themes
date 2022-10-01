/** @jsx jsx */
import { jsx } from "theme-ui"
import { Themed } from "@theme-ui/mdx"
import { Space as SpaceSpecimen } from "@lekoarts/gatsby-theme-specimens"
import { useTheme } from "./context"

const Space = () => {
  const { space } = useTheme()

  return (
    <section id="styleguide-colors">
      <Themed.h2>Space</Themed.h2>
      <SpaceSpecimen space={space} />
    </section>
  )
}

export default Space
