import React from "react"
import { withPrefix } from "gatsby"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="icons-preload" rel="preload" href={withPrefix(`/icons.svg`)} as="image" type="image/svg+xml" />,
  ])
}
