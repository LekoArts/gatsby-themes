/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type InnerProps = {
  className?: string
  children?: React.ReactNode
}

const Inner = ({ className, children }: InnerProps) => (
  <div className={className} sx={{ width: [`full`, `full`, `full`, `full`, `full`, `2/3`], textAlign: `left` }}>
    {children}
  </div>
)

export default Inner
