import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Global } from "@emotion/react"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          banner
          siteDescription
          siteTitle
          siteUrl
        }
      }
    }
  `)

  const meta = site.siteMetadata

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{meta.siteTitle}</title>
        <meta name="description" content={meta.siteDescription} />
        <meta name="image" content={meta.banner} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="lekoarts.de" />
        <meta property="og:url" content={meta.siteUrl} />
        <meta property="og:title" content={meta.siteTitle} />
        <meta property="og:description" content={meta.siteDescription} />
        <meta property="og:image" content={meta.banner} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@lekoarts_de" />
        <meta name="twitter:title" content={meta.siteTitle} />
        <meta name="twitter:description" content={meta.siteDescription} />
        <meta name="twitter:image" content={meta.banner} />
      </Helmet>
      <Global
        styles={(theme) => ({
          "*": {
            boxSizing: `border-box`,
          },
          html: { fontSize: `16px`, WebkitTextSizeAdjust: `100%` },
          body: { border: `0`, margin: `0`, padding: `0` },
          "h1, h2, h3, h4, h5, h6": {
            marginTop: `2rem !important`,
            marginBottom: `1rem !important`,
          },
          h3: { marginTop: `6rem !important` },
          ".sizes-table": {
            "> div:not(:first-of-type)": {
              paddingTop: `0.5rem !important`,
              paddingBottom: `0.5rem !important`,
            },
          },
          pre: {
            padding: `0.75rem`,
            borderRadius: `0.25rem`,
            fontSize: `1rem`,
            overflow: `auto`,
          },
          code: {
            backgroundColor: `rgb(30, 30, 30)`,
            color: `white`,
            padding: `0.25rem 0.5rem`,
            borderRadius: `0.25rem`,
            fontSize: `1rem`,
            marginLeft: `0.25rem`,
            marginRight: `0.25rem`,
          },
        })}
      />
      <main style={{ maxWidth: `1200px`, margin: `2rem auto`, padding: `1.5rem` }}>{children}</main>
    </React.Fragment>
  )
}

export default Layout
