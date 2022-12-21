/** @jsx jsx */
import { Sidenav } from "@theme-ui/sidenav"
import { jsx } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"
import ColorModeToggle from "./colormode-toggle"
import Navigation from "../data/navigation.mdx"

const Sidebar = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <div>
      <div
        data-testid="Title"
        sx={{ backgroundColor: `primary`, p: 3, color: `background`, fontWeight: `bold`, fontSize: 1 }}
      >
        {siteTitle}
      </div>
      <ColorModeToggle />
      <Sidenav
        // @ts-ignore
        sx={{
          a: {
            fontWeight: `normal !important`,
            "&:hover": {
              color: `primary`,
              textDecoration: `none !important`,
            },
            "&.active": {
              color: `primary`,
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
