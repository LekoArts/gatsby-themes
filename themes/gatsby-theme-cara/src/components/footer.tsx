/** @jsx jsx */
import { Footer as ThemeFooter, Styled, Flex, css, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <ThemeFooter>
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved. <br />
      <Flex css={css({ justifyContent: `center`, alignItems: `center`, mt: 3 })}>
        <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_w30.png" alt="LekoArts Logo" />
        {` `}
        <Styled.a
          css={css({ color: `text`, fontWeight: `semibold`, ml: 2 })}
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-cara"
        >
          Theme by LekoArts
        </Styled.a>
      </Flex>
    </ThemeFooter>
  )
}

export default Footer
