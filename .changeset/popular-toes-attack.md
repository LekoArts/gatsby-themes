---
"@lekoarts/gatsby-theme-emma": major
"@lekoarts/gatsby-theme-emma-core": major
---

In preparation for the upcoming [Gatsby 5 release](https://github.com/gatsbyjs/gatsby/discussions/36609) this release will focus on some breaking changes unrelated to the `gatsby` core package. Another new major version will follow once Gatsby 5 is out so that you can upgrade in steps.

**Features:**

- Update to [MDX 2](https://mdxjs.com/blog/v2/) and [`gatsby-plugin-mdx` 4](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/) (**Breaking Change**)
- Update [Theme UI](https://theme-ui.com/) from v0.11 to v0.15 ([Theme UI Changelog](https://github.com/system-ui/theme-ui/blob/develop/CHANGELOG.md)) (**Breaking Change**)
- Replace [`react-helmet`](https://github.com/nfl/react-helmet) with [Gatsby Head API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/) (**Breaking Change**)

**Breaking Changes:**

- Any breaking changes from `theme-ui` between v0.11 and v0.15
- Bump `react` & `react-dom` peerDependency to `>=18.0.0`
- Removal of `siteLanguage` from `siteMetadata`
- [`useColorSchemeMediaQuery`](https://theme-ui.com/color-modes#responding-to-the-prefers-color-scheme-media-query) in Theme UI config is set to `system`
- Removal of `body` from the `Project` and `Page` type. The field `contentFilePath` was added.

**Migration:**

- Internally the necessary changes of the [gatsby-plugin-mdx migration guide](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#migrating-from-v3-to-v4) were made, but if you set the `mdx` option to `false` and/or shadowed the theme in any way, you'll need to read the migration guide to e.g. change your `gatsby-config`. You'll also need to add any `remarkPlugins` or `rehypePlugins` that the theme is adding by default.
- MDX 2 is more strict about the allowed syntax, so you'll need to [update your MDX content](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#updating-mdx-content) to be compliant.
- See [Theme UI's migration guide](https://github.com/system-ui/theme-ui/blob/develop/MIGRATING.md)
- If you shadowed a file or used `react-helmet` in any form in your site, you'll either need to migrate to the Gatsby Head API or re-install the necessary dependencies. By default, the theme no longer ships with `react-helmet` as internally everything was migrated to Gatsby Head API. To have the `lang` tag work correctly on the `<html>` element you'll need to set it by using the [`setHtmlAttributes` API](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#onRenderBody). The current starter already has this included (you can copy it from there). Thus the `<Seo>` component should only be used together with Gatsby Head API.
