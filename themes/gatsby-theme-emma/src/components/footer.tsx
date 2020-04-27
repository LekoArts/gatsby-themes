/** @jsx jsx */
import { Box, Link, Flex, jsx } from "theme-ui"

const Footer = () => (
  <Box as="footer" variant="layout.footer">
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
      <Link
        aria-label="Link to the theme's GitHub repository"
        sx={{ ml: 2 }}
        href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emma"
      >
        Theme
      </Link>
      <div sx={{ mx: 1 }}>by</div>
      {` `}
      <Link aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
        LekoArts
      </Link>
    </Flex>
  </Box>
)

export default Footer
