/** @jsx jsx */
import { Container, jsx, Flex, Box, useColorMode } from "theme-ui"
import Logo from "../icons/logo"
import ThemeSwitch from "../icons/theme-switch"

const modes = [`light`, `dark`, `strangerThings`]

const Header = () => {
  const [mode, setMode] = useColorMode()

  const cycleMode = (e: any) => {
    const i = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[i])
  }

  return (
    <header>
      <Container sx={{ pb: 0 }}>
        <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexDirection: [`column`, `row`] }}>
          <Flex>
            <a
              aria-label="Link to the theme creator's website"
              sx={{ color: `text`, "&:hover,&:focus": { color: `primary`, boxShadow: `none` } }}
              href="http://www.lekoarts.de"
            >
              <Logo sx={{ width: 12, height: 12 }} />
            </a>
            <Box
              aria-hidden="true"
              focusable="false"
              sx={{ height: 12, width: 1, backgroundColor: `primary`, borderRadius: `full`, mx: 3 }}
            />
            <Flex sx={{ flexDirection: `column` }}>
              <Box sx={{ fontSize: 3, fontWeight: `semibold`, lineHeight: `25px` }}>Gatsby Themes</Box>
              <Box sx={{ color: `dark` }}>by LekoArts</Box>
            </Flex>
          </Flex>
          <Flex sx={{ mt: [4, 0], alignItems: `center` }}>
            <a href="https://github.com/LekoArts/gatsby-themes" sx={{ variant: `buttons.secondary` }}>
              GitHub
            </a>
            <button
              type="button"
              sx={{
                variant: `buttons.transparent`,
                p: 1,
                borderRadius: `full`,
                ml: 4,
                "&:hover,&:focus": { boxShadow: `0 0 0 2px` },
              }}
              title="Change color mode"
              onClick={cycleMode}
            >
              <ThemeSwitch />
            </button>
          </Flex>
        </Flex>
      </Container>
    </header>
  )
}

export default Header
