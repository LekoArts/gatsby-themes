/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, Styled, Flex } from "theme-ui"

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
