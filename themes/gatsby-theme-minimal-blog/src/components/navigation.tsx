/** @jsx jsx */
import * as React from "react"
import { jsx, Link as TLink } from "theme-ui"
import { Link } from "gatsby"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"

type NavigationProps = {
  nav: {
    title: string
    slug: string
  }[]
}

function AsLink(props: any) {
  return <Link activeClassName="active" {...props} />
}

const Navigation = ({ nav }: NavigationProps) => {
  const { basePath } = useMinimalBlogConfig()

  return (
    <React.Fragment>
      {nav && nav.length > 0 && (
        <nav sx={{ "a:not(:last-of-type)": { mr: 3 }, fontSize: [1, `18px`], ".active": { color: `heading` } }}>
          {nav.map((item) => (
            <TLink key={item.slug} as={AsLink} to={replaceSlashes(`/${basePath}/${item.slug}`)}>
              {item.title}
            </TLink>
          ))}
        </nav>
      )}
    </React.Fragment>
  )
}

export default Navigation
