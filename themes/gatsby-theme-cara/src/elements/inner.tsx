/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

export default ({ className, children }: { className?: string; children?: React.ReactNode }) => (
  <div className={className} sx={{ width: [`full`, `full`, `full`, `full`, `full`, `2/3`], textAlign: `left` }}>
    {children}
  </div>
)
