/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import theme from "../theme"

type BadgeProps = {
  children: React.ReactNode
  className?: string
}

const Badge = ({ children, className = `` }: BadgeProps) => (
  <span
    sx={{
      backgroundColor: theme.colors.gray[3],
      color: theme.colors.gray[8],
      fontSize: `0.75rem`,
      padding: `3px 8px`,
      borderRadius: theme.radii.default,
      letterSpacing: theme.letterSpacings.wider,
      textAlign: `center`,
      textTransform: `uppercase`,
      ...theme.badge.specimens,
    }}
    data-name="badge"
    className={className}
  >
    {children}
  </span>
)

export default Badge
