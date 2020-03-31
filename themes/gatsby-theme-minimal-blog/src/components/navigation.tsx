/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"

type NavigationProps = {
  nav: {
    title: string
    slug: string
  }[]
}

const Navigation = ({ nav }: NavigationProps) => {
  const { basePath } = useMinimalBlogConfig()

  return (
    <React.Fragment>
      {nav && nav.length > 0 && (
        <nav sx={{ "a:not(:last-of-type)": { mr: 3 }, fontSize: [1, `18px`], ".active": { color: `heading` } }}>
          {nav.map((item) => (
            <Styled.a
              key={item.slug}
              as={Link}
              activeClassName="active"
              to={replaceSlashes(`/${basePath}/${item.slug}`)}
            >
              {item.title}
            </Styled.a>
          ))}
        </nav>
      )}
    </React.Fragment>
  )
}

export default Navigation
