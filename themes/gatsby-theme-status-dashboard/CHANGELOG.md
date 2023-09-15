# Change Log

## 5.1.2

### Patch Changes

- [`409bba45`](https://github.com/LekoArts/gatsby-themes/commit/409bba451d8637d04de2efc8199fa662a2595c68) Thanks [@LekoArts](https://github.com/LekoArts)! - Remove link to my Patreon page. To simplify things I disabled my Patreon. If you want to support my OSS work, please consider using GitHub sponsors or Ko-fi. Thanks!

## 5.1.1

### Patch Changes

- [#1140](https://github.com/LekoArts/gatsby-themes/pull/1140) [`49a98338`](https://github.com/LekoArts/gatsby-themes/commit/49a98338b0daf8e137c4d20298ae848a50b8d449) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-status-dashboard

## 5.1.0

### Minor Changes

- [#1119](https://github.com/LekoArts/gatsby-themes/pull/1119) [`02844608`](https://github.com/LekoArts/gatsby-themes/commit/02844608a2ebcbdbc12d8bba27c795ab350386e6) Thanks [@LekoArts](https://github.com/LekoArts)! - Starting with [Gatsby 5.3](https://www.gatsbyjs.com/docs/reference/release-notes/v5.3/#es-modules-esm-in-gatsby-files) ESM in Gatsby files is supported now! So you can write `gatsby-config.mjs` or `gatsby-node.mjs`.

  Therefore this theme was updated to use ESM for its source code. This shouldn't make a difference for actually using the theme as behavior stays the same. If this is not the case, please open an issue!

  One benefit of now using ESM behind the scenes is that e.g. the `remark-*` packages could be updated to their latest versions (they are ESM-only). Yey for using up-to-date software.

## 5.0.3

### Patch Changes

- [`cbd0687a`](https://github.com/LekoArts/gatsby-themes/commit/cbd0687ac06640da36248d57904944824508a5a8) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Add missing `@mdx-js/react` dependency

## 5.0.2

### Patch Changes

- [#1051](https://github.com/LekoArts/gatsby-themes/pull/1051) [`4facf3d1`](https://github.com/LekoArts/gatsby-themes/commit/4facf3d1e45c8db320050607dd84a0c4a4a74a62) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Use minor pin and update to 0.15.4

- [#1053](https://github.com/LekoArts/gatsby-themes/pull/1053) [`c331d005`](https://github.com/LekoArts/gatsby-themes/commit/c331d005fd1e90ea857554930b8a8e4bf7892626) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Switch from `@theme-ui/presets` to individual preset (e.g. `@theme-ui/preset-tailwind`)

## 5.0.1

### Patch Changes

- [`b9148840`](https://github.com/LekoArts/gatsby-themes/commit/b91488404155c7a1965837d807c372131b68f6a0) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Pin @theme-ui/presets to 0.15.3 as 0.15.4 was a breaking change

## 5.0.0

### Major Changes

- [#1045](https://github.com/LekoArts/gatsby-themes/pull/1045) [`02872400`](https://github.com/LekoArts/gatsby-themes/commit/0287240022c308a7d1fcc8af348ee7d21bca0dd5) Thanks [@LekoArts](https://github.com/LekoArts)! - Update to [Gatsby 5](https://www.gatsbyjs.com/gatsby-5/). [Gatsby 5 Migration Guide](https://gatsbyjs.com/docs/reference/release-notes/migrating-from-v4-to-v5/).

  **Breaking Changes:**

  - Minimal Node.js version 18.0.0
  - Minimal required React version is 18

  For all other breaking changes, refer to the [Gatsby 5 Migration Guide](https://gatsbyjs.com/docs/reference/release-notes/migrating-from-v4-to-v5/).

## 4.0.2

### Patch Changes

- [#1029](https://github.com/LekoArts/gatsby-themes/pull/1029) [`6d07da3e`](https://github.com/LekoArts/gatsby-themes/commit/6d07da3e1228bf6a13105489f1b005aaaceeb2d1) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency @emotion/react to ^11.10.5 for gatsby-theme-status-dashboard

- [#1043](https://github.com/LekoArts/gatsby-themes/pull/1043) [`5ddaf82f`](https://github.com/LekoArts/gatsby-themes/commit/5ddaf82fc5e7643b841b60028bd7c566b6f9528f) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update theme-ui to ^0.15.3

## 4.0.1

### Patch Changes

- [`fa281b1a`](https://github.com/LekoArts/gatsby-themes/commit/fa281b1a96c04ea625cfb1e138dc08bf2e0043f2) Thanks [@LekoArts](https://github.com/LekoArts)! - Update README information and change some `package.json` details.

## 4.0.0

### Major Changes

[#967](https://github.com/LekoArts/gatsby-themes/pull/967) [`ee969f3`](https://github.com/LekoArts/gatsby-themes/commit/ee969f30037fa99232292014431854773735d0a0)

In preparation for the upcoming [Gatsby 5 release](https://github.com/gatsbyjs/gatsby/discussions/36609) this release will focus on some breaking changes unrelated to the `gatsby` core package. Another new major version will follow once Gatsby 5 is out so that you can upgrade in steps.

**Features:**

- Update [Theme UI](https://theme-ui.com/) from v0.11 to v0.15 ([Theme UI Changelog](https://github.com/system-ui/theme-ui/blob/develop/CHANGELOG.md)) (**Breaking Change**)

**Breaking Changes:**

- Any breaking changes from `theme-ui` between v0.11 and v0.15
- Bump `react` & `react-dom` peerDependency to `>=18.0.0`

**Migration:**

- See [Theme UI's migration guide](https://github.com/system-ui/theme-ui/blob/develop/MIGRATING.md)

## 3.0.1

### Patch Changes

- [#869](https://github.com/LekoArts/gatsby-themes/pull/869) [`dbe1a0e`](https://github.com/LekoArts/gatsby-themes/commit/dbe1a0e854271cc1a8f0694199b323cbe1953c52) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: Update peerDependencies to include React 18

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

Moreover, the `<Grid>` and `<Card>` components and their props had breaking changes.

The Card component now takes these props:

```ts
type Props = {
  name: string;
  netlify_id?: string;
  website?: string;
  repo: string;
  netlify?: boolean;
  circleci?: boolean;
  circleci_id?: string;
};
```

The Grid component now normalized the entries from Netlify and CircleCI and merges them together. Current behavior is that a card will render when the site is on Netlify and then optionally the CircleCI information is added. New behavior is that also entries are shown that are only on CircleCI.

**Migration:**

- If you used Theme UI in custom components, check the [Theme UI changelog](https://github.com/system-ui/theme-ui/blob/develop/CHANGELOG.md)
- Update CI/local environment to account for the new Node.js requirement

## 2.0.1

### Patch Changes

- [#696](https://github.com/LekoArts/gatsby-themes/pull/696) [`d0b7944`](https://github.com/LekoArts/gatsby-themes/commit/d0b79444bb75631bbbf83db0af21be811f648f60) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: Improve READMEs with more instructions

  Links to changelogs and places to ask questions were added.

## 2.0.0

### Major Changes

[#599](https://github.com/LekoArts/gatsby-themes/pull/599) [`1785dcf`](https://github.com/LekoArts/gatsby-themes/commit/1785dcfad131ab9270c401e6a3bb450f7cb01288) Thanks [@LekoArts](https://github.com/LekoArts)!

### Breaking Changes

1. Removed `gatsby-plugin-typescript`
1. Updating `theme-ui` from v0.3 to v0.9 and thus also `emotion` from v10 to v11

#### Migrating

1. The TypeScript plugin isn't necessary anymore with Gatsby v3
1. The changelog/migration guide for `theme-ui` is here: https://theme-ui.com/migrating and for `emotion` here: https://emotion.sh/docs/emotion-11

### Improvements

- Performance improvements from `theme-ui` upgrade

### Updates to Starter

If you only cloned the starter (https://github.com/LekoArts/gatsby-status-dashboard) and didn't change anything else this section will be more relevant to you.

- Add `FAST_DEV` flag
- Update to all latest Gatsby (+ plugins) versions
- Update `emotion` from v10 to v11

## 1.1.16

### Patch Changes

- [`47f747e`](https://github.com/LekoArts/gatsby-themes/commit/47f747e045962996503bf4043b0adc5a2527a855) [#559](https://github.com/LekoArts/gatsby-themes/pull/559) Thanks [@renovate](https://github.com/apps/renovate)! - Dependency updates for various packages, including theme-ui and gatsby related packages (includes improvements for `gatsby-plugin-image`)

## 1.1.15

### Patch Changes

- [`9d25527`](https://github.com/LekoArts/gatsby-themes/commit/9d25527cf2372d24682d85c44ecca02675019774) [#551](https://github.com/LekoArts/gatsby-themes/pull/551) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update packages

  You can see the details of the update here: https://github.com/LekoArts/gatsby-themes/pull/551

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.14](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.1.13...@lekoarts/gatsby-theme-status-dashboard@1.1.14) (2020-11-11)

**Note:** Version bump only for package @lekoarts/gatsby-theme-status-dashboard

## [1.1.13](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.1.12...@lekoarts/gatsby-theme-status-dashboard@1.1.13) (2020-11-02)

**Note:** Version bump only for package @lekoarts/gatsby-theme-status-dashboard

## [1.1.12](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.1.11...@lekoarts/gatsby-theme-status-dashboard@1.1.12) (2020-10-25)

### Bug Fixes

- **deps:** update packages ([#510](https://github.com/LekoArts/gatsby-themes/issues/510)) ([06ecc65](https://github.com/LekoArts/gatsby-themes/commit/06ecc65b784e8fd27d5354761211df14f7a72749))

## [1.1.11](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.1.10...@lekoarts/gatsby-theme-status-dashboard@1.1.11) (2020-10-10)

**Note:** Version bump only for package @lekoarts/gatsby-theme-status-dashboard

## [1.1.10](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.1.9...@lekoarts/gatsby-theme-status-dashboard@1.1.10) (2020-09-16)

### Bug Fixes

- **deps:** update packages ([#484](https://github.com/LekoArts/gatsby-themes/issues/484)) ([006cdc4](https://github.com/LekoArts/gatsby-themes/commit/006cdc4b8623595b14f6571fe694671a77a6a9dc))

## [1.1.9](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.1.8...@lekoarts/gatsby-theme-status-dashboard@1.1.9) (2020-08-27)

### Bug Fixes

- **deps:** update packages ([#458](https://github.com/LekoArts/gatsby-themes/issues/458)) ([dcfb106](https://github.com/LekoArts/gatsby-themes/commit/dcfb1060ee90a928ae28840906b6f3b706218ad8))
- **deps:** update packages ([#461](https://github.com/LekoArts/gatsby-themes/issues/461)) ([6e4e35e](https://github.com/LekoArts/gatsby-themes/commit/6e4e35e21b502a9a3b9305785b372f03a7741ce7))

## [1.1.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.1.7...@lekoarts/gatsby-theme-status-dashboard@1.1.8) (2020-07-09)

**Note:** Version bump only for package @lekoarts/gatsby-theme-status-dashboard

## [1.1.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.1.6...@lekoarts/gatsby-theme-status-dashboard@1.1.7) (2020-07-03)

### Bug Fixes

- **deps:** update packages ([#437](https://github.com/LekoArts/gatsby-themes/issues/437)) ([5e27caf](https://github.com/LekoArts/gatsby-themes/commit/5e27caf74c2eae0e7c158fa5a15bd52ae2069ee7))

## [1.1.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.1.5...@lekoarts/gatsby-theme-status-dashboard@1.1.6) (2020-07-02)

### Bug Fixes

- **deps:** update packages ([#429](https://github.com/LekoArts/gatsby-themes/issues/429)) ([f25dfb6](https://github.com/LekoArts/gatsby-themes/commit/f25dfb6105669f62468abc63ceb73c2fbbb73065))

## [1.1.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.1.4...@lekoarts/gatsby-theme-status-dashboard@1.1.5) (2020-06-11)

### Bug Fixes

- Normalize CSS in themes & examples ([#422](https://github.com/LekoArts/gatsby-themes/issues/422)) ([9a2600c](https://github.com/LekoArts/gatsby-themes/commit/9a2600cc45d0f6729799183116f1b87d3c943749))

## [1.1.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.1.3...@lekoarts/gatsby-theme-status-dashboard@1.1.4) (2020-06-08)

**Note:** Version bump only for package @lekoarts/gatsby-theme-status-dashboard

## [1.1.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.1.2...@lekoarts/gatsby-theme-status-dashboard@1.1.3) (2020-05-29)

### Bug Fixes

- **deps:** update packages ([#403](https://github.com/LekoArts/gatsby-themes/issues/403)) ([4275401](https://github.com/LekoArts/gatsby-themes/commit/427540138f6c8687dfff4163679a222ba5d49c8f))

## [1.1.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.1.1...@lekoarts/gatsby-theme-status-dashboard@1.1.2) (2020-05-12)

**Note:** Version bump only for package @lekoarts/gatsby-theme-status-dashboard

## [1.1.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.1.0...@lekoarts/gatsby-theme-status-dashboard@1.1.1) (2020-04-28)

### Bug Fixes

- **deps:** update gatsby ([#378](https://github.com/LekoArts/gatsby-themes/issues/378)) ([8238565](https://github.com/LekoArts/gatsby-themes/commit/82385658f18c983b4ca4d83233660e9f4492a4a9))

# [1.1.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.21...@lekoarts/gatsby-theme-status-dashboard@1.1.0) (2020-04-27)

### Features

- Update theme-ui to v0.3.x ([#371](https://github.com/LekoArts/gatsby-themes/issues/371)) ([67a05ac](https://github.com/LekoArts/gatsby-themes/commit/67a05ac3e1deaddfe38591739e7f50f56d49d109)), closes [/theme-ui.com/migrating#v03](https://github.com//theme-ui.com/migrating/issues/v03) [#262](https://github.com/LekoArts/gatsby-themes/issues/262)

## [1.0.21](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.20...@lekoarts/gatsby-theme-status-dashboard@1.0.21) (2020-04-24)

### Bug Fixes

- **deps:** update gatsby ([#364](https://github.com/LekoArts/gatsby-themes/issues/364)) ([aac08a8](https://github.com/LekoArts/gatsby-themes/commit/aac08a809b86de28f78d2db95dc5651a0a8e640b))

## [1.0.20](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.19...@lekoarts/gatsby-theme-status-dashboard@1.0.20) (2020-04-12)

**Note:** Version bump only for package @lekoarts/gatsby-theme-status-dashboard

## [1.0.19](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.18...@lekoarts/gatsby-theme-status-dashboard@1.0.19) (2020-04-01)

**Note:** Version bump only for package @lekoarts/gatsby-theme-status-dashboard

## [1.0.18](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.17...@lekoarts/gatsby-theme-status-dashboard@1.0.18) (2020-03-31)

### Bug Fixes

- **deps:** update gatsby ([#305](https://github.com/LekoArts/gatsby-themes/issues/305)) ([f3a5e36](https://github.com/LekoArts/gatsby-themes/commit/f3a5e369b6ce1e3b6c046287fe0c1511fa9db758))
- **deps:** update gatsby ([#312](https://github.com/LekoArts/gatsby-themes/issues/312)) ([5a93a50](https://github.com/LekoArts/gatsby-themes/commit/5a93a509d33cc1738de8cfb54a1690ae8dba3151))
- **deps:** update gatsby ([#319](https://github.com/LekoArts/gatsby-themes/issues/319)) ([b7c3dcd](https://github.com/LekoArts/gatsby-themes/commit/b7c3dcdfd54a3cd8291b3dca3868be2af738c1a5))
- **deps:** update gatsby ([#330](https://github.com/LekoArts/gatsby-themes/issues/330)) ([af9b834](https://github.com/LekoArts/gatsby-themes/commit/af9b834102b2e15689557c861f83902b3cb2a728))
- **deps:** update mdx to ^1.5.8 ([#331](https://github.com/LekoArts/gatsby-themes/issues/331)) ([9580e68](https://github.com/LekoArts/gatsby-themes/commit/9580e681f589d60aa1384c5b8d9049ecbde70ea2))

## [1.0.17](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.16...@lekoarts/gatsby-theme-status-dashboard@1.0.17) (2020-03-04)

### Bug Fixes

- **deps:** update dependency @emotion/core to ^10.0.28 ([#296](https://github.com/LekoArts/gatsby-themes/issues/296)) ([8f92e72](https://github.com/LekoArts/gatsby-themes/commit/8f92e726a198026e1aa7917ab1161a941e166dbe))
- **deps:** update gatsby ([#298](https://github.com/LekoArts/gatsby-themes/issues/298)) ([a904526](https://github.com/LekoArts/gatsby-themes/commit/a904526aed9c86fa291866fc85f0d0bca11112b6))

## [1.0.16](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.15...@lekoarts/gatsby-theme-status-dashboard@1.0.16) (2020-02-27)

### Bug Fixes

- **deps:** update mdx to ^1.5.7 ([#288](https://github.com/LekoArts/gatsby-themes/issues/288)) ([feac925](https://github.com/LekoArts/gatsby-themes/commit/feac9250092047dce9a2d9bfe0fe56a53a547256))

## [1.0.15](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.14...@lekoarts/gatsby-theme-status-dashboard@1.0.15) (2020-02-16)

### Bug Fixes

- **deps:** update gatsby ([#260](https://github.com/LekoArts/gatsby-themes/issues/260)) ([5a779f3](https://github.com/LekoArts/gatsby-themes/commit/5a779f32d548e0f4cfb63f6534f81c949123fa67))
- Various fixes about TypeScript, typos, comments ([#235](https://github.com/LekoArts/gatsby-themes/issues/235)) ([2a429c2](https://github.com/LekoArts/gatsby-themes/commit/2a429c2c49ed7a07ec231248372929bb2f18ab91))

## [1.0.14](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.13...@lekoarts/gatsby-theme-status-dashboard@1.0.14) (2020-01-17)

### Bug Fixes

- **deps:** update gatsby ([#224](https://github.com/LekoArts/gatsby-themes/issues/224)) ([b8c544a](https://github.com/LekoArts/gatsby-themes/commit/b8c544a0172180b246cd17c3385dc8e55efef981))
- **deps:** update mdx to ^1.5.5 ([#198](https://github.com/LekoArts/gatsby-themes/issues/198)) ([052d711](https://github.com/LekoArts/gatsby-themes/commit/052d711c2a56ecaf7a0f10f308b525cd963a9bc2))

## [1.0.13](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.12...@lekoarts/gatsby-theme-status-dashboard@1.0.13) (2019-12-31)

### Bug Fixes

- **deps:** update emotion monorepo to ^10.0.27 ([#196](https://github.com/LekoArts/gatsby-themes/issues/196)) ([53f019e](https://github.com/LekoArts/gatsby-themes/commit/53f019ed5e0718367dcb2458480f42795cfa4efe))
- **deps:** update gatsby ([#192](https://github.com/LekoArts/gatsby-themes/issues/192)) ([77916ac](https://github.com/LekoArts/gatsby-themes/commit/77916acb51169bbc2e79af70d0b5ee93d1592a2f))
- **deps:** update theme ui ([#199](https://github.com/LekoArts/gatsby-themes/issues/199)) ([47bb84a](https://github.com/LekoArts/gatsby-themes/commit/47bb84a5b8da618e8b083632493c97a91c442a89))

## [1.0.12](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.11...@lekoarts/gatsby-theme-status-dashboard@1.0.12) (2019-12-03)

### Bug Fixes

- **deps:** update gatsby ([#178](https://github.com/LekoArts/gatsby-themes/issues/178)) ([6ede2c3](https://github.com/LekoArts/gatsby-themes/commit/6ede2c3654f5baa6f1c53f5bb73d046fc257c0af))

## [1.0.11](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.10...@lekoarts/gatsby-theme-status-dashboard@1.0.11) (2019-11-25)

### Bug Fixes

- **deps:** update gatsby ([#166](https://github.com/LekoArts/gatsby-themes/issues/166)) ([8b5cd32](https://github.com/LekoArts/gatsby-themes/commit/8b5cd32222495e1433b6c508697b1853ba99b939))
- **deps:** update theme ui ([#158](https://github.com/LekoArts/gatsby-themes/issues/158)) ([ef07342](https://github.com/LekoArts/gatsby-themes/commit/ef07342deed95faf403f3ce07fe5b2a8f9996ef0))

## [1.0.10](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.9...@lekoarts/gatsby-theme-status-dashboard@1.0.10) (2019-11-16)

### Bug Fixes

- **deps:** update gatsby ([#149](https://github.com/LekoArts/gatsby-themes/issues/149)) ([307df50](https://github.com/LekoArts/gatsby-themes/commit/307df50))

## [1.0.9](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.8...@lekoarts/gatsby-theme-status-dashboard@1.0.9) (2019-11-04)

### Bug Fixes

- **deps:** update dependency theme-ui to ^0.2.46 ([#136](https://github.com/LekoArts/gatsby-themes/issues/136)) ([328eedd](https://github.com/LekoArts/gatsby-themes/commit/328eedd))

## [1.0.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.7...@lekoarts/gatsby-theme-status-dashboard@1.0.8) (2019-10-31)

### Bug Fixes

- **deps:** update emotion monorepo to ^10.0.22 ([#125](https://github.com/LekoArts/gatsby-themes/issues/125)) ([7e5eb60](https://github.com/LekoArts/gatsby-themes/commit/7e5eb60))

## [1.0.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.6...@lekoarts/gatsby-theme-status-dashboard@1.0.7) (2019-10-17)

### Bug Fixes

- **deps:** update gatsby ([#112](https://github.com/LekoArts/gatsby-themes/issues/112)) ([24dcb25](https://github.com/LekoArts/gatsby-themes/commit/24dcb25))
- **deps:** update mdx to ^1.5.1 ([#113](https://github.com/LekoArts/gatsby-themes/issues/113)) ([31276f9](https://github.com/LekoArts/gatsby-themes/commit/31276f9))
- **deps:** update theme ui to ^0.2.44 ([#114](https://github.com/LekoArts/gatsby-themes/issues/114)) ([13e0a45](https://github.com/LekoArts/gatsby-themes/commit/13e0a45))

## [1.0.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.5...@lekoarts/gatsby-theme-status-dashboard@1.0.6) (2019-10-11)

### Bug Fixes

- **deps:** update dependency @emotion/core to ^10.0.21 ([#104](https://github.com/LekoArts/gatsby-themes/issues/104)) ([d3b29a9](https://github.com/LekoArts/gatsby-themes/commit/d3b29a9))
- **deps:** update gatsby ([#105](https://github.com/LekoArts/gatsby-themes/issues/105)) ([b345ce0](https://github.com/LekoArts/gatsby-themes/commit/b345ce0))
- **deps:** update gatsby ([#98](https://github.com/LekoArts/gatsby-themes/issues/98)) ([ea669d1](https://github.com/LekoArts/gatsby-themes/commit/ea669d1))
- **deps:** update mdx to ^1.5.0 ([#99](https://github.com/LekoArts/gatsby-themes/issues/99)) ([76c4a9a](https://github.com/LekoArts/gatsby-themes/commit/76c4a9a))

## [1.0.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.4...@lekoarts/gatsby-theme-status-dashboard@1.0.5) (2019-09-24)

### Bug Fixes

- **deps:** update gatsby ([#89](https://github.com/LekoArts/gatsby-themes/issues/89)) ([94be8d9](https://github.com/LekoArts/gatsby-themes/commit/94be8d9))
- **deps:** update theme ui to ^0.2.43 ([#90](https://github.com/LekoArts/gatsby-themes/issues/90)) ([eac0272](https://github.com/LekoArts/gatsby-themes/commit/eac0272))

## [1.0.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.3...@lekoarts/gatsby-theme-status-dashboard@1.0.4) (2019-09-16)

### Bug Fixes

- **deps:** update gatsby ([#82](https://github.com/LekoArts/gatsby-themes/issues/82)) ([283ef30](https://github.com/LekoArts/gatsby-themes/commit/283ef30))
- **deps:** update mdx to ^1.4.5 ([#83](https://github.com/LekoArts/gatsby-themes/issues/83)) ([4ee0644](https://github.com/LekoArts/gatsby-themes/commit/4ee0644))
- **deps:** update theme ui to ^0.2.42 ([#84](https://github.com/LekoArts/gatsby-themes/issues/84)) ([931c598](https://github.com/LekoArts/gatsby-themes/commit/931c598))

## [1.0.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.2...@lekoarts/gatsby-theme-status-dashboard@1.0.3) (2019-09-09)

### Bug Fixes

- **deps:** update mdx to ^1.4.4 ([#74](https://github.com/LekoArts/gatsby-themes/issues/74)) ([b28517b](https://github.com/LekoArts/gatsby-themes/commit/b28517b))
- **deps:** update theme ui ([#75](https://github.com/LekoArts/gatsby-themes/issues/75)) ([f76ddba](https://github.com/LekoArts/gatsby-themes/commit/f76ddba))

## [1.0.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@1.0.1...@lekoarts/gatsby-theme-status-dashboard@1.0.2) (2019-09-02)

### Bug Fixes

- **deps:** update emotion monorepo to ^10.0.17 ([#64](https://github.com/LekoArts/gatsby-themes/issues/64)) ([34041e8](https://github.com/LekoArts/gatsby-themes/commit/34041e8))
- **deps:** update mdx to ^1.4.0 ([#65](https://github.com/LekoArts/gatsby-themes/issues/65)) ([5d37985](https://github.com/LekoArts/gatsby-themes/commit/5d37985))

## [1.0.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@0.0.14...@lekoarts/gatsby-theme-status-dashboard@1.0.1) (2019-08-24)

**Note:** Version bump only for package @lekoarts/gatsby-theme-status-dashboard

There are **NO** breaking changes, this is just a bump to stable version since the theme is established now.

## [0.0.14](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@0.0.13...@lekoarts/gatsby-theme-status-dashboard@0.0.14) (2019-08-20)

### Bug Fixes

- **deps:** update dependency @emotion/core to ^10.0.16 ([#41](https://github.com/LekoArts/gatsby-themes/issues/41)) ([074a79b](https://github.com/LekoArts/gatsby-themes/commit/074a79b))
- **deps:** update theme ui ([#44](https://github.com/LekoArts/gatsby-themes/issues/44)) ([81a7f6c](https://github.com/LekoArts/gatsby-themes/commit/81a7f6c))
- Dependency & renovate updates ([#48](https://github.com/LekoArts/gatsby-themes/issues/48)) ([208cc23](https://github.com/LekoArts/gatsby-themes/commit/208cc23))

## [0.0.13](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@0.0.12...@lekoarts/gatsby-theme-status-dashboard@0.0.13) (2019-08-19)

### Features

- Add gatsby-theme-specimens ([#40](https://github.com/LekoArts/gatsby-themes/issues/40)) ([5bc5d7f](https://github.com/LekoArts/gatsby-themes/commit/5bc5d7f))

## [0.0.12](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@0.0.11...@lekoarts/gatsby-theme-status-dashboard@0.0.12) (2019-08-12)

**Note:** Version bump only for package @lekoarts/gatsby-theme-status-dashboard

## [0.0.11](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@0.0.10...@lekoarts/gatsby-theme-status-dashboard@0.0.11) (2019-08-12)

### Bug Fixes

- **deps:** update mdx to ^1.2.2 ([#36](https://github.com/LekoArts/gatsby-themes/issues/36)) ([f574230](https://github.com/LekoArts/gatsby-themes/commit/f574230))
- **deps:** update theme ui ([#37](https://github.com/LekoArts/gatsby-themes/issues/37)) ([970a9f3](https://github.com/LekoArts/gatsby-themes/commit/970a9f3))

## [0.0.10](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@0.0.9...@lekoarts/gatsby-theme-status-dashboard@0.0.10) (2019-08-08)

### Features

- Add jest ([#30](https://github.com/LekoArts/gatsby-themes/issues/30)) ([717e86d](https://github.com/LekoArts/gatsby-themes/commit/717e86d)), closes [#11](https://github.com/LekoArts/gatsby-themes/issues/11)

## [0.0.9](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@0.0.8...@lekoarts/gatsby-theme-status-dashboard@0.0.9) (2019-08-06)

### Bug Fixes

- Type errors, typings ([07429da](https://github.com/LekoArts/gatsby-themes/commit/07429da))

## [0.0.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@0.0.7...@lekoarts/gatsby-theme-status-dashboard@0.0.8) (2019-08-05)

### Bug Fixes

- **deps:** update emotion monorepo to ^10.0.15 ([#20](https://github.com/LekoArts/gatsby-themes/issues/20)) ([a7ac838](https://github.com/LekoArts/gatsby-themes/commit/a7ac838))
- **deps:** update mdx to ^1.1.5 ([#21](https://github.com/LekoArts/gatsby-themes/issues/21)) ([d35c4d2](https://github.com/LekoArts/gatsby-themes/commit/d35c4d2))

## [0.0.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@0.0.6...@lekoarts/gatsby-theme-status-dashboard@0.0.7) (2019-08-02)

**Note:** Version bump only for package @lekoarts/gatsby-theme-status-dashboard

## [0.0.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@0.0.5...@lekoarts/gatsby-theme-status-dashboard@0.0.6) (2019-07-31)

### Features

- Re-Export components for easier use ([e06c1cd](https://github.com/LekoArts/gatsby-themes/commit/e06c1cd))

## [0.0.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@0.0.4...@lekoarts/gatsby-theme-status-dashboard@0.0.5) (2019-07-31)

### Bug Fixes

- **deps:** update mdx ([#7](https://github.com/LekoArts/gatsby-themes/issues/7)) ([47d1972](https://github.com/LekoArts/gatsby-themes/commit/47d1972))
- **deps:** update theme ui ([#8](https://github.com/LekoArts/gatsby-themes/issues/8)) ([5c35284](https://github.com/LekoArts/gatsby-themes/commit/5c35284))

## [0.0.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@0.0.3...@lekoarts/gatsby-theme-status-dashboard@0.0.4) (2019-07-24)

**Note:** Version bump only for package @lekoarts/gatsby-theme-status-dashboard

## [0.0.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-status-dashboard@0.0.2...@lekoarts/gatsby-theme-status-dashboard@0.0.3) (2019-07-24)

### Bug Fixes

- Change colors and icon sizes to meet a11y requirements ([6ed80cb](https://github.com/LekoArts/gatsby-themes/commit/6ed80cb))

## 0.0.2 (2019-07-24)

### Features

- Add gatsby-theme-status-dashboard ([#5](https://github.com/LekoArts/gatsby-themes/issues/5)) ([f0d52b9](https://github.com/LekoArts/gatsby-themes/commit/f0d52b9))
