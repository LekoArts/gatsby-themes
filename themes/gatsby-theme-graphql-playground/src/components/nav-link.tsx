/* eslint jsx-a11y/anchor-has-content: 0 */
/** @jsx jsx */
import { jsx, ThemeUICSSObject } from "theme-ui"
import { Link } from "gatsby"
import isAbsoluteURL from "is-absolute-url"

const styles: ThemeUICSSObject = {
  color: `primary`,
  textDecoration: `none`,
  fontWeight: `normal`,
  "&:hover": {
    textDecoration: `underline`,
  },
}

const NavLink = ({ href, to, ...props }: { href?: string; to: string }) => {
  const isExternal = isAbsoluteURL(href || ``)
  if (isExternal) {
    return <a {...props} href={href} sx={styles} />
  }
  const target = to || (href as string)
  return <Link {...props} to={target} sx={styles} activeClassName="active" />
}

export default NavLink
