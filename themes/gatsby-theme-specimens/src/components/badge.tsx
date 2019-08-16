/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type BadgeProps = {
  children: React.ReactNode
  className?: string
}

const Badge = ({ children, className }: BadgeProps) => (
  <span
    sx={{
      backgroundColor: `gray.3`,
      color: `gray.8`,
      fontSize: `0.75rem`,
      padding: `3px 8px`,
      borderRadius: `default`,
      letterSpacing: `wider`,
      textAlign: `center`,
      textTransform: `uppercase`,
      variant: `badge.specimens`,
    }}
    data-name="badge"
    className={className}
  >
    {children}
  </span>
)

export default Badge
