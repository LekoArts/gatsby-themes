---
"@lekoarts/gatsby-theme-graphql-playground": minor
"@lekoarts/gatsby-theme-minimal-blog": minor
"@lekoarts/gatsby-theme-emilia-core": minor
"@lekoarts/gatsby-theme-emma-core": minor
"@lekoarts/gatsby-theme-jodie": minor
"@lekoarts/gatsby-theme-cara": minor
---

In the last major version release the `siteLanguage` key on the `siteMetadata` object was removed since the [Gatsby Head API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/) didn't support setting the `lang` attribute on the `<html>` back then. Starting with [Gatsby 5.5](https://www.gatsbyjs.com/docs/reference/release-notes/v5.5/#setting-html-and-body-attributes) this is now supported and the removal change was reverted.

Thus you can use the `siteLanguage` key on the `siteMetadata` object again to change the language globally. By default it uses `en`. This is also highlighted in the `README` again. If you want to change the language on a per-page basis, define your own `<html lang="value" />` in your Head API export as it then overrides the global configuration.
