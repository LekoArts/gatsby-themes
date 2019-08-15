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
      margin: 0,
      mb: 2,
      color: `gray.8`,
      fontSize: `0.7rem`,
      padding: `3px 8px`,
      borderRadius: `default`,
      letterSpacing: `wider`,
      textAlign: `center`,
      textTransform: `uppercase`,
    }}
    className={className}
  >
    {children}
  </span>
)

export default Badge
