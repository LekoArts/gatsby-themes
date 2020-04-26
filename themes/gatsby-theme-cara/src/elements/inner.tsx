/** @jsx jsx */
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { jsx } from "theme-ui"
import components from "../gatsby-plugin-theme-ui/components"

type InnerProps = {
  className?: string
  children?: React.ReactNode
}

const Inner = ({ className, children }: InnerProps) => (
  <MDXProvider components={components}>
    <div sx={{ width: [`full`, `full`, `full`, `full`, `full`, `2/3`], textAlign: `left` }} className={className}>
      {children}
    </div>
  </MDXProvider>
)

export default Inner
