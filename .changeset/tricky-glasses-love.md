---
"@lekoarts/gatsby-theme-minimal-blog": major
"@lekoarts/gatsby-theme-minimal-blog-core": major
---

### Breaking Changes

1. Using `lessBabel` option for `gatsby-plugin-mdx`
1. Updating `theme-ui` from v0.3 to v0.9 and thus also `emotion` from v10 to v11
1. Updating all Gatsby related packages to latest
1. Removed `gatsby-plugin-typescript`
1. Removed `gatsby-plugin-feed`
1. Removed `typeface-ibm-plex-sans` npm package

#### Migrating

1. The `lessBabel` option might break your setup in some edge cases. If it doesn't work, turn on the `mdx` option and choose your own config for `gatsby-plugin-mdx`
1. The changelog/migration guide for `theme-ui` is here: https://theme-ui.com/migrating and for `emotion` here: https://emotion.sh/docs/emotion-11
1. Gatsby v3 migration guide: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/
1. The TypeScript plugin isn't necessary anymore with Gatsby v3
1. The plugin and its config was moved to the starter. You can copy the configuration from there into your own `gatsby-config.js`
1. The starter now handles loading the font (via `gatsby-omni-font-loader`). This enables you to switch the primary font more easily (once you updated the Theme UI config). You can copy the configuration from there into your own `gatsby-config.js`

### Improvements

- Performance improvements from `theme-ui` upgrade
- Fixed https://github.com/LekoArts/gatsby-themes/issues/415

### Updates to Starter

If you only cloned the starter (https://github.com/LekoArts/gatsby-starter-minimal-blog) and didn't change anything else this section will be more relevant to you.

- Conditionally add `gatsby-plugin-google-analytics`
- Add `FAST_DEV` flag
- Update to all latest Gatsby (+ plugins) versions
- Move `gatsby-plugin-feed` from theme to starter
- Use `gatsby-omni-font-loader` to load the primary font ("IBM Plex Sans") instead of in the theme itself
