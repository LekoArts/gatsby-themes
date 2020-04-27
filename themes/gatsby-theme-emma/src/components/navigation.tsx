/** @jsx jsx */
import { jsx, Link as TLink, Flex } from "theme-ui"
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
      flex: 1,
      justifyContent: `flex-start`,
      order: [2, 1],
      "a:not(:last-of-type)": {
        mr: 3,
      },
    }}
    aria-label="Primary Navigation"
  >
    {nav.map((n) => (
      <TLink
        as={Link}
        sx={{ color: `text`, ":hover": { color: `primary`, textDecoration: `none` } }}
        key={n.slug}
        to={n.slug}
      >
        {n.title}
      </TLink>
    ))}
  </Flex>
)

export default Navigation
