/** @jsx jsx */
import { Sidenav } from "@theme-ui/sidenav"
import { jsx, useColorMode } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"
import ColorModeToggle from "./colormode-toggle"
// @ts-ignore
import Navigation from "../data/navigation"

const Sidebar = () => {
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
        <Navigation />
      </Sidenav>
    </div>
  )
}

export default Sidebar
