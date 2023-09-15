# Change Log

## 6.1.1

### Patch Changes

- [`409bba45`](https://github.com/LekoArts/gatsby-themes/commit/409bba451d8637d04de2efc8199fa662a2595c68) Thanks [@LekoArts](https://github.com/LekoArts)! - Remove link to my Patreon page. To simplify things I disabled my Patreon. If you want to support my OSS work, please consider using GitHub sponsors or Ko-fi. Thanks!

## 6.1.0

### Minor Changes

- [#1119](https://github.com/LekoArts/gatsby-themes/pull/1119) [`02844608`](https://github.com/LekoArts/gatsby-themes/commit/02844608a2ebcbdbc12d8bba27c795ab350386e6) Thanks [@LekoArts](https://github.com/LekoArts)! - Starting with [Gatsby 5.3](https://www.gatsbyjs.com/docs/reference/release-notes/v5.3/#es-modules-esm-in-gatsby-files) ESM in Gatsby files is supported now! So you can write `gatsby-config.mjs` or `gatsby-node.mjs`.

  Therefore this theme was updated to use ESM for its source code. This shouldn't make a difference for actually using the theme as behavior stays the same. If this is not the case, please open an issue!

  One benefit of now using ESM behind the scenes is that e.g. the `remark-*` packages could be updated to their latest versions (they are ESM-only). Yey for using up-to-date software.

## 6.0.0

### Major Changes

- [#1045](https://github.com/LekoArts/gatsby-themes/pull/1045) [`02872400`](https://github.com/LekoArts/gatsby-themes/commit/0287240022c308a7d1fcc8af348ee7d21bca0dd5) Thanks [@LekoArts](https://github.com/LekoArts)! - Update to [Gatsby 5](https://www.gatsbyjs.com/gatsby-5/). [Gatsby 5 Migration Guide](https://gatsbyjs.com/docs/reference/release-notes/migrating-from-v4-to-v5/).

  **Breaking Changes:**

  - Minimal Node.js version 18.0.0
  - Minimal required React version is 18

  For all other breaking changes, refer to the [Gatsby 5 Migration Guide](https://gatsbyjs.com/docs/reference/release-notes/migrating-from-v4-to-v5/).

## 5.0.1

### Patch Changes

- [`fa281b1a`](https://github.com/LekoArts/gatsby-themes/commit/fa281b1a96c04ea625cfb1e138dc08bf2e0043f2) Thanks [@LekoArts](https://github.com/LekoArts)! - Update README information and change some `package.json` details.

## 5.0.0

### Major Changes

[#967](https://github.com/LekoArts/gatsby-themes/pull/967) [`ee969f3`](https://github.com/LekoArts/gatsby-themes/commit/ee969f30037fa99232292014431854773735d0a0)

In preparation for the upcoming [Gatsby 5 release](https://github.com/gatsbyjs/gatsby/discussions/36609) this release will focus on some breaking changes unrelated to the `gatsby` core package. Another new major version will follow once Gatsby 5 is out so that you can upgrade in steps.

**Features:**

- Support for colors defined in object notation (previously only array notation)

**Breaking Changes:**

- Bump `react` & `react-dom` peerDependency to `>=18.0.0`
- Bump `theme-ui` peerDependency to `>=0.15.0`

**Migration:**

- See [Theme UI's migration guide](https://github.com/system-ui/theme-ui/blob/develop/MIGRATING.md)

## 4.0.4

### Patch Changes

- [#882](https://github.com/LekoArts/gatsby-themes/pull/882) [`67f9529`](https://github.com/LekoArts/gatsby-themes/commit/67f9529530aa20f7f44c82ffd140c92c22a7adc0) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency polished to ^4.2.2 for gatsby-theme-specimens

## 4.0.3

### Patch Changes

- [#869](https://github.com/LekoArts/gatsby-themes/pull/869) [`dbe1a0e`](https://github.com/LekoArts/gatsby-themes/commit/dbe1a0e854271cc1a8f0694199b323cbe1953c52) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: Update peerDependencies to include React 18

## 4.0.2

### Patch Changes

- [#840](https://github.com/LekoArts/gatsby-themes/pull/840) [`a0f89bf`](https://github.com/LekoArts/gatsby-themes/commit/a0f89bf52223e0e3a2aad061a7499f1e148d5e70) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency chroma-js to ^2.4.2 for gatsby-theme-specimens

## 4.0.1

### Patch Changes

- [#813](https://github.com/LekoArts/gatsby-themes/pull/813) [`15239c8`](https://github.com/LekoArts/gatsby-themes/commit/15239c8ee63d4b06b0f971136d01f0affd6a0740) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-specimens

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

**Migration:**

- If you used Theme UI in custom components, check the [Theme UI changelog](https://github.com/system-ui/theme-ui/blob/develop/CHANGELOG.md)
- Update CI/local environment to account for the new Node.js requirement

## 3.0.2

### Patch Changes

- [#696](https://github.com/LekoArts/gatsby-themes/pull/696) [`d0b7944`](https://github.com/LekoArts/gatsby-themes/commit/d0b79444bb75631bbbf83db0af21be811f648f60) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: Improve READMEs with more instructions

  Links to changelogs and places to ask questions were added.

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

## 3.0.0

### Major Changes

[#599](https://github.com/LekoArts/gatsby-themes/pull/599) [`1785dcf`](https://github.com/LekoArts/gatsby-themes/commit/1785dcfad131ab9270c401e6a3bb450f7cb01288) Thanks [@LekoArts](https://github.com/LekoArts)!

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

## 2.3.10

### Patch Changes

- [`47f747e`](https://github.com/LekoArts/gatsby-themes/commit/47f747e045962996503bf4043b0adc5a2527a855) [#559](https://github.com/LekoArts/gatsby-themes/pull/559) Thanks [@renovate](https://github.com/apps/renovate)! - Dependency updates for various packages, including theme-ui and gatsby related packages (includes improvements for `gatsby-plugin-image`)

## 2.3.9

### Patch Changes

- [`9d25527`](https://github.com/LekoArts/gatsby-themes/commit/9d25527cf2372d24682d85c44ecca02675019774) [#551](https://github.com/LekoArts/gatsby-themes/pull/551) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update packages

  You can see the details of the update here: https://github.com/LekoArts/gatsby-themes/pull/551

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.3.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.3.7...@lekoarts/gatsby-theme-specimens@2.3.8) (2020-11-11)

**Note:** Version bump only for package @lekoarts/gatsby-theme-specimens

## [2.3.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.3.6...@lekoarts/gatsby-theme-specimens@2.3.7) (2020-11-02)

**Note:** Version bump only for package @lekoarts/gatsby-theme-specimens

## [2.3.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.3.5...@lekoarts/gatsby-theme-specimens@2.3.6) (2020-10-25)

### Bug Fixes

- **deps:** update packages ([#510](https://github.com/LekoArts/gatsby-themes/issues/510)) ([06ecc65](https://github.com/LekoArts/gatsby-themes/commit/06ecc65b784e8fd27d5354761211df14f7a72749))

## [2.3.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.3.4...@lekoarts/gatsby-theme-specimens@2.3.5) (2020-10-10)

**Note:** Version bump only for package @lekoarts/gatsby-theme-specimens

## [2.3.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.3.3...@lekoarts/gatsby-theme-specimens@2.3.4) (2020-09-25)

### Bug Fixes

- **deps:** update packages ([#490](https://github.com/LekoArts/gatsby-themes/issues/490)) ([b3af934](https://github.com/LekoArts/gatsby-themes/commit/b3af934ac68b4f9fb7492cc3da7707392325175b))

## [2.3.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.3.2...@lekoarts/gatsby-theme-specimens@2.3.3) (2020-09-16)

### Bug Fixes

- **deps:** update packages ([#484](https://github.com/LekoArts/gatsby-themes/issues/484)) ([006cdc4](https://github.com/LekoArts/gatsby-themes/commit/006cdc4b8623595b14f6571fe694671a77a6a9dc))

## [2.3.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.3.1...@lekoarts/gatsby-theme-specimens@2.3.2) (2020-09-10)

### Bug Fixes

- **deps:** update packages ([#481](https://github.com/LekoArts/gatsby-themes/issues/481)) ([cf206a2](https://github.com/LekoArts/gatsby-themes/commit/cf206a241867ede738be2b3a1b856ec3e85c010e))

## [2.3.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.3.0...@lekoarts/gatsby-theme-specimens@2.3.1) (2020-08-27)

### Bug Fixes

- **deps:** update packages ([#458](https://github.com/LekoArts/gatsby-themes/issues/458)) ([dcfb106](https://github.com/LekoArts/gatsby-themes/commit/dcfb1060ee90a928ae28840906b6f3b706218ad8))
- **deps:** update packages ([#461](https://github.com/LekoArts/gatsby-themes/issues/461)) ([6e4e35e](https://github.com/LekoArts/gatsby-themes/commit/6e4e35e21b502a9a3b9305785b372f03a7741ce7))

# [2.3.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.2.8...@lekoarts/gatsby-theme-specimens@2.3.0) (2020-07-09)

### Features

- Add bundle-analyzer and lazy-load react-live ([#450](https://github.com/LekoArts/gatsby-themes/issues/450)) ([667fd33](https://github.com/LekoArts/gatsby-themes/commit/667fd33ce6af546cf2250af1e22395a26f45d6a2))

## [2.2.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.2.7...@lekoarts/gatsby-theme-specimens@2.2.8) (2020-07-09)

**Note:** Version bump only for package @lekoarts/gatsby-theme-specimens

## [2.2.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.2.6...@lekoarts/gatsby-theme-specimens@2.2.7) (2020-07-03)

### Bug Fixes

- **deps:** update packages ([#437](https://github.com/LekoArts/gatsby-themes/issues/437)) ([5e27caf](https://github.com/LekoArts/gatsby-themes/commit/5e27caf74c2eae0e7c158fa5a15bd52ae2069ee7))
- Set default values and replace defaultProps ([#436](https://github.com/LekoArts/gatsby-themes/issues/436)) ([d62857f](https://github.com/LekoArts/gatsby-themes/commit/d62857ffd1d2d97cfa31cb6ca37cb39db48467d0))

## [2.2.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.2.5...@lekoarts/gatsby-theme-specimens@2.2.6) (2020-07-02)

### Bug Fixes

- **deps:** update packages ([#429](https://github.com/LekoArts/gatsby-themes/issues/429)) ([f25dfb6](https://github.com/LekoArts/gatsby-themes/commit/f25dfb6105669f62468abc63ceb73c2fbbb73065))

## [2.2.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.2.4...@lekoarts/gatsby-theme-specimens@2.2.5) (2020-06-08)

### Bug Fixes

- **deps:** update packages ([#408](https://github.com/LekoArts/gatsby-themes/issues/408)) ([11b89ad](https://github.com/LekoArts/gatsby-themes/commit/11b89ad8bb0a59dc3fe95941bca57d83a1716e80))

## [2.2.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.2.3...@lekoarts/gatsby-theme-specimens@2.2.4) (2020-05-29)

### Bug Fixes

- **deps:** update packages ([#403](https://github.com/LekoArts/gatsby-themes/issues/403)) ([4275401](https://github.com/LekoArts/gatsby-themes/commit/427540138f6c8687dfff4163679a222ba5d49c8f))

## [2.2.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.2.2...@lekoarts/gatsby-theme-specimens@2.2.3) (2020-05-12)

**Note:** Version bump only for package @lekoarts/gatsby-theme-specimens

## [2.2.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.2.1...@lekoarts/gatsby-theme-specimens@2.2.2) (2020-05-04)

### Bug Fixes

- **deps:** update packages ([#394](https://github.com/LekoArts/gatsby-themes/issues/394)) ([c047fce](https://github.com/LekoArts/gatsby-themes/commit/c047fce748e9c85604a5fb2f104918d455b96580))

## [2.2.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.2.0...@lekoarts/gatsby-theme-specimens@2.2.1) (2020-04-28)

### Bug Fixes

- **deps:** update gatsby ([#378](https://github.com/LekoArts/gatsby-themes/issues/378)) ([8238565](https://github.com/LekoArts/gatsby-themes/commit/82385658f18c983b4ca4d83233660e9f4492a4a9))

# [2.2.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.1.8...@lekoarts/gatsby-theme-specimens@2.2.0) (2020-04-27)

### Features

- Update theme-ui to v0.3.x ([#371](https://github.com/LekoArts/gatsby-themes/issues/371)) ([67a05ac](https://github.com/LekoArts/gatsby-themes/commit/67a05ac3e1deaddfe38591739e7f50f56d49d109)), closes [/theme-ui.com/migrating#v03](https://github.com//theme-ui.com/migrating/issues/v03) [#262](https://github.com/LekoArts/gatsby-themes/issues/262)

## [2.1.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.1.7...@lekoarts/gatsby-theme-specimens@2.1.8) (2020-04-24)

### Bug Fixes

- **deps:** update dependency polished to ^3.5.2 ([#363](https://github.com/LekoArts/gatsby-themes/issues/363)) ([f66e5ef](https://github.com/LekoArts/gatsby-themes/commit/f66e5ef942a22b626a8ea6a01e98189e27cb7968))
- **deps:** update gatsby ([#364](https://github.com/LekoArts/gatsby-themes/issues/364)) ([aac08a8](https://github.com/LekoArts/gatsby-themes/commit/aac08a809b86de28f78d2db95dc5651a0a8e640b))

## [2.1.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.1.6...@lekoarts/gatsby-theme-specimens@2.1.7) (2020-04-12)

**Note:** Version bump only for package @lekoarts/gatsby-theme-specimens

## [2.1.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.1.5...@lekoarts/gatsby-theme-specimens@2.1.6) (2020-04-01)

**Note:** Version bump only for package @lekoarts/gatsby-theme-specimens

## [2.1.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.1.4...@lekoarts/gatsby-theme-specimens@2.1.5) (2020-03-31)

### Bug Fixes

- **deps:** update dependency polished to ^3.5.1 ([#318](https://github.com/LekoArts/gatsby-themes/issues/318)) ([5e92c6a](https://github.com/LekoArts/gatsby-themes/commit/5e92c6accdb588d41cf19708c97e1a8b5eee4a47))
- **deps:** update gatsby ([#305](https://github.com/LekoArts/gatsby-themes/issues/305)) ([f3a5e36](https://github.com/LekoArts/gatsby-themes/commit/f3a5e369b6ce1e3b6c046287fe0c1511fa9db758))
- **deps:** update gatsby ([#312](https://github.com/LekoArts/gatsby-themes/issues/312)) ([5a93a50](https://github.com/LekoArts/gatsby-themes/commit/5a93a509d33cc1738de8cfb54a1690ae8dba3151))
- **deps:** update gatsby ([#319](https://github.com/LekoArts/gatsby-themes/issues/319)) ([b7c3dcd](https://github.com/LekoArts/gatsby-themes/commit/b7c3dcdfd54a3cd8291b3dca3868be2af738c1a5))
- **deps:** update gatsby ([#330](https://github.com/LekoArts/gatsby-themes/issues/330)) ([af9b834](https://github.com/LekoArts/gatsby-themes/commit/af9b834102b2e15689557c861f83902b3cb2a728))

## [2.1.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.1.3...@lekoarts/gatsby-theme-specimens@2.1.4) (2020-03-04)

### Bug Fixes

- filterStyles & better checks in Heading ([#291](https://github.com/LekoArts/gatsby-themes/issues/291)) ([1f20d4b](https://github.com/LekoArts/gatsby-themes/commit/1f20d4ba18f6aed253559fc2a99d5333e0272bfd))
- **deps:** update dependency @emotion/core to ^10.0.28 ([#296](https://github.com/LekoArts/gatsby-themes/issues/296)) ([8f92e72](https://github.com/LekoArts/gatsby-themes/commit/8f92e726a198026e1aa7917ab1161a941e166dbe))
- **deps:** update gatsby ([#298](https://github.com/LekoArts/gatsby-themes/issues/298)) ([a904526](https://github.com/LekoArts/gatsby-themes/commit/a904526aed9c86fa291866fc85f0d0bca11112b6))

## [2.1.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.1.2...@lekoarts/gatsby-theme-specimens@2.1.3) (2020-02-27)

### Bug Fixes

- **deps:** update dependency @styled-system/css to ^5.1.5 ([#287](https://github.com/LekoArts/gatsby-themes/issues/287)) ([7a4385d](https://github.com/LekoArts/gatsby-themes/commit/7a4385dfcd1765d82ebb0371134462e45047f4ff))

## [2.1.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.1.1...@lekoarts/gatsby-theme-specimens@2.1.2) (2020-02-16)

### Bug Fixes

- **deps:** update dependency polished to ^3.4.4 ([#247](https://github.com/LekoArts/gatsby-themes/issues/247)) ([850669a](https://github.com/LekoArts/gatsby-themes/commit/850669a7aae2e8f6199f99266e13da79ddf081c6))
- **deps:** update gatsby ([#260](https://github.com/LekoArts/gatsby-themes/issues/260)) ([5a779f3](https://github.com/LekoArts/gatsby-themes/commit/5a779f32d548e0f4cfb63f6534f81c949123fa67))

## [2.1.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.1.0...@lekoarts/gatsby-theme-specimens@2.1.1) (2020-01-23)

### Bug Fixes

- Various fixes about TypeScript, typos, comments ([#235](https://github.com/LekoArts/gatsby-themes/issues/235)) ([2a429c2](https://github.com/LekoArts/gatsby-themes/commit/2a429c2c49ed7a07ec231248372929bb2f18ab91))

# [2.1.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.0.5...@lekoarts/gatsby-theme-specimens@2.1.0) (2020-01-18)

### Features

- Add previewText prop ([#226](https://github.com/LekoArts/gatsby-themes/issues/226)) ([ccb321c](https://github.com/LekoArts/gatsby-themes/commit/ccb321c8e1bc062fde513dd24dc1d1c345456147))

## [2.0.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.0.4...@lekoarts/gatsby-theme-specimens@2.0.5) (2020-01-17)

### Bug Fixes

- **deps:** update gatsby ([#224](https://github.com/LekoArts/gatsby-themes/issues/224)) ([b8c544a](https://github.com/LekoArts/gatsby-themes/commit/b8c544a0172180b246cd17c3385dc8e55efef981))

## [2.0.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.0.3...@lekoarts/gatsby-theme-specimens@2.0.4) (2020-01-04)

### Bug Fixes

- Stable sort for normalizeThemeUIColors ([e8e3f01](https://github.com/LekoArts/gatsby-themes/commit/e8e3f0189b79acf3add5ed6dca4c65b7d3c2d83c))

## [2.0.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.0.2...@lekoarts/gatsby-theme-specimens@2.0.3) (2020-01-04)

### Bug Fixes

- Various styling issues in different browsers ([#210](https://github.com/LekoArts/gatsby-themes/issues/210)) ([a4ce528](https://github.com/LekoArts/gatsby-themes/commit/a4ce528151c3ef227beec66162804d6ed88dd33b))

## [2.0.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.0.1...@lekoarts/gatsby-theme-specimens@2.0.2) (2019-12-31)

**Note:** Version bump only for package @lekoarts/gatsby-theme-specimens

## [2.0.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@2.0.0...@lekoarts/gatsby-theme-specimens@2.0.1) (2019-12-31)

### Bug Fixes

- **deps:** update dependency @styled-system/css to ^5.1.4 ([#190](https://github.com/LekoArts/gatsby-themes/issues/190)) ([3bd65c0](https://github.com/LekoArts/gatsby-themes/commit/3bd65c0f6c763e0e5d6ccd8e2b22d1f50bb45e85))
- **deps:** update emotion monorepo to ^10.0.27 ([#196](https://github.com/LekoArts/gatsby-themes/issues/196)) ([53f019e](https://github.com/LekoArts/gatsby-themes/commit/53f019ed5e0718367dcb2458480f42795cfa4efe))
- **deps:** update gatsby ([#192](https://github.com/LekoArts/gatsby-themes/issues/192)) ([77916ac](https://github.com/LekoArts/gatsby-themes/commit/77916acb51169bbc2e79af70d0b5ee93d1592a2f))
- **deps:** update theme ui ([#199](https://github.com/LekoArts/gatsby-themes/issues/199)) ([47bb84a](https://github.com/LekoArts/gatsby-themes/commit/47bb84a5b8da618e8b083632493c97a91c442a89))

# [2.0.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@1.0.14...@lekoarts/gatsby-theme-specimens@2.0.0) (2019-12-07)

- **BREAKING:** Don't use `gatsby-plugin-theme-ui` for the Specimens theme but a local file. So that a global Theme UI config of the site doesn't affect the styling of the components. However, the local theme file is just the Theme UI Tailwind preset and can be shadowed. ([#184](https://github.com/LekoArts/gatsby-themes/pull/184))

## [1.0.14](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@1.0.13...@lekoarts/gatsby-theme-specimens@1.0.14) (2019-12-03)

### Bug Fixes

- **deps:** update gatsby ([#178](https://github.com/LekoArts/gatsby-themes/issues/178)) ([6ede2c3](https://github.com/LekoArts/gatsby-themes/commit/6ede2c3654f5baa6f1c53f5bb73d046fc257c0af))

## [1.0.13](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@1.0.12...@lekoarts/gatsby-theme-specimens@1.0.13) (2019-11-25)

### Bug Fixes

- **deps:** update gatsby ([#166](https://github.com/LekoArts/gatsby-themes/issues/166)) ([8b5cd32](https://github.com/LekoArts/gatsby-themes/commit/8b5cd32222495e1433b6c508697b1853ba99b939))
- **deps:** update theme ui ([#158](https://github.com/LekoArts/gatsby-themes/issues/158)) ([ef07342](https://github.com/LekoArts/gatsby-themes/commit/ef07342deed95faf403f3ce07fe5b2a8f9996ef0))

## [1.0.12](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@1.0.11...@lekoarts/gatsby-theme-specimens@1.0.12) (2019-11-16)

### Bug Fixes

- **deps:** update gatsby ([#149](https://github.com/LekoArts/gatsby-themes/issues/149)) ([307df50](https://github.com/LekoArts/gatsby-themes/commit/307df50))

## [1.0.11](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@1.0.10...@lekoarts/gatsby-theme-specimens@1.0.11) (2019-11-04)

### Bug Fixes

- **deps:** update dependency chroma-js to ^2.1.0 ([#134](https://github.com/LekoArts/gatsby-themes/issues/134)) ([310671e](https://github.com/LekoArts/gatsby-themes/commit/310671e))
- **deps:** update dependency polished to ^3.4.2 ([#135](https://github.com/LekoArts/gatsby-themes/issues/135)) ([ec6a2dd](https://github.com/LekoArts/gatsby-themes/commit/ec6a2dd))
- **deps:** update dependency theme-ui to ^0.2.46 ([#136](https://github.com/LekoArts/gatsby-themes/issues/136)) ([328eedd](https://github.com/LekoArts/gatsby-themes/commit/328eedd))

## [1.0.10](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@1.0.9...@lekoarts/gatsby-theme-specimens@1.0.10) (2019-10-31)

### Bug Fixes

- **deps:** update emotion monorepo to ^10.0.22 ([#125](https://github.com/LekoArts/gatsby-themes/issues/125)) ([7e5eb60](https://github.com/LekoArts/gatsby-themes/commit/7e5eb60))

## [1.0.9](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@1.0.8...@lekoarts/gatsby-theme-specimens@1.0.9) (2019-10-17)

### Bug Fixes

- **deps:** update gatsby ([#112](https://github.com/LekoArts/gatsby-themes/issues/112)) ([24dcb25](https://github.com/LekoArts/gatsby-themes/commit/24dcb25))
- **deps:** update mdx to ^1.5.1 ([#113](https://github.com/LekoArts/gatsby-themes/issues/113)) ([31276f9](https://github.com/LekoArts/gatsby-themes/commit/31276f9))
- **deps:** update theme ui to ^0.2.44 ([#114](https://github.com/LekoArts/gatsby-themes/issues/114)) ([13e0a45](https://github.com/LekoArts/gatsby-themes/commit/13e0a45))

## [1.0.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@1.0.7...@lekoarts/gatsby-theme-specimens@1.0.8) (2019-10-11)

### Bug Fixes

- **deps:** update dependency @emotion/core to ^10.0.21 ([#104](https://github.com/LekoArts/gatsby-themes/issues/104)) ([d3b29a9](https://github.com/LekoArts/gatsby-themes/commit/d3b29a9))
- **deps:** update gatsby ([#105](https://github.com/LekoArts/gatsby-themes/issues/105)) ([b345ce0](https://github.com/LekoArts/gatsby-themes/commit/b345ce0))
- **deps:** update gatsby ([#98](https://github.com/LekoArts/gatsby-themes/issues/98)) ([ea669d1](https://github.com/LekoArts/gatsby-themes/commit/ea669d1))
- **deps:** update mdx to ^1.5.0 ([#99](https://github.com/LekoArts/gatsby-themes/issues/99)) ([76c4a9a](https://github.com/LekoArts/gatsby-themes/commit/76c4a9a))

## [1.0.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@1.0.6...@lekoarts/gatsby-theme-specimens@1.0.7) (2019-09-24)

### Bug Fixes

- **deps:** update gatsby ([#89](https://github.com/LekoArts/gatsby-themes/issues/89)) ([94be8d9](https://github.com/LekoArts/gatsby-themes/commit/94be8d9))
- **deps:** update theme ui to ^0.2.43 ([#90](https://github.com/LekoArts/gatsby-themes/issues/90)) ([eac0272](https://github.com/LekoArts/gatsby-themes/commit/eac0272))

## [1.0.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@1.0.5...@lekoarts/gatsby-theme-specimens@1.0.6) (2019-09-16)

### Bug Fixes

- **deps:** update gatsby ([#82](https://github.com/LekoArts/gatsby-themes/issues/82)) ([283ef30](https://github.com/LekoArts/gatsby-themes/commit/283ef30))
- **deps:** update mdx to ^1.4.5 ([#83](https://github.com/LekoArts/gatsby-themes/issues/83)) ([4ee0644](https://github.com/LekoArts/gatsby-themes/commit/4ee0644))
- **deps:** update theme ui to ^0.2.42 ([#84](https://github.com/LekoArts/gatsby-themes/issues/84)) ([931c598](https://github.com/LekoArts/gatsby-themes/commit/931c598))

## [1.0.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@1.0.4...@lekoarts/gatsby-theme-specimens@1.0.5) (2019-09-09)

### Bug Fixes

- **deps:** update mdx to ^1.4.4 ([#74](https://github.com/LekoArts/gatsby-themes/issues/74)) ([b28517b](https://github.com/LekoArts/gatsby-themes/commit/b28517b))
- **deps:** update theme ui ([#75](https://github.com/LekoArts/gatsby-themes/issues/75)) ([f76ddba](https://github.com/LekoArts/gatsby-themes/commit/f76ddba))

## [1.0.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@1.0.3...@lekoarts/gatsby-theme-specimens@1.0.4) (2019-09-02)

### Bug Fixes

- **deps:** update dependency chroma-js to ^2.0.6 ([#63](https://github.com/LekoArts/gatsby-themes/issues/63)) ([b8add54](https://github.com/LekoArts/gatsby-themes/commit/b8add54))
- **deps:** update emotion monorepo to ^10.0.17 ([#64](https://github.com/LekoArts/gatsby-themes/issues/64)) ([34041e8](https://github.com/LekoArts/gatsby-themes/commit/34041e8))
- **deps:** update mdx to ^1.4.0 ([#65](https://github.com/LekoArts/gatsby-themes/issues/65)) ([5d37985](https://github.com/LekoArts/gatsby-themes/commit/5d37985))

## [1.0.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@1.0.2...@lekoarts/gatsby-theme-specimens@1.0.3) (2019-08-29)

**Note:** Version bump only for package @lekoarts/gatsby-theme-specimens

## [1.0.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-specimens@1.0.1...@lekoarts/gatsby-theme-specimens@1.0.2) (2019-08-20)

### Bug Fixes

- **deps:** update dependency @emotion/core to ^10.0.16 ([#41](https://github.com/LekoArts/gatsby-themes/issues/41)) ([074a79b](https://github.com/LekoArts/gatsby-themes/commit/074a79b))
- **deps:** update theme ui ([#44](https://github.com/LekoArts/gatsby-themes/issues/44)) ([81a7f6c](https://github.com/LekoArts/gatsby-themes/commit/81a7f6c))
- Dependency & renovate updates ([#48](https://github.com/LekoArts/gatsby-themes/issues/48)) ([208cc23](https://github.com/LekoArts/gatsby-themes/commit/208cc23))

## 1.0.1 (2019-08-19)

### Features

- Add gatsby-theme-specimens ([#40](https://github.com/LekoArts/gatsby-themes/issues/40)) ([5bc5d7f](https://github.com/LekoArts/gatsby-themes/commit/5bc5d7f))
