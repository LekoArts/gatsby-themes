import * as React from "react"
import type { GatsbySSR } from "gatsby"

const SITE_DOMAIN = `themes.lekoarts.de`
const PLAUSIBLE_DOMAIN = `plausible.io`
const SCRIPT_URI = `/js/script.js`

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
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

  if (process.env.NODE_ENV === `production`) {
    const scriptProps = {
      "data-domain": SITE_DOMAIN,
      src: `https://${PLAUSIBLE_DOMAIN}${SCRIPT_URI}`,
    }

    setHeadComponents([
      <link key="gatsby-plugin-plausible-preconnect" rel="preconnect" href={`https://${PLAUSIBLE_DOMAIN}`} />,
      <script key="gatsby-plugin-plausible-script" defer {...scriptProps} />,
      // See: https://plausible.io/docs/custom-event-goals#1-trigger-custom-events-with-javascript-on-your-site
      <script
        key="gatsby-plugin-plausible-custom-events"
        dangerouslySetInnerHTML={{
          __html: `
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) };
          `,
        }}
      />,
    ])
  }
}
