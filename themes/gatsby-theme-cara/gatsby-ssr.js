import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([<link key="icons-preload" rel="preload" href="/icons.svg" as="image" type="image/svg+xml" />])
}
