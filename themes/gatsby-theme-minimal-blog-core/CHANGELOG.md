# Change Log

## 4.1.8

### Patch Changes

- [#925](https://github.com/LekoArts/gatsby-themes/pull/925) [`bc8997a`](https://github.com/LekoArts/gatsby-themes/commit/bc8997ad78cbd37dcdcdfcd02e30ad4bb5272996) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Pass full `info` object to resolver

## 4.1.7

### Patch Changes

- [#915](https://github.com/LekoArts/gatsby-themes/pull/915) [`93e4927`](https://github.com/LekoArts/gatsby-themes/commit/93e492764d120d436b74661413c5d6af8f6854f2) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog-core

## 4.1.6

### Patch Changes

- [#895](https://github.com/LekoArts/gatsby-themes/pull/895) [`beb1c63`](https://github.com/LekoArts/gatsby-themes/commit/beb1c63d60797390750b5a97f670d81118714849) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog-core

## 4.1.5

### Patch Changes

- [#869](https://github.com/LekoArts/gatsby-themes/pull/869) [`dbe1a0e`](https://github.com/LekoArts/gatsby-themes/commit/dbe1a0e854271cc1a8f0694199b323cbe1953c52) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: Update peerDependencies to include React 18

* [#866](https://github.com/LekoArts/gatsby-themes/pull/866) [`dff0be1`](https://github.com/LekoArts/gatsby-themes/commit/dff0be15daeaa37dd67e3af23087a3dab3d13f65) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog-core

## 4.1.4

### Patch Changes

- [#812](https://github.com/LekoArts/gatsby-themes/pull/812) [`334f0cb`](https://github.com/LekoArts/gatsby-themes/commit/334f0cb7237a97b522714f586b0f598537972187) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog-core

## 4.1.2

### Patch Changes

- [#776](https://github.com/LekoArts/gatsby-themes/pull/776) [`d60f9cd`](https://github.com/LekoArts/gatsby-themes/commit/d60f9cdc38e0b9430012bf3ca30336e6e32d7ff4) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog-core

* [#777](https://github.com/LekoArts/gatsby-themes/pull/777) [`090dfc2`](https://github.com/LekoArts/gatsby-themes/commit/090dfc23e55605ba7311e7ffe14e37294d27d26b) Thanks [@LekoArts](https://github.com/LekoArts)! - chore(deps): Update gatsby-plugin-mdx and gatsby

## 4.1.0

### Patch Changes

- [#713](https://github.com/LekoArts/gatsby-themes/pull/713) [`71e15ca`](https://github.com/LekoArts/gatsby-themes/commit/71e15ca705be9aad95cbdd8baabe77b93cbbb77b) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency gatsby-plugin-sharp to ^4.0.1 for gatsby-theme-minimal-blog-core

## 4.0.0

### Major Changes

[#641](https://github.com/LekoArts/gatsby-themes/pull/641) [`1598dd6`](https://github.com/LekoArts/gatsby-themes/commit/1598dd660e3ba795b50c4aeb11550806e0b7b6ba)

Compatibility with **Gatsby 4**. Upgrade your theme to be able to use the new Gatsby release. Leverage Deferred Static Generation (DSG), Server-Side Rendering (SSR) and Parallel Query Running (PQR) with this new release. [Learn more about Gatsby 4](https://www.gatsbyjs.com/gatsby-4/).

All Gatsby related packages were also upgraded to their latest new major version.

[See Gatsby 4 Migration Guide](https://gatsbyjs.com/docs/reference/release-notes/migrating-from-v3-to-v4/)

**BREAKING CHANGES:**

- Minimum required Node.js version: `>=14.15.0`
- Minimum required `gatsby` version: `^4.0.0`
- Upgraded Theme UI (packages) from `^0.9.0` to `^0.11.0`

**New Features:**

- You can now use `defer: true` in the frontmatter of your page/post to mark the page as deferred (for Deferred Static Generation)

**Bug Fixes:**

- The `slug` key on posts now correctly respects the `postsPrefix` option (fixes https://github.com/LekoArts/gatsby-themes/issues/699). This means that the URL now also contains the `postsPrefix` option (which is potentially breaking if you rely on this being different).
- The `slug` key on pages now correctly respects the `basePath` option. This means that the URL now also contains the `basePath` option (which is potentially breaking if you rely on this being different).

**Migration:**

- If you relied on `slug` both for posts or pages you'll need to check if your URLs are still as expected
- If you used Theme UI in custom components, check the [Theme UI changelog](https://github.com/system-ui/theme-ui/blob/develop/CHANGELOG.md)
- Update CI/local environment to account for the new Node.js requirement

## 3.1.3

### Patch Changes

- [#696](https://github.com/LekoArts/gatsby-themes/pull/696) [`d0b7944`](https://github.com/LekoArts/gatsby-themes/commit/d0b79444bb75631bbbf83db0af21be811f648f60) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: Improve READMEs with more instructions

  Links to changelogs and places to ask questions were added.

## 3.1.2

### Patch Changes

- [#695](https://github.com/LekoArts/gatsby-themes/pull/695) [`afba2ff`](https://github.com/LekoArts/gatsby-themes/commit/afba2fff5d97e5a27c3110c078a2c804557cbf56) Thanks [@LekoArts](https://github.com/LekoArts)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog-core

## 3.1.1

### Patch Changes

- [#664](https://github.com/LekoArts/gatsby-themes/pull/664) [`2ca7855`](https://github.com/LekoArts/gatsby-themes/commit/2ca7855e1e8854352bac8052bb90b74c8463c595) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog-core

  | Package                                                          | Change                                                                                             |
  | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
  | [gatsby-plugin-mdx](https://togithub.com/gatsbyjs/gatsby)        | [`^2.10.1` -> `^2.13.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-mdx/2.13.0/2.13.0)        |
  | [gatsby-plugin-sharp](https://togithub.com/gatsbyjs/gatsby)      | [`^3.10.2` -> `^3.13.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-sharp/3.13.0/3.13.0)      |
  | [gatsby-remark-images](https://togithub.com/gatsbyjs/gatsby)     | [`^5.7.0` -> `^5.10.0`](https://renovatebot.com/diffs/npm/gatsby-remark-images/5.10.0/5.10.0)      |
  | [gatsby-source-filesystem](https://togithub.com/gatsbyjs/gatsby) | [`^3.10.0` -> `^3.13.0`](https://renovatebot.com/diffs/npm/gatsby-source-filesystem/3.13.0/3.13.0) |
  | [gatsby-transformer-sharp](https://togithub.com/gatsbyjs/gatsby) | [`^3.10.0` -> `^3.13.0`](https://renovatebot.com/diffs/npm/gatsby-transformer-sharp/3.13.0/3.13.0) |

## 3.1.0

### Minor Changes

- [#644](https://github.com/LekoArts/gatsby-themes/pull/644) [`4fccc44`](https://github.com/LekoArts/gatsby-themes/commit/4fccc4412f4531c9b1063db3f8c6e41f4bda8ee0) Thanks [@LekoArts](https://github.com/LekoArts)! - **feat(minimal-blog-core): Set `backgroundColor` in gatsby-remark-images to `transparent`**

  By default the plugin has `white` as a `backgroundColor`. This is a problem for transparent images (PNG) that are viewed in the dark theme version of the site.
  So as a sensible default I'll set this to `transparent` now. If you relied on this being white and want to restore the old behavior, set the `mdx` option to `false` for the theme, [copy/paste the existing `gatsby-plugin-mdx` config](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog-core/gatsby-config.js#L22-L48) into your own site.

  For example, your `gatsby-config.js` then will look like this:

  ```js
  module.exports = {
    // + Rest of your config
    plugins: [
      // + rest of your plugins
      {
        resolve: `@lekoarts/gatsby-theme-minimal-blog`,
        options: {
          mdx: false
          // + rest of the options you want to set
        }
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          lessBabel: true,
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 960,
                quality: 90,
                linkImagesToOriginal: false
              }
            }
          ],
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 960,
                quality: 90,
                linkImagesToOriginal: false
              }
            }
          ]
        }
      }
    ]
  };
  ```

## 3.0.3

### Patch Changes

- [#632](https://github.com/LekoArts/gatsby-themes/pull/632) [`a159f35`](https://github.com/LekoArts/gatsby-themes/commit/a159f3597f9e7871da52e743f02626aa6053574f) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update packages

  All dependencies were updated to their latest version. The asssociated commit includes these updates:

  | Package                                                            | Change                                                                                             |
  | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
  | [@react-spring/parallax](https://togithub.com/pmndrs/react-spring) | [`^9.2.3` -> `^9.2.4`](https://renovatebot.com/diffs/npm/@react-spring%2fparallax/9.2.3/9.2.4)     |
  | [@react-spring/web](https://togithub.com/pmndrs/react-spring)      | [`^9.2.3` -> `^9.2.4`](https://renovatebot.com/diffs/npm/@react-spring%2fweb/9.2.3/9.2.4)          |
  | [gatsby-plugin-catch-links](https://togithub.com/gatsbyjs/gatsby)  | [`^3.8.0` -> `^3.10.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-catch-links/3.8.0/3.10.0)  |
  | [gatsby-plugin-image](https://togithub.com/gatsbyjs/gatsby)        | [`^1.8.0` -> `^1.10.1`](https://renovatebot.com/diffs/npm/gatsby-plugin-image/1.8.0/1.10.1)        |
  | [gatsby-plugin-mdx](https://togithub.com/gatsbyjs/gatsby)          | [`^2.8.0` -> `^2.10.1`](https://renovatebot.com/diffs/npm/gatsby-plugin-mdx/2.8.0/2.10.1)          |
  | [gatsby-plugin-react-helmet](https://togithub.com/gatsbyjs/gatsby) | [`^4.8.0` -> `^4.10.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-react-helmet/4.8.0/4.10.0) |
  | [gatsby-plugin-sharp](https://togithub.com/gatsbyjs/gatsby)        | [`^3.8.0` -> `^3.10.2`](https://renovatebot.com/diffs/npm/gatsby-plugin-sharp/3.8.0/3.10.2)        |
  | [gatsby-remark-images](https://togithub.com/gatsbyjs/gatsby)       | [`^5.5.0` -> `^5.7.0`](https://renovatebot.com/diffs/npm/gatsby-remark-images/5.5.0/5.7.0)         |
  | [gatsby-source-filesystem](https://togithub.com/gatsbyjs/gatsby)   | [`^3.8.0` -> `^3.10.0`](https://renovatebot.com/diffs/npm/gatsby-source-filesystem/3.8.0/3.10.0)   |
  | [gatsby-transformer-sharp](https://togithub.com/gatsbyjs/gatsby)   | [`^3.8.0` -> `^3.10.0`](https://renovatebot.com/diffs/npm/gatsby-transformer-sharp/3.8.0/3.10.0)   |
  | [react-spring](https://togithub.com/pmndrs/react-spring)           | [`^9.2.3` -> `^9.2.4`](https://renovatebot.com/diffs/npm/react-spring/9.2.3/9.2.4)                 |

  Depending on the theme a subset of these packages was updated. Future updates will be more granular so that the changelog is individual for each package!

## 3.0.2

### Patch Changes

- [#619](https://github.com/LekoArts/gatsby-themes/pull/619) [`6d104cf`](https://github.com/LekoArts/gatsby-themes/commit/6d104cf94b926a04c386b7c3cfaecce7b0934000) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update packages

  | Package                                                            | Change                                                                                           |
  | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
  | [gatsby-plugin-catch-links](https://togithub.com/gatsbyjs/gatsby)  | [`^3.7.0` -> `^3.8.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-catch-links/3.7.0/3.8.0)  |
  | [gatsby-plugin-image](https://togithub.com/gatsbyjs/gatsby)        | [`^1.7.0` -> `^1.8.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-image/1.7.0/1.8.0)        |
  | [gatsby-plugin-mdx](https://togithub.com/gatsbyjs/gatsby)          | [`^2.7.0` -> `^2.8.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-mdx/2.7.0/2.8.0)          |
  | [gatsby-plugin-react-helmet](https://togithub.com/gatsbyjs/gatsby) | [`^4.7.0` -> `^4.8.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-react-helmet/4.7.0/4.8.0) |
  | [gatsby-plugin-sharp](https://togithub.com/gatsbyjs/gatsby)        | [`^3.7.0` -> `^3.8.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-sharp/3.7.0/3.8.0)        |
  | [gatsby-remark-images](https://togithub.com/gatsbyjs/gatsby)       | [`^5.4.0` -> `^5.5.0`](https://renovatebot.com/diffs/npm/gatsby-remark-images/5.4.0/5.5.0)       |
  | [gatsby-source-filesystem](https://togithub.com/gatsbyjs/gatsby)   | [`^3.7.0` -> `^3.8.0`](https://renovatebot.com/diffs/npm/gatsby-source-filesystem/3.7.0/3.8.0)   |
  | [gatsby-transformer-sharp](https://togithub.com/gatsbyjs/gatsby)   | [`^3.7.0` -> `^3.8.0`](https://renovatebot.com/diffs/npm/gatsby-transformer-sharp/3.7.0/3.8.0)   |

## 3.0.1

### Patch Changes

- [#597](https://github.com/LekoArts/gatsby-themes/pull/597) [`e1aec09`](https://github.com/LekoArts/gatsby-themes/commit/e1aec0984a39e834ae81001bf41bb2813a30bf33) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update packages

  Renovate Bot updates:

  - `@react-spring/parallax` ^9.1.2 -> ^9.2.3
  - `@react-spring/web` ^9.1.2 -> ^9.2.3
  - `gatsby-plugin-catch-links` ^3.6.0 -> ^3.7.0
  - `gatsby-plugin-image` ^1.6.0 -> ^1.7.0
  - `gatsby-plugin-mdx` ^2.6.0 -> ^2.7.0
  - `gatsby-plugin-react-helmet` ^4.6.0 -> ^4.7.0
  - `gatsby-plugin-sharp` ^3.6.0 -> ^3.7.0
  - `gatsby-remark-images` ^5.3.0 -> ^5.4.0
  - `gatsby-source-filesystem` ^3.6.0 -> ^3.7.0
  - `gatsby-transformer-sharp` ^3.6.0 -> ^3.7.0

* [#605](https://github.com/LekoArts/gatsby-themes/pull/605) [`b2822c0`](https://github.com/LekoArts/gatsby-themes/commit/b2822c0f6bef8f7d74d1846160659e8ddb0a6c36) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Don't use nullish coalescing

  Support for Node versions older than 14+

## 3.0.0

### Major Changes

[#599](https://github.com/LekoArts/gatsby-themes/pull/599) [`1785dcf`](https://github.com/LekoArts/gatsby-themes/commit/1785dcfad131ab9270c401e6a3bb450f7cb01288) Thanks [@LekoArts](https://github.com/LekoArts)!

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

## 2.7.6

### Patch Changes

- [`47f747e`](https://github.com/LekoArts/gatsby-themes/commit/47f747e045962996503bf4043b0adc5a2527a855) [#559](https://github.com/LekoArts/gatsby-themes/pull/559) Thanks [@renovate](https://github.com/apps/renovate)! - Dependency updates for various packages, including theme-ui and gatsby related packages (includes improvements for `gatsby-plugin-image`)

## 2.7.5

### Patch Changes

- [`9d25527`](https://github.com/LekoArts/gatsby-themes/commit/9d25527cf2372d24682d85c44ecca02675019774) [#551](https://github.com/LekoArts/gatsby-themes/pull/551) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update packages

  You can see the details of the update here: https://github.com/LekoArts/gatsby-themes/pull/551

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.6.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.6.2...@lekoarts/gatsby-theme-minimal-blog-core@2.6.3) (2020-11-11)

**Note:** Version bump only for package @lekoarts/gatsby-theme-minimal-blog-core

## [2.6.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.6.1...@lekoarts/gatsby-theme-minimal-blog-core@2.6.2) (2020-11-04)

### Bug Fixes

- **gatsby-theme-minimal-blog-core:** Use postPrefix for posts, not pages ([d389326](https://github.com/LekoArts/gatsby-themes/commit/d389326ee1f2267e34923c13d8447f5e823d257f))

## [2.6.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.6.0...@lekoarts/gatsby-theme-minimal-blog-core@2.6.1) (2020-11-02)

### Bug Fixes

- **deps:** update packages ([#530](https://github.com/LekoArts/gatsby-themes/issues/530)) ([2125d8e](https://github.com/LekoArts/gatsby-themes/commit/2125d8ec904388c66d821a7db7ebca6adc9ff73c))

# [2.6.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.5.2...@lekoarts/gatsby-theme-minimal-blog-core@2.6.0) (2020-11-01)

### Features

- **gatsby-theme-minimal-blog:** Add postsPrefix option ([bc172cd](https://github.com/LekoArts/gatsby-themes/commit/bc172cd1eea69d9e76dd459c11d174b3ea96ea3d)), closes [#512](https://github.com/LekoArts/gatsby-themes/issues/512)

## [2.5.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.5.1...@lekoarts/gatsby-theme-minimal-blog-core@2.5.2) (2020-10-25)

### Bug Fixes

- **deps:** update packages ([#510](https://github.com/LekoArts/gatsby-themes/issues/510)) ([06ecc65](https://github.com/LekoArts/gatsby-themes/commit/06ecc65b784e8fd27d5354761211df14f7a72749))

## [2.5.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.5.0...@lekoarts/gatsby-theme-minimal-blog-core@2.5.1) (2020-10-10)

**Note:** Version bump only for package @lekoarts/gatsby-theme-minimal-blog-core

# [2.5.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.4.4...@lekoarts/gatsby-theme-minimal-blog-core@2.5.0) (2020-09-25)

### Features

- **minimal-blog:** Add Canonical URL support ([#494](https://github.com/LekoArts/gatsby-themes/issues/494)) ([0e9d7ac](https://github.com/LekoArts/gatsby-themes/commit/0e9d7ac04fdf9a7d30cca8c7ccf7565d3955502f))

## [2.4.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.4.3...@lekoarts/gatsby-theme-minimal-blog-core@2.4.4) (2020-09-25)

### Bug Fixes

- **deps:** update packages ([#490](https://github.com/LekoArts/gatsby-themes/issues/490)) ([b3af934](https://github.com/LekoArts/gatsby-themes/commit/b3af934ac68b4f9fb7492cc3da7707392325175b))

## [2.4.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.4.2...@lekoarts/gatsby-theme-minimal-blog-core@2.4.3) (2020-09-16)

### Bug Fixes

- **deps:** update packages ([#484](https://github.com/LekoArts/gatsby-themes/issues/484)) ([006cdc4](https://github.com/LekoArts/gatsby-themes/commit/006cdc4b8623595b14f6571fe694671a77a6a9dc))

## [2.4.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.4.1...@lekoarts/gatsby-theme-minimal-blog-core@2.4.2) (2020-09-10)

### Bug Fixes

- **deps:** update packages ([#481](https://github.com/LekoArts/gatsby-themes/issues/481)) ([cf206a2](https://github.com/LekoArts/gatsby-themes/commit/cf206a241867ede738be2b3a1b856ec3e85c010e))

## [2.4.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.4.0...@lekoarts/gatsby-theme-minimal-blog-core@2.4.1) (2020-08-28)

### Bug Fixes

- **minimal-blog:** Fix code block CSS positioning ([#480](https://github.com/LekoArts/gatsby-themes/issues/480)) ([98b6cac](https://github.com/LekoArts/gatsby-themes/commit/98b6cacd9ee8bf49d92faa6874fe27ec4b62c5cf))

# [2.4.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.3.11...@lekoarts/gatsby-theme-minimal-blog-core@2.4.0) (2020-08-27)

### Features

- **minimal-blog:** Add "Copy" button ([#477](https://github.com/LekoArts/gatsby-themes/issues/477)) ([3c5ef99](https://github.com/LekoArts/gatsby-themes/commit/3c5ef991c9b593341d8851035c8d846ec2823423))

## [2.3.11](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.3.10...@lekoarts/gatsby-theme-minimal-blog-core@2.3.11) (2020-08-27)

### Bug Fixes

- **deps:** update packages ([#458](https://github.com/LekoArts/gatsby-themes/issues/458)) ([dcfb106](https://github.com/LekoArts/gatsby-themes/commit/dcfb1060ee90a928ae28840906b6f3b706218ad8))
- **deps:** update packages ([#461](https://github.com/LekoArts/gatsby-themes/issues/461)) ([6e4e35e](https://github.com/LekoArts/gatsby-themes/commit/6e4e35e21b502a9a3b9305785b372f03a7741ce7))
- **deps:** update packages ([#464](https://github.com/LekoArts/gatsby-themes/issues/464)) ([cfa1d43](https://github.com/LekoArts/gatsby-themes/commit/cfa1d43fd03d860930005359907b0bab1278e243))

## [2.3.10](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.3.9...@lekoarts/gatsby-theme-minimal-blog-core@2.3.10) (2020-07-09)

### Bug Fixes

- **deps:** update dependency gatsby-plugin-sharp to ^2.6.18 ([#445](https://github.com/LekoArts/gatsby-themes/issues/445)) ([5aad537](https://github.com/LekoArts/gatsby-themes/commit/5aad53719cd6049a1f9cfbecaf730ded952031d3))

## [2.3.9](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.3.8...@lekoarts/gatsby-theme-minimal-blog-core@2.3.9) (2020-07-04)

### Bug Fixes

- remove folder creation in onPreBootstrap step ([#440](https://github.com/LekoArts/gatsby-themes/issues/440)) ([ba92910](https://github.com/LekoArts/gatsby-themes/commit/ba9291019db6945726274db34f6b272873a40eca))

## [2.3.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.3.7...@lekoarts/gatsby-theme-minimal-blog-core@2.3.8) (2020-07-03)

### Bug Fixes

- **deps:** update packages ([#437](https://github.com/LekoArts/gatsby-themes/issues/437)) ([5e27caf](https://github.com/LekoArts/gatsby-themes/commit/5e27caf74c2eae0e7c158fa5a15bd52ae2069ee7))

## [2.3.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.3.6...@lekoarts/gatsby-theme-minimal-blog-core@2.3.7) (2020-07-02)

### Bug Fixes

- **deps:** update packages ([#429](https://github.com/LekoArts/gatsby-themes/issues/429)) ([f25dfb6](https://github.com/LekoArts/gatsby-themes/commit/f25dfb6105669f62468abc63ceb73c2fbbb73065))

## [2.3.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.3.5...@lekoarts/gatsby-theme-minimal-blog-core@2.3.6) (2020-06-08)

### Bug Fixes

- **deps:** update packages ([#408](https://github.com/LekoArts/gatsby-themes/issues/408)) ([11b89ad](https://github.com/LekoArts/gatsby-themes/commit/11b89ad8bb0a59dc3fe95941bca57d83a1716e80))

## [2.3.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.3.4...@lekoarts/gatsby-theme-minimal-blog-core@2.3.5) (2020-05-29)

### Bug Fixes

- **deps:** update packages ([#403](https://github.com/LekoArts/gatsby-themes/issues/403)) ([4275401](https://github.com/LekoArts/gatsby-themes/commit/427540138f6c8687dfff4163679a222ba5d49c8f))

## [2.3.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.3.3...@lekoarts/gatsby-theme-minimal-blog-core@2.3.4) (2020-05-12)

**Note:** Version bump only for package @lekoarts/gatsby-theme-minimal-blog-core

## [2.3.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.3.2...@lekoarts/gatsby-theme-minimal-blog-core@2.3.3) (2020-05-04)

### Bug Fixes

- **deps:** update packages ([#394](https://github.com/LekoArts/gatsby-themes/issues/394)) ([c047fce](https://github.com/LekoArts/gatsby-themes/commit/c047fce748e9c85604a5fb2f104918d455b96580))

## [2.3.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.3.1...@lekoarts/gatsby-theme-minimal-blog-core@2.3.2) (2020-05-02)

**Note:** Version bump only for package @lekoarts/gatsby-theme-minimal-blog-core

## [2.3.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.3.0...@lekoarts/gatsby-theme-minimal-blog-core@2.3.1) (2020-04-28)

### Bug Fixes

- **deps:** update gatsby ([#378](https://github.com/LekoArts/gatsby-themes/issues/378)) ([8238565](https://github.com/LekoArts/gatsby-themes/commit/82385658f18c983b4ca4d83233660e9f4492a4a9))
- **deps:** update mdx to ^1.5.9 ([#379](https://github.com/LekoArts/gatsby-themes/issues/379)) ([0cc9462](https://github.com/LekoArts/gatsby-themes/commit/0cc94627475b4fcdc8d6db1dff1b41c2fd658ac6))

# [2.3.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.2.7...@lekoarts/gatsby-theme-minimal-blog-core@2.3.0) (2020-04-27)

### Features

- Update theme-ui to v0.3.x ([#371](https://github.com/LekoArts/gatsby-themes/issues/371)) ([67a05ac](https://github.com/LekoArts/gatsby-themes/commit/67a05ac3e1deaddfe38591739e7f50f56d49d109)), closes [/theme-ui.com/migrating#v03](https://github.com//theme-ui.com/migrating/issues/v03) [#262](https://github.com/LekoArts/gatsby-themes/issues/262)

## [2.2.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.2.6...@lekoarts/gatsby-theme-minimal-blog-core@2.2.7) (2020-04-24)

### Bug Fixes

- **deps:** update gatsby ([#364](https://github.com/LekoArts/gatsby-themes/issues/364)) ([aac08a8](https://github.com/LekoArts/gatsby-themes/commit/aac08a809b86de28f78d2db95dc5651a0a8e640b))

## [2.2.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.2.5...@lekoarts/gatsby-theme-minimal-blog-core@2.2.6) (2020-04-13)

### Bug Fixes

- **deps:** update gatsby ([#353](https://github.com/LekoArts/gatsby-themes/issues/353)) ([4550ff3](https://github.com/LekoArts/gatsby-themes/commit/4550ff3a79ba415a4f019019300fea47d24b16c8))

## [2.2.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.2.4...@lekoarts/gatsby-theme-minimal-blog-core@2.2.5) (2020-04-12)

### Bug Fixes

- Allow timeToRead to be null ([#347](https://github.com/LekoArts/gatsby-themes/issues/347)) ([5142ecf](https://github.com/LekoArts/gatsby-themes/commit/5142ecfcf10a7eb1529be335282b55368fa73047))

## [2.2.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.2.3...@lekoarts/gatsby-theme-minimal-blog-core@2.2.4) (2020-04-12)

### Bug Fixes

- **deps:** update gatsby ([#343](https://github.com/LekoArts/gatsby-themes/issues/343)) ([6f4f07f](https://github.com/LekoArts/gatsby-themes/commit/6f4f07f0d6570610a3d17bb60472a52ac402693d))

## [2.2.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.2.2...@lekoarts/gatsby-theme-minimal-blog-core@2.2.3) (2020-04-01)

**Note:** Version bump only for package @lekoarts/gatsby-theme-minimal-blog-core

## [2.2.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.2.1...@lekoarts/gatsby-theme-minimal-blog-core@2.2.2) (2020-03-31)

### Bug Fixes

- **deps:** update gatsby ([#305](https://github.com/LekoArts/gatsby-themes/issues/305)) ([f3a5e36](https://github.com/LekoArts/gatsby-themes/commit/f3a5e369b6ce1e3b6c046287fe0c1511fa9db758))
- **deps:** update gatsby ([#312](https://github.com/LekoArts/gatsby-themes/issues/312)) ([5a93a50](https://github.com/LekoArts/gatsby-themes/commit/5a93a509d33cc1738de8cfb54a1690ae8dba3151))
- **deps:** update gatsby ([#319](https://github.com/LekoArts/gatsby-themes/issues/319)) ([b7c3dcd](https://github.com/LekoArts/gatsby-themes/commit/b7c3dcdfd54a3cd8291b3dca3868be2af738c1a5))
- **deps:** update gatsby ([#330](https://github.com/LekoArts/gatsby-themes/issues/330)) ([af9b834](https://github.com/LekoArts/gatsby-themes/commit/af9b834102b2e15689557c861f83902b3cb2a728))
- **deps:** update mdx to ^1.5.8 ([#331](https://github.com/LekoArts/gatsby-themes/issues/331)) ([9580e68](https://github.com/LekoArts/gatsby-themes/commit/9580e681f589d60aa1384c5b8d9049ecbde70ea2))
- **gatsby-theme-minimal-blog:** add Markdown support to gatsby-p… ([#308](https://github.com/LekoArts/gatsby-themes/issues/308)) ([c338b01](https://github.com/LekoArts/gatsby-themes/commit/c338b01966145791da9dc9f918703822b4ee8643))

## [2.2.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.2.0...@lekoarts/gatsby-theme-minimal-blog-core@2.2.1) (2020-03-04)

### Bug Fixes

- **deps:** update gatsby ([#297](https://github.com/LekoArts/gatsby-themes/issues/297)) ([1c2cd69](https://github.com/LekoArts/gatsby-themes/commit/1c2cd695d7e2abbc820ce81a37fc20f23ab9f7ce))
- **deps:** update gatsby ([#298](https://github.com/LekoArts/gatsby-themes/issues/298)) ([a904526](https://github.com/LekoArts/gatsby-themes/commit/a904526aed9c86fa291866fc85f0d0bca11112b6))

# [2.2.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.1.0...@lekoarts/gatsby-theme-minimal-blog-core@2.2.0) (2020-02-29)

### Features

- Add excerpt, description and timeToRead to queries ([8c38636](https://github.com/LekoArts/gatsby-themes/commit/8c386368fd4a819cc95f41af8842bde712a5183e)), closes [#274](https://github.com/LekoArts/gatsby-themes/issues/274)

# [2.1.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.0.2...@lekoarts/gatsby-theme-minimal-blog-core@2.1.0) (2020-02-27)

### Features

- Add `formatString` option ([#289](https://github.com/LekoArts/gatsby-themes/issues/289)) ([4714efb](https://github.com/LekoArts/gatsby-themes/commit/4714efbab2156eb853e94958f0b078f28dd065dc))

## [2.0.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.0.1...@lekoarts/gatsby-theme-minimal-blog-core@2.0.2) (2020-02-27)

### Bug Fixes

- **deps:** update gatsby ([#278](https://github.com/LekoArts/gatsby-themes/issues/278)) ([8d8d8e4](https://github.com/LekoArts/gatsby-themes/commit/8d8d8e48bdeac04a07a74682cbadd4927b3ec101))
- **deps:** update mdx to ^1.5.7 ([#288](https://github.com/LekoArts/gatsby-themes/issues/288)) ([feac925](https://github.com/LekoArts/gatsby-themes/commit/feac9250092047dce9a2d9bfe0fe56a53a547256))

## [2.0.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@2.0.0...@lekoarts/gatsby-theme-minimal-blog-core@2.0.1) (2020-02-16)

### Bug Fixes

- **deps:** update dependency gatsby-plugin-sharp to ^2.4.0 ([#246](https://github.com/LekoArts/gatsby-themes/issues/246)) ([19a6fbe](https://github.com/LekoArts/gatsby-themes/commit/19a6fbe8c4313fd03c2dc3f5c69a886ceb56d699))
- **deps:** update gatsby ([#260](https://github.com/LekoArts/gatsby-themes/issues/260)) ([5a779f3](https://github.com/LekoArts/gatsby-themes/commit/5a779f32d548e0f4cfb63f6534f81c949123fa67))

# [2.0.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@1.1.1...@lekoarts/gatsby-theme-minimal-blog-core@2.0.0) (2020-01-23)

### Bug Fixes

- **deps:** update gatsby ([#229](https://github.com/LekoArts/gatsby-themes/issues/229)) ([9292484](https://github.com/LekoArts/gatsby-themes/commit/9292484599ba48cc622696a4b38a7f170c91df86))

### Features

- Change config format on minimal-blog theme ([#234](https://github.com/LekoArts/gatsby-themes/issues/234)) ([bdeb670](https://github.com/LekoArts/gatsby-themes/commit/bdeb670797da5faa2d4084c3c128f0e38dbbf582))

### BREAKING CHANGES

- The navigation and externalLinks options are no longer on the siteMetadata but now in the theme options itself.

## [1.1.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@1.1.0...@lekoarts/gatsby-theme-minimal-blog-core@1.1.1) (2020-01-17)

### Bug Fixes

- **deps:** update gatsby ([#224](https://github.com/LekoArts/gatsby-themes/issues/224)) ([b8c544a](https://github.com/LekoArts/gatsby-themes/commit/b8c544a0172180b246cd17c3385dc8e55efef981))
- **deps:** update mdx to ^1.5.5 ([#198](https://github.com/LekoArts/gatsby-themes/issues/198)) ([052d711](https://github.com/LekoArts/gatsby-themes/commit/052d711c2a56ecaf7a0f10f308b525cd963a9bc2))

# [1.1.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@1.0.4...@lekoarts/gatsby-theme-minimal-blog-core@1.1.0) (2020-01-07)

### Features

- **gatsby-theme-minimal-blog-core:** Custom slug for blog posts via frontmatter ([05cff1e](https://github.com/LekoArts/gatsby-themes/commit/05cff1ec0bcd2ba2fb3b7cfbb8a55f626ab9abd8)), closes [#217](https://github.com/LekoArts/gatsby-themes/issues/217)

## [1.0.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@1.0.3...@lekoarts/gatsby-theme-minimal-blog-core@1.0.4) (2019-12-31)

### Bug Fixes

- **deps:** update gatsby ([#192](https://github.com/LekoArts/gatsby-themes/issues/192)) ([77916ac](https://github.com/LekoArts/gatsby-themes/commit/77916acb51169bbc2e79af70d0b5ee93d1592a2f))
- **deps:** update gatsby ([#197](https://github.com/LekoArts/gatsby-themes/issues/197)) ([a194a3a](https://github.com/LekoArts/gatsby-themes/commit/a194a3a9e8e5ef034189a51e69624700408caebd))

## [1.0.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@1.0.2...@lekoarts/gatsby-theme-minimal-blog-core@1.0.3) (2019-12-03)

### Bug Fixes

- **deps:** update gatsby ([#178](https://github.com/LekoArts/gatsby-themes/issues/178)) ([6ede2c3](https://github.com/LekoArts/gatsby-themes/commit/6ede2c3654f5baa6f1c53f5bb73d046fc257c0af))

## [1.0.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog-core@1.0.1...@lekoarts/gatsby-theme-minimal-blog-core@1.0.2) (2019-11-25)

### Bug Fixes

- **deps:** update gatsby ([#166](https://github.com/LekoArts/gatsby-themes/issues/166)) ([8b5cd32](https://github.com/LekoArts/gatsby-themes/commit/8b5cd32222495e1433b6c508697b1853ba99b939))

## 1.0.1 (2019-11-16)

### Features

- Add gatsby-theme-minimal-blog ([#151](https://github.com/LekoArts/gatsby-themes/issues/151)) ([344a52c](https://github.com/LekoArts/gatsby-themes/commit/344a52c))
