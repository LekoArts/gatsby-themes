/** @jsx jsx */
import { Flex, jsx, useColorMode, Link as TLink } from "theme-ui"
import { Link } from "gatsby"
import Navigation from "./navigation"
import SocialLinks from "./social-links"

type HeaderProps = {
  meta: {
    [key: string]: string
  }
  nav: {
    title: string
    slug: string
  }[]
}

const Header = ({ meta, nav }: HeaderProps) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  const navEmpty = nav.length === 0

  return (
    <Flex as="header" variant="layout.header">
      {!navEmpty && <Navigation nav={nav} />}
      <Flex
        sx={{
          fontWeight: `bold`,
          fontSize: 4,
          flex: navEmpty ? 1 : [`1 0 100%`, 1],
          justifyContent: navEmpty ? `flex-start` : `center`,
          order: [1, 2],
        }}
      >
        <TLink
          aria-label={`${meta.siteTitle}, Back to homepage`}
          as={Link}
          sx={{ color: `text`, ":hover": { color: `primary`, textDecoration: `none` } }}
          to="/"
        >
          {meta.siteTitle}
        </TLink>
      </Flex>
      <div
        sx={{
          a: {
            fontSize: 4,
            color: `text`,
            display: `flex`,
            alignItems: `center`,
            "&:hover": {
              color: `primary`,
            },
            "&:not(:first-of-type)": {
              ml: 2,
            },
          },
          justifyContent: `flex-end`,
          flex: 1,
          display: `flex`,
          order: 3,
        }}
      >
        <SocialLinks />
        <button
          sx={{ variant: `buttons.toggle`, fontWeight: `semibold` }}
          onClick={toggleColorMode}
          type="button"
          aria-label="Toggle dark mode"
        >
          {isDark ? `Light` : `Dark`}
        </button>
      </div>
    </Flex>
  )
}

export default Header
