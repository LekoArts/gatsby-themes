import React from "react"
import { css, Global } from "@emotion/core"
import Helmet from "react-helmet"

const Layout = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <title>Specimens for Design Systems - @lekoarts/gatsby-theme-specimens</title>
    </Helmet>
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
        body {
          border: 0;
          margin: 0;
          padding: 0;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-top: 2rem !important;
          margin-bottom: 1rem !important;
        }
        .sizes-table {
          > div:not(:first-of-type) {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
          }
        }
      `}
    />
    <main
      css={css`
        max-width: 1200px;
        margin: 2rem auto;
        padding: 1.5rem;
      `}
    >
      {children}
    </main>
  </React.Fragment>
)

export default Layout
