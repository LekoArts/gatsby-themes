import React from "react"
import { Footer as ThemeFooter, Styled } from "theme-ui"

const Footer = () => (
  <ThemeFooter>
    Copyright &copy; 2019. All right reserved. Pictures by Unsplash.{` `}
    <Styled.a href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emma">
      Theme Source on GitHub
    </Styled.a>
    {` `}
    {` by `}
    {` `}
    <Styled.a href="https://www.lekoarts.de/en">LekoArts</Styled.a>.
    <br />
    <Styled.a href="https://github.com/LekoArts/gatsby-starter-portfolio-emma">Starter Example</Styled.a>
  </ThemeFooter>
)

export default Footer
