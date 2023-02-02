---
"@lekoarts/gatsby-theme-graphql-playground": minor
"@lekoarts/gatsby-theme-minimal-blog-core": minor
"@lekoarts/gatsby-theme-status-dashboard": minor
"@lekoarts/gatsby-theme-minimal-blog": minor
"@lekoarts/gatsby-theme-emilia-core": minor
"@lekoarts/gatsby-theme-jodie-core": minor
"@lekoarts/gatsby-theme-styleguide": minor
"@lekoarts/gatsby-theme-emma-core": minor
"@lekoarts/gatsby-theme-specimens": minor
"@lekoarts/gatsby-theme-emilia": minor
"@lekoarts/gatsby-theme-jodie": minor
"@lekoarts/gatsby-theme-cara": minor
"@lekoarts/gatsby-theme-emma": minor
---

Starting with [Gatsby 5.3](https://www.gatsbyjs.com/docs/reference/release-notes/v5.3/#es-modules-esm-in-gatsby-files) ESM in Gatsby files is supported now! So you can write `gatsby-config.mjs` or `gatsby-node.mjs`.

Therefore this theme was updated to use ESM for its source code. This shouldn't make a difference for actually using the theme as behavior stays the same. If this is not the case, please open an issue!

One benefit of now using ESM behind the scenes is that e.g. the `remark-*` packages could be updated to their latest versions (they are ESM-only). Yey for using up-to-date software.
