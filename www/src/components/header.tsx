/** @jsx jsx */
import React from "react"
import { Container, Header as ThemeHeader, jsx, Flex, Box } from "theme-ui"
import Logo from "../icons/logo"

const Header = () => (
  <ThemeHeader>
    <Container sx={{ pb: 0 }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexDirection: [`column`, `row`] }}>
        <Flex>
          <a
            aria-label="Link to the theme creator's website"
            sx={{ color: `text`, "&:hover": { color: `primary` } }}
            href="http://www.lekoarts.de/en"
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
        <a href="https://github.com/LekoArts/gatsby-themes" sx={{ variant: `buttons.secondary`, mt: [4, 0] }}>
          GitHub
        </a>
      </Flex>
    </Container>
  </ThemeHeader>
)

export default Header
