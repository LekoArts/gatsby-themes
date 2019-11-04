/** @jsx jsx */
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Sidenav } from "@theme-ui/sidenav"
import { jsx, useColorMode } from "theme-ui"
import useNavigation from "../hooks/use-navigation"
import useSiteMetadata from "../hooks/use-site-metadata"
import ColorModeToggle from "./colormode-toggle"

const Sidebar = () => {
  const nav = useNavigation()
  const { siteTitle } = useSiteMetadata()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <div>
      <div
        data-testid="Title"
        sx={{ backgroundColor: `primary`, p: 3, color: `background`, fontWeight: `bold`, fontSize: 1 }}
      >
        {siteTitle}
      </div>
      <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      <Sidenav
        sx={{
          a: {
            fontWeight: `normal !important`,
            "&:hover": {
              textDecoration: `none !important`,
            },
          },
          ul: {
            position: `sticky`,
            top: 2,
          },
          "ul > li": { fontWeight: `bold`, a: { px: 0 } },
          "ul > li > ul > li": { paddingLeft: 3 },
          p: 3,
          pt: 2,
          overflowY: [`auto`, `auto`, `initial`],
          width: `initial`,
        }}
      >
        <MDXRenderer>{nav}</MDXRenderer>
      </Sidenav>
    </div>
  )
}

export default Sidebar
