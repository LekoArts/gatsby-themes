/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { Link } from "gatsby"

const GridItem: React.FC<{ to: string; className?: string }> = ({ children, to, ...props }) => (
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
      "> div:before": {
        position: `absolute`,
        content: `''`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 5,
        background: `linear-gradient(45deg, rgba(22,22,22,0) 75%, rgba(0,0,0,0.35) 100%)`,
      },
      "> div:after": {
        position: `absolute`,
        content: `''`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        boxShadow: (t) => `inset 0 0 0 0px ${t.colors.white}`,
        transition: `all 0.3s ease-in-out`,
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
        fontSize: [3, 3, 4],
        padding: 3,
        textShadow: `0 1px 4px rgba(0, 0, 0, 0.5)`,
      },
      "&:hover": {
        "> div img": {
          transform: `scale(1.05)`,
        },
      },
      "&:focus": {
        outline: `none`,
        "> div:after": {
          boxShadow: (t) => `inset 0 0 0 7px ${t.colors.white}`,
          zIndex: 10,
        },
      },
      "@media screen and (prefers-reduced-motion: reduce)": {
        "&:hover": {
          "> div img": {
            transform: `scale(1)`,
          },
          "> div:after": {
            boxShadow: (t) => `inset 0 0 0 7px ${t.colors.white}`,
            zIndex: 10,
          },
        },
      },
      variant: `grid-item`,
    }}
    {...props}
  >
    {children}
  </Link>
)

export default GridItem
