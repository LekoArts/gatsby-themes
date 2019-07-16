/** @jsx jsx */
import React from "react"
import { Container, Header as ThemeHeader, jsx, Flex, Box } from "theme-ui"
import Logo from "../icons/logo"

const Header = () => (
  <ThemeHeader>
    <Container sx={{ pb: 0 }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <Flex>
          <Logo hidden={false} sx={{ width: 12, height: 12 }} />
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
        <a href="https://www.test.de" sx={{ variant: `buttons.secondary` }}>
          GitHub
        </a>
      </Flex>
    </Container>
  </ThemeHeader>
)

export default Header
