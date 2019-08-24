/** @jsx jsx */
import { Footer as ThemeFooter, Styled, Flex, useColorMode, jsx } from "theme-ui"

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
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_w30.png" alt="LekoArts Logo" />
        {` `}
        <Styled.a
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 2 }}
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emma"
        >
          Theme
        </Styled.a>
        <div sx={{ mx: 1 }}>by</div>
        {` `}
        <Styled.a aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
          LekoArts
        </Styled.a>
      </Flex>
    </ThemeFooter>
  )
}

export default Footer
