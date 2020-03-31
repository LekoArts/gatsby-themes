/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { Space as SpaceSpecimen } from "@lekoarts/gatsby-theme-specimens"
import { useTheme } from "./context"

const Space = () => {
  const { space } = useTheme()

  return (
    <section id="styleguide-colors">
      <Styled.h2>Space</Styled.h2>
      <SpaceSpecimen space={space} />
    </section>
  )
}

export default Space
