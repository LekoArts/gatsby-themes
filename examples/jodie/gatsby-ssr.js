import * as React from "react"

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })

  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/work-sans.var.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="workSansFont"
    />,
  ])
}
