---
"@lekoarts/gatsby-theme-jodie": major
"@lekoarts/gatsby-theme-jodie-core": major
---

### Breaking Changes

1. Using `lessBabel` option for `gatsby-plugin-mdx`
1. Updating `theme-ui` from v0.3 to v0.9 and thus also `emotion` from v10 to v11
1. Updating all Gatsby related packages to latest
1. Migrated from `gatsby-image` to `gatsby-plugin-image`
1. Removed `fontsource-work-sans` npm package

#### Migrating

1. The `lessBabel` option might break your setup in some edge cases. If it doesn't work, turn on the `mdx` option and choose your own config for `gatsby-plugin-mdx`
1. The changelog/migration guide for `theme-ui` is here: https://theme-ui.com/migrating and for `emotion` here: https://emotion.sh/docs/emotion-11
1. Gatsby v3 migration guide: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/
1. The theme itself is completely migrated to the new image plugin, but if you shadowed components and relied on the old structure, you'll need to migrate to `gatsby-plugin-image`: https://www.gatsbyjs.com/docs/reference/release-notes/image-migration-guide/
1. The starter now handles loading the font (via `gatsby-omni-font-loader`). This enables you to switch the primary font more easily (once you updated the Theme UI config). You can copy the configuration from there into your own `gatsby-config.js`

### Improvements

- You can use the `sharp` theme option to be able to configure `gatsby-plugin-sharp` on your own (helpful for defaults for `gatsby-plugin-image`)
- Performance improvements from `theme-ui` upgrade
- Eagerly load the first image in the grid (better lighthouse score)

### Updates to Starter

If you only cloned the starter (https://github.com/LekoArts/gatsby-starter-portfolio-jodie) and didn't change anything else this section will be more relevant to you.

- Conditionally add `gatsby-plugin-google-analytics`
- Conditionally add `gatsby-plugin-webpack-bundle-analyser-v2`
- Use `gatsby-omni-font-loader` to load the primary font ("Work Sans") instead of in the theme itself
- Add `FAST_DEV` flag
- Update to all latest Gatsby (+ plugins) versions
- Remove `gatsby-source-instagram` as Instagram locked down its API (and public scraping methods) even further. The page is now called `/art` and showcases the custom page in the same way
