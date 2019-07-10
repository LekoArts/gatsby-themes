import React from "react"
import { Link } from "gatsby"
import { css, Styled } from "theme-ui"

type Props = {
  nav: {
    title: string
    slug: string
  }[]
}

const Navigation = ({ nav }: Props) => (
  <nav
    css={css({
      display: `flex`,
      flex: 1,
      justifyContent: `flex-start`,
      order: [2, 1],
    })}
  >
    {nav.map(n => (
      <Styled.a
        as={Link}
        css={css({ color: `text`, ":hover": { color: `primary`, textDecoration: `none` } })}
        key={n.slug}
        to={n.slug}
      >
        {n.title}
      </Styled.a>
    ))}
  </nav>
)

export default Navigation
