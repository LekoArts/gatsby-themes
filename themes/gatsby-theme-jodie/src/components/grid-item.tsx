/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { Link } from "gatsby"

const GridItem: React.FC<{ to: string }> = ({ children, to, ...props }) => (
  // @ts-ignore
  <Link
    to={to}
    sx={{
      position: `relative`,
      "> div": {
        position: `absolute !important`,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      "> div img": {
        transition: `all 0.3s ease 0s !important`,
      },
      "> span": {
        zIndex: 10,
        color: `white`,
        position: `absolute`,
        left: 0,
        right: 0,
        textAlign: `right`,
        fontWeight: `bold`,
        fontSize: 4,
        padding: 3,
        textShadow: `0 1px 3px rgba(0, 0, 0, 0.1)`,
      },
      "&:hover": {
        "> div img": {
          transform: `scale(1.1)`,
        },
      },
    }}
    {...props}
  >
    {children}
  </Link>
)

export default GridItem
