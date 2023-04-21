/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import { Global } from "@emotion/react"

const Layout = ({ children }: { children: React.ReactNode }) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `border-box`,
        },
      })}
    />
    <div sx={{ p: 3, maxWidth: 1024, margin: `0 auto` }}>{children}</div>
  </React.Fragment>
)

export default Layout
