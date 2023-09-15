# Change Log

## 5.1.2

### Patch Changes

- [`409bba45`](https://github.com/LekoArts/gatsby-themes/commit/409bba451d8637d04de2efc8199fa662a2595c68) Thanks [@LekoArts](https://github.com/LekoArts)! - Remove link to my Patreon page. To simplify things I disabled my Patreon. If you want to support my OSS work, please consider using GitHub sponsors or Ko-fi. Thanks!

- Updated dependencies [[`409bba45`](https://github.com/LekoArts/gatsby-themes/commit/409bba451d8637d04de2efc8199fa662a2595c68)]:
  - @lekoarts/gatsby-theme-specimens@6.1.1

## 5.1.1

### Patch Changes

- [#1224](https://github.com/LekoArts/gatsby-themes/pull/1224) [`9be65d4f`](https://github.com/LekoArts/gatsby-themes/commit/9be65d4f39e02082763ffda763cb2537f93acf37) Thanks [@LekoArts](https://github.com/LekoArts)! - Update URLs of deployed example

## 5.1.0

### Minor Changes

- [#1119](https://github.com/LekoArts/gatsby-themes/pull/1119) [`02844608`](https://github.com/LekoArts/gatsby-themes/commit/02844608a2ebcbdbc12d8bba27c795ab350386e6) Thanks [@LekoArts](https://github.com/LekoArts)! - Starting with [Gatsby 5.3](https://www.gatsbyjs.com/docs/reference/release-notes/v5.3/#es-modules-esm-in-gatsby-files) ESM in Gatsby files is supported now! So you can write `gatsby-config.mjs` or `gatsby-node.mjs`.

  Therefore this theme was updated to use ESM for its source code. This shouldn't make a difference for actually using the theme as behavior stays the same. If this is not the case, please open an issue!

  One benefit of now using ESM behind the scenes is that e.g. the `remark-*` packages could be updated to their latest versions (they are ESM-only). Yey for using up-to-date software.

### Patch Changes

- Updated dependencies [[`02844608`](https://github.com/LekoArts/gatsby-themes/commit/02844608a2ebcbdbc12d8bba27c795ab350386e6)]:
  - @lekoarts/gatsby-theme-specimens@6.1.0

## 5.0.0

### Major Changes

- [#1045](https://github.com/LekoArts/gatsby-themes/pull/1045) [`02872400`](https://github.com/LekoArts/gatsby-themes/commit/0287240022c308a7d1fcc8af348ee7d21bca0dd5) Thanks [@LekoArts](https://github.com/LekoArts)! - Update to [Gatsby 5](https://www.gatsbyjs.com/gatsby-5/). [Gatsby 5 Migration Guide](https://gatsbyjs.com/docs/reference/release-notes/migrating-from-v4-to-v5/).

  **Breaking Changes:**

  - Minimal Node.js version 18.0.0
  - Minimal required React version is 18

  For all other breaking changes, refer to the [Gatsby 5 Migration Guide](https://gatsbyjs.com/docs/reference/release-notes/migrating-from-v4-to-v5/).

### Patch Changes

- Updated dependencies [[`02872400`](https://github.com/LekoArts/gatsby-themes/commit/0287240022c308a7d1fcc8af348ee7d21bca0dd5)]:
  - @lekoarts/gatsby-theme-specimens@6.0.0

## 4.0.1

### Patch Changes

- [`fa281b1a`](https://github.com/LekoArts/gatsby-themes/commit/fa281b1a96c04ea625cfb1e138dc08bf2e0043f2) Thanks [@LekoArts](https://github.com/LekoArts)! - Update README information and change some `package.json` details.

- Updated dependencies [[`fa281b1a`](https://github.com/LekoArts/gatsby-themes/commit/fa281b1a96c04ea625cfb1e138dc08bf2e0043f2)]:
  - @lekoarts/gatsby-theme-specimens@5.0.1

## 4.0.0

### Major Changes

[#967](https://github.com/LekoArts/gatsby-themes/pull/967) [`ee969f3`](https://github.com/LekoArts/gatsby-themes/commit/ee969f30037fa99232292014431854773735d0a0)

In preparation for the upcoming [Gatsby 5 release](https://github.com/gatsbyjs/gatsby/discussions/36609) this release will focus on some breaking changes unrelated to the `gatsby` core package. Another new major version will follow once Gatsby 5 is out so that you can upgrade in steps.

**Features:**

- Update [Theme UI](https://theme-ui.com/) from v0.11 to v0.15 ([Theme UI Changelog](https://github.com/system-ui/theme-ui/blob/develop/CHANGELOG.md)) (**Breaking Change**)
- Replace [`react-helmet`](https://github.com/nfl/react-helmet) with [Gatsby Head API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/) (**Breaking Change**)
- Support for colors defined in object notation (previously only array notation)

**Breaking Changes:**

- Any breaking changes from `theme-ui` between v0.11 and v0.15
- Bump `react` & `react-dom` peerDependency to `>=18.0.0`
- Bump `theme-ui` peerDependency to `>=0.15.0`
- Add `@emotion/react` as peerDependency

**Migration:**

- See [Theme UI's migration guide](https://github.com/system-ui/theme-ui/blob/develop/MIGRATING.md)

### Patch Changes

- Updated dependencies [[`ee969f3`](https://github.com/LekoArts/gatsby-themes/commit/ee969f30037fa99232292014431854773735d0a0)]:
  - @lekoarts/gatsby-theme-specimens@5.0.0

## 3.0.1

### Patch Changes

- [#869](https://github.com/LekoArts/gatsby-themes/pull/869) [`dbe1a0e`](https://github.com/LekoArts/gatsby-themes/commit/dbe1a0e854271cc1a8f0694199b323cbe1953c52) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: Update peerDependencies to include React 18

- Updated dependencies [[`dbe1a0e`](https://github.com/LekoArts/gatsby-themes/commit/dbe1a0e854271cc1a8f0694199b323cbe1953c52)]:
  - @lekoarts/gatsby-theme-specimens@4.0.3

## 3.0.0

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

### Patch Changes

- Updated dependencies [[`1598dd6`](https://github.com/LekoArts/gatsby-themes/commit/1598dd660e3ba795b50c4aeb11550806e0b7b6ba)]:
  - @lekoarts/gatsby-theme-specimens@4.0.0

## 2.0.1

### Patch Changes

- [#696](https://github.com/LekoArts/gatsby-themes/pull/696) [`d0b7944`](https://github.com/LekoArts/gatsby-themes/commit/d0b79444bb75631bbbf83db0af21be811f648f60) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: Improve READMEs with more instructions

  Links to changelogs and places to ask questions were added.

- Updated dependencies [[`d0b7944`](https://github.com/LekoArts/gatsby-themes/commit/d0b79444bb75631bbbf83db0af21be811f648f60)]:
  - @lekoarts/gatsby-theme-specimens@3.0.2

## 2.0.0

### Major Changes

[#599](https://github.com/LekoArts/gatsby-themes/pull/599) [`1785dcf`](https://github.com/LekoArts/gatsby-themes/commit/1785dcfad131ab9270c401e6a3bb450f7cb01288) Thanks [@LekoArts](https://github.com/LekoArts)!

### Breaking Changes

1. `peerDependencies` of `theme-ui` v0.9, React v17 and Gatsby v3

#### Migrating

1. Update your packages to the necessary `peerDependency` versions

### Updates to Starter

If you only cloned the starter (https://github.com/LekoArts/gatsby-starter-styleguide) and didn't change anything else this section will be more relevant to you.

- Add `FAST_DEV` flag
- Update to all latest Gatsby (+ plugins) versions
- Update `emotion` from v10 to v11

### Patch Changes

- Updated dependencies [[`1785dcf`](https://github.com/LekoArts/gatsby-themes/commit/1785dcfad131ab9270c401e6a3bb450f7cb01288)]:
  - @lekoarts/gatsby-theme-specimens@3.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.18](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.1.17...@lekoarts/gatsby-theme-styleguide@1.1.18) (2020-11-11)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.1.17](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.1.16...@lekoarts/gatsby-theme-styleguide@1.1.17) (2020-11-02)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.1.16](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.1.15...@lekoarts/gatsby-theme-styleguide@1.1.16) (2020-10-25)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.1.15](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.1.14...@lekoarts/gatsby-theme-styleguide@1.1.15) (2020-10-10)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.1.14](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.1.13...@lekoarts/gatsby-theme-styleguide@1.1.14) (2020-09-25)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.1.13](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.1.12...@lekoarts/gatsby-theme-styleguide@1.1.13) (2020-09-16)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.1.12](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.1.11...@lekoarts/gatsby-theme-styleguide@1.1.12) (2020-09-10)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.1.11](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.1.10...@lekoarts/gatsby-theme-styleguide@1.1.11) (2020-08-27)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.1.10](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.1.9...@lekoarts/gatsby-theme-styleguide@1.1.10) (2020-07-09)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.1.9](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.1.8...@lekoarts/gatsby-theme-styleguide@1.1.9) (2020-07-09)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.1.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.1.7...@lekoarts/gatsby-theme-styleguide@1.1.8) (2020-07-03)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.1.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.1.6...@lekoarts/gatsby-theme-styleguide@1.1.7) (2020-07-02)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.1.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.1.5...@lekoarts/gatsby-theme-styleguide@1.1.6) (2020-06-08)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.1.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.1.4...@lekoarts/gatsby-theme-styleguide@1.1.5) (2020-05-29)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.1.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.1.3...@lekoarts/gatsby-theme-styleguide@1.1.4) (2020-05-12)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.1.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.1.2...@lekoarts/gatsby-theme-styleguide@1.1.3) (2020-05-04)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.1.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.1.1...@lekoarts/gatsby-theme-styleguide@1.1.2) (2020-05-02)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.1.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.1.0...@lekoarts/gatsby-theme-styleguide@1.1.1) (2020-04-28)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

# [1.1.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.0.15...@lekoarts/gatsby-theme-styleguide@1.1.0) (2020-04-27)

### Features

- Update theme-ui to v0.3.x ([#371](https://github.com/LekoArts/gatsby-themes/issues/371)) ([67a05ac](https://github.com/LekoArts/gatsby-themes/commit/67a05ac3e1deaddfe38591739e7f50f56d49d109)), closes [/theme-ui.com/migrating#v03](https://github.com//theme-ui.com/migrating/issues/v03) [#262](https://github.com/LekoArts/gatsby-themes/issues/262)

## [1.0.15](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.0.14...@lekoarts/gatsby-theme-styleguide@1.0.15) (2020-04-24)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.0.14](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.0.13...@lekoarts/gatsby-theme-styleguide@1.0.14) (2020-04-12)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.0.13](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.0.12...@lekoarts/gatsby-theme-styleguide@1.0.13) (2020-04-01)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.0.12](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.0.11...@lekoarts/gatsby-theme-styleguide@1.0.12) (2020-03-31)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.0.11](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.0.10...@lekoarts/gatsby-theme-styleguide@1.0.11) (2020-03-04)

### Bug Fixes

- filterStyles & better checks in Heading ([#291](https://github.com/LekoArts/gatsby-themes/issues/291)) ([1f20d4b](https://github.com/LekoArts/gatsby-themes/commit/1f20d4ba18f6aed253559fc2a99d5333e0272bfd))

## [1.0.10](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.0.9...@lekoarts/gatsby-theme-styleguide@1.0.10) (2020-02-27)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.0.9](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.0.8...@lekoarts/gatsby-theme-styleguide@1.0.9) (2020-02-16)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.0.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.0.7...@lekoarts/gatsby-theme-styleguide@1.0.8) (2020-01-23)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.0.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.0.6...@lekoarts/gatsby-theme-styleguide@1.0.7) (2020-01-18)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.0.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.0.5...@lekoarts/gatsby-theme-styleguide@1.0.6) (2020-01-17)

### Bug Fixes

- Don't use React.FC ([cc1ca59](https://github.com/LekoArts/gatsby-themes/commit/cc1ca59e0bfec5fa17337156468d2e6b27b636b2))

## [1.0.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.0.4...@lekoarts/gatsby-theme-styleguide@1.0.5) (2020-01-06)

### Bug Fixes

- **deps:** update dependency theme-ui to ^0.2.52 ([#214](https://github.com/LekoArts/gatsby-themes/issues/214)) ([504fbd1](https://github.com/LekoArts/gatsby-themes/commit/504fbd18712ca9971cf4af5eaf3343351c994f8e))

## [1.0.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.0.3...@lekoarts/gatsby-theme-styleguide@1.0.4) (2020-01-04)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.0.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.0.2...@lekoarts/gatsby-theme-styleguide@1.0.3) (2020-01-04)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## [1.0.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-styleguide@1.0.1...@lekoarts/gatsby-theme-styleguide@1.0.2) (2019-12-31)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide

## 1.0.1 (2019-12-31)

**Note:** Version bump only for package @lekoarts/gatsby-theme-styleguide
