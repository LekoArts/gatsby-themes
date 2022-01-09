/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { Link } from "gatsby"

type NavigationProps = {
  nav: {
    title: string
    slug: string
  }[]
}

const Navigation = ({ nav }: NavigationProps) => (
  <Flex
    as="nav"
    sx={{
      flex: [`1 0 50%`, 1],
      justifyContent: `flex-start`,
      "a:not(:last-of-type)": {
        mr: 3,
      },
    }}
    aria-label="Primary Navigation"
  >
    {nav.map((n) => (
      <Link
        sx={(t) => ({ ...t.styles?.a, color: `text`, ":hover": { color: `primary`, textDecoration: `none` } })}
        key={n.slug}
        to={n.slug}
      >
        {n.title}
      </Link>
    ))}
  </Flex>
)

export default Navigation
