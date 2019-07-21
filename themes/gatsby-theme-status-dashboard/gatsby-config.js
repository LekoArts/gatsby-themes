module.exports = ({ basePath = `/` }) => ({
  plugins: [
    {
      resolve: `gatsby-source-netlify`,
      options: {
        apiKey: process.env.NETLIFY_ACCESS_KEY,
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
