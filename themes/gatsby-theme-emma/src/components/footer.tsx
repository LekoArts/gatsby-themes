import React from "react"
import { Footer as ThemeFooter, Styled, Flex, css } from "theme-ui"

const Footer = () => (
  <ThemeFooter>
    Copyright &copy; {new Date().getFullYear()}. All rights reserved.<br />
    <Flex css={css({ justifyContent: `center`, alignItems: `center`, mt: 3 })}>
      <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_w30.png" alt="LekoArts Logo" />
      {` `}
      <Styled.a
        css={css({ color: `text`, fontWeight: `semibold`, ml: 2 })}
        href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emma"
      >
        Theme by LekoArts
      </Styled.a>
    </Flex>
  </ThemeFooter>
)

export default Footer
