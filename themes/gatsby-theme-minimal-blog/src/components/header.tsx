/** @jsx jsx */
import { jsx, useColorMode, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from "@theme-ui/components"
import useSiteMetadata from "../hooks/use-site-metadata"
import ColorModeToggle from "./colormode-toggle"
import useNavigation from "../hooks/use-navigation"

const Header = () => {
  const { siteTitle, externalLinks } = useSiteMetadata()
  const nav = useNavigation()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header sx={{ mb: [5, 6] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <Link to="/" aria-label={`${siteTitle} - Back to home`} sx={{ color: `heading`, textDecoration: `none` }}>
          <h1 sx={{ my: 0, fontWeight: `normal`, fontSize: [3, 4] }}>{siteTitle}</h1>
        </Link>
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 3,
          color: `secondary`,
          a: { color: `secondary` },
          borderBottomStyle: `solid`,
          borderBottomWidth: `1px`,
          borderBottomColor: `divide`,
          pb: 3,
        }}
      >
        <nav sx={{ "a:not(:last-of-type)": { mr: 3 }, fontSize: [1, `18px`] }}>
          {nav.map(item => (
            <Styled.a key={item.slug} as={Link} to={item.slug}>
              {item.title}
            </Styled.a>
          ))}
        </nav>
        <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
          {externalLinks.map(link => (
            <Styled.a key={link.url} href={link.url}>
              {link.name}
            </Styled.a>
          ))}
        </div>
      </Flex>
    </header>
  )
}

export default Header
