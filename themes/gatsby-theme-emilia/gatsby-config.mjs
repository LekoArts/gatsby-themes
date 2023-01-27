import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const config = (options) => ({
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia-core`,
      options,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `texts`,
        path: `${__dirname}/src/texts`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-theme-ui`,
  ],
})

export default config
