---
"@lekoarts/gatsby-theme-graphql-playground": major
---

### Breaking Changes

1. Using `lessBabel` option for `gatsby-plugin-mdx`
1. Removed `gatsby-plugin-typescript` & `gatsby-plugin-emotion`

#### Migrating

1. The `lessBabel` option might break your setup in some edge cases. If it doesn't work, turn on the `mdx` option and choose your own config for `gatsby-plugin-mdx`
1. The TypeScript plugin isn't necessary anymore with Gatsby v3

### Improvements

- Performance improvements from `theme-ui` upgrade

### Updates to Starter

If you only cloned the starter (https://github.com/LekoArts/gatsby-starter-graphql-playground) and didn't change anything else this section will be more relevant to you.

- Add `FAST_DEV` flag
- Update to all latest Gatsby (+ plugins) versions
