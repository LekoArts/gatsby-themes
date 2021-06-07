---
"@lekoarts/gatsby-theme-specimens": major
---

### Breaking Changes

1. Removed `gatsby-plugin-typescript`
1. Updating `theme-ui` from v0.3 to v0.9 and thus also `emotion` from v10 to v11

#### Migrating

1. The TypeScript plugin isn't necessary anymore with Gatsby v3
1. The changelog/migration guide for `theme-ui` is here: https://theme-ui.com/migrating and for `emotion` here: https://emotion.sh/docs/emotion-11

### Updates to Starter

If you only cloned the starter (https://github.com/LekoArts/gatsby-starter-specimens) and didn't change anything else this section will be more relevant to you.

- Add `FAST_DEV` flag
- Update to all latest Gatsby (+ plugins) versions
- Add `lessBabel` option to `gatsby-plugin-mdx`
- Update usage of `wrapPageElement` API in `gatsby-browser.js` and `gatsby-ssr.js`
- Update `theme-ui` from v0.3 to v0.9
