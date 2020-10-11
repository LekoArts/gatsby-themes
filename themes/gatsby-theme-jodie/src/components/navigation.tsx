/** @jsx jsx */
import { jsx, Link as TLink } from "theme-ui"
import * as React from "react"
import { Link } from "gatsby"
import { readableColor } from "polished"
import useJodieConfig from "../hooks/use-jodie-config"

const isPartiallyActive = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) =>
  isPartiallyCurrent ? { className: `navlink-active navlink` } : { className: `navlink` }

const PartialNavLink = ({ children, to, ...rest }: { children: React.ReactNode; to: string }) => (
  <TLink as={Link} getProps={isPartiallyActive} to={to} {...rest}>
    {children}
  </TLink>
)

const Navigation = ({ bg }: { bg: string }) => {
  const { navigation } = useJodieConfig()

  return (
    <nav
      aria-label="Primary Navigation"
      sx={{
        display: `flex`,
        flexDirection: [`row`, `row`, `row`, `column`],
        alignItems: `flex-start`,
        a: {
          color: readableColor(bg),
          textDecoration: `none`,
          fontSize: [1, 2, 2, 3],
          marginLeft: [2, 3, 3, 0],
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
      }}
    >
      {navigation.map((navItem) => (
        <PartialNavLink to={navItem.slug} key={navItem.slug}>
          {navItem.name}
        </PartialNavLink>
      ))}
    </nav>
  )
}

export default Navigation
