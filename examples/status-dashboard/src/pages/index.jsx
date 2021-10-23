import * as React from "react"
import { Global, css } from "@emotion/react"
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
      <div
        css={css`
          margin-top: 1rem;
        `}
      />
      <Grid />
      <footer
        css={css`
          text-align: center;
          margin-top: 4rem;
          color: #525f74;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
            "Helvetica Neue", sans-serif;
          font-weight: 400;
        `}
      >
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        <br />
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
          `}
        >
          <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_v2_w30.png" alt="LekoArts Logo" />
          {` `}
          <a
            css={css`
              color: #525f74;
              margin-left: 1rem;
              text-decoration: none;
              &:hover {
                text-decoration: underline;
              }
            `}
            href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-status-dashboard"
          >
            Theme
          </a>
          <div
            css={css`
              margin-left: 0.25rem;
              margin-right: 0.25rem;
            `}
          >
            by
          </div>
          <a
            css={css`
              color: #525f74;
              text-decoration: none;
              &:hover {
                text-decoration: underline;
              }
            `}
            data-testid="footer"
            href="https://www.lekoarts.de?utm_source=status-dashboard&utm_medium=Starter"
          >
            LekoArts
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
