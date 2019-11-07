/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import { Link } from "gatsby"

type Props = {
  nav: {
    title: string
    slug: string
  }[]
}

const Navigation = ({ nav }: Props) => (
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
    {nav.map(n => (
      <Styled.a
        as={Link}
        sx={{ color: `text`, ":hover": { color: `primary`, textDecoration: `none` } }}
        key={n.slug}
        to={n.slug}
      >
        {n.title}
      </Styled.a>
    ))}
  </Flex>
)

export default Navigation
