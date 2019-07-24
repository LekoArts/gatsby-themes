require(`dotenv`).config({
  path: `.env`,
})

module.exports = ({ netlifyOptions = {} }) => ({
  plugins: [
    {
      resolve: `gatsby-source-netlify`,
      options: {
        apiKey: process.env.NETLIFY_ACCESS_KEY,
        opts: netlifyOptions,
      },
    },
    {
      resolve: `gatsby-source-circleci`,
      options: {
        apiKey: process.env.CIRCLECI_KEY,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-theme-ui`,
  ],
})
