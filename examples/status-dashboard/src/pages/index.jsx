import React from "react"
import { Global, css } from "@emotion/core"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Grid, Info } from "@lekoarts/gatsby-theme-status-dashboard"

const Index = ({
  data: {
    config: { siteMetadata },
  },
}) => {
  const { siteDescription, siteName, siteUrl } = siteMetadata

  return (
    <main
      css={css`
        max-width: 60rem;
        margin: 0 auto;
        padding: 2rem;
      `}
    >
      <Global
        styles={css`
          *::before,
          *::after {
            box-sizing: border-box;
          }
          ::selection {
            color: #fff;
            background-color: #3490dc;
          }
          html {
            -webkit-text-size-adjust: 100%;
          }
          body {
            border: 0;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
              "Helvetica Neue", sans-serif;
            font-size: 18px;
            color: #24242d;
            background: #f0f2fd;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{siteName}</title>
        <meta name="description" content={siteDescription} />
        <meta name="image" content={`${siteUrl}/social.png`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="lekoarts.de" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={`${siteUrl}/social.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@lekoarts_de" />
        <meta name="twitter:title" content={siteName} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={`${siteUrl}/social.png`} />
      </Helmet>
      <h1
        css={css`
          @media (min-width: 600px) {
            font-size: 3rem;
          }
          margin-bottom: 0.5rem;
        `}
      >
        {siteName}
      </h1>
      <p
        css={css`
          @media (min-width: 600px) {
            font-size: 1.5rem;
          }
          color: rgb(96, 111, 123);
          margin-top: 0.75rem;
          margin-bottom: 3rem;
        `}
      >
        {siteDescription}
      </p>
      <Info />
      <div css={css({ marginTop: `1rem` })} />
      <Grid />
      <footer
        css={css({
          textAlign: `center`,
          marginTop: `4rem`,
          color: `#525f74`,
          fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`,
          fontWeight: `400`,
        })}
      >
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        <br />
        <div css={css({ display: `flex`, justifyContent: `center`, alignItems: `center`, marginTop: `1rem` })}>
          <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_w30.png" alt="LekoArts Logo" />
          {` `}
          <a
            css={css({ color: `#525f74`, marginLeft: `1rem`, textDecoration: `none` })}
            href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-status-dashboard"
          >
            Theme by LekoArts
          </a>
        </div>
      </footer>
    </main>
  )
}

export default Index

export const query = graphql`
  query IndexQuery {
    config: site {
      siteMetadata {
        siteName
        siteDescription
        siteUrl
      }
    }
  }
`
