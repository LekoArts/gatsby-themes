/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { readableColor } from "polished"
import Logo from "../icons/logo"
import useSiteMetadata from "../hooks/use-site-metadata"
import Navigation from "./navigation"

type SidebarProps = { bg: string }

const Sidebar = ({ bg }: SidebarProps) => {
  const { siteTitle } = useSiteMetadata()

  return (
    <div
      sx={{
        p: [3, 3, 4],
        width: (t: any): any => [`100%`, `100%`, `100%`, t.sidebar.normal, t.sidebar.normal, t.sidebar.wide],
        background: bg,
        position: [`relative`, `relative`, `relative`, `fixed`],
        height: `100%`,
        display: `flex`,
        flexDirection: `column`,
        svg: {
          fill: readableColor(bg),
        },
      }}
    >
      <Link to="/" aria-label={`${siteTitle}, Back to Home`} sx={{ width: [`3rem`, `4rem`, `5rem`] }}>
        <Logo />
      </Link>
      <div sx={{ py: 4 }} />
      <Navigation bg={bg} />
    </div>
  )
}

export default Sidebar
