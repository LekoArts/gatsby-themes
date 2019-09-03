/** @jsx jsx */
import { Footer as ThemeFooter, jsx, Styled, Container, useColorMode } from "theme-ui"
import AboutMeMDX from "../texts/about-me.mdx"
import useEmiliaConfig from "../hooks/use-emilia-config"
import SocialMediaList from "./social-media-list"
import ColorModeToggle from "./colormode-toggle"

const Footer = () => {
  const { showThemeAuthor } = useEmiliaConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <ThemeFooter
      sx={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, ${isDark ? `0.35` : `0.15`}) 100%)`,
      }}
    >
      <Container>
        <div sx={{ display: `grid`, gridGap: 4, gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `2fr 1fr`] }}>
          <div sx={{ p: { mb: 0 }, h2: { mt: 0 } }}>
            <AboutMeMDX />
          </div>
          <div
            sx={{
              textAlign: [`center`, `center`, `center`, `right`],
              display: `flex`,
              flexDirection: `column`,
              justifyContent: `space-between`,
            }}
          >
            <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
            <div sx={{ mt: [4, 4, 4, 0] }}>
              <div sx={{ a: { ml: [1, 1, 1, 2], mr: [1, 1, 1, 0] } }}>
                <SocialMediaList />
              </div>
              <div sx={{ color: `textMuted` }}>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</div>
            </div>
          </div>
        </div>
      </Container>
      {showThemeAuthor && (
        <Container
          sx={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            color: `text`,
            fontWeight: `semibold`,
            a: { color: `text` },
            mt: 4,
          }}
        >
          <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_w30.png" alt="LekoArts Logo" />
          {` `}
          <Styled.a
            aria-label="Link to the theme's GitHub repository"
            sx={{ ml: 2 }}
            href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emilia"
          >
            Theme
          </Styled.a>
          <div sx={{ mx: 1 }}>by</div>
          {` `}
          <Styled.a aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
            LekoArts
          </Styled.a>
        </Container>
      )}
    </ThemeFooter>
  )
}

export default Footer
