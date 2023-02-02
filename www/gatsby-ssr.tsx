import * as React from "react"
import type { GatsbySSR } from "gatsby"

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHtmlAttributes, setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/benguiat-bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="benguiat-bold"
    />,
    <link
      rel="preload"
      href="/fonts/ibm-plex-sans-400.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ibm-plex-sans-400"
    />,
    <link
      rel="preload"
      href="/fonts/ibm-plex-sans-500.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ibm-plex-sans-500"
    />,
    <link
      rel="preload"
      href="/fonts/ibm-plex-sans-600.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ibm-plex-sans-600"
    />,
    <link
      rel="preload"
      href="/fonts/ibm-plex-sans-700.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="ibm-plex-sans-700"
    />,
  ])
}
