# Change Log

## 2.0.1

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

## 2.0.0

### Major Changes

[#599](https://github.com/LekoArts/gatsby-themes/pull/599) [`1785dcf`](https://github.com/LekoArts/gatsby-themes/commit/1785dcfad131ab9270c401e6a3bb450f7cb01288) Thanks [@LekoArts](https://github.com/LekoArts)!

### Breaking Changes

1. Using `lessBabel` option for `gatsby-plugin-mdx`
1. Updating `react-spring` from v8 to v9
1. Updating `theme-ui` from v0.3 to v0.9 and thus also `emotion` from v10 to v11
1. Removed `@emotion/styled`
1. Updating all Gatsby related packages to latest
1. Removed `gatsby-plugin-typescript` & `gatsby-plugin-emotion`

#### Migrating

1. The `lessBabel` option might break your setup in some edge cases. If it doesn't work, turn on the `mdx` option and choose your own config for `gatsby-plugin-mdx`
1. You can find the migration guide for `react-spring` here: https://react-spring.io/changelog#v900. The most notable change is the import that was used inside the components. From `import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"` to `import { ParallaxLayer } from "@react-spring/parallax"`
1. The changelog/migration guide for `theme-ui` is here: https://theme-ui.com/migrating and for `emotion` here: https://emotion.sh/docs/emotion-11
1. If you still want to use `@emotion/styled` you'll need to install it separately now
1. Gatsby v3 migration guide: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/
1. The TypeScript plugin isn't necessary anymore with Gatsby v3 -- if you want to continue to use `@emotion/styled` you'll need to add `gatsby-plugin-emotion` yourself

### Improvements

- You can use the `sharp` theme option to be able to configure `gatsby-plugin-sharp` on your own (helpful for defaults for `gatsby-plugin-image`)
- Performance improvements from `react-spring` and `theme-ui` upgrades
- Additional props to the `ProjectCard` component are now spread by default in the `components` config of `gatsby-plugin-theme-ui`

### Updates to Starter

If you only cloned the starter (https://github.com/LekoArts/gatsby-starter-portfolio-cara) and didn't change anything else this section will be more relevant to you.

- Conditionally add `gatsby-plugin-google-analytics`
- Add `FAST_DEV` flag
- Update to all latest Gatsby (+ plugins) versions
- Add 404 page

## 1.2.20

### Patch Changes

- [`47f747e`](https://github.com/LekoArts/gatsby-themes/commit/47f747e045962996503bf4043b0adc5a2527a855) [#559](https://github.com/LekoArts/gatsby-themes/pull/559) Thanks [@renovate](https://github.com/apps/renovate)! - Dependency updates for various packages, including theme-ui and gatsby related packages (includes improvements for `gatsby-plugin-image`)

## 1.2.19

### Patch Changes

- [`9d25527`](https://github.com/LekoArts/gatsby-themes/commit/9d25527cf2372d24682d85c44ecca02675019774) [#551](https://github.com/LekoArts/gatsby-themes/pull/551) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update packages

  You can see the details of the update here: https://github.com/LekoArts/gatsby-themes/pull/551

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.2.18](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.2.17...@lekoarts/gatsby-theme-cara@1.2.18) (2020-11-11)

**Note:** Version bump only for package @lekoarts/gatsby-theme-cara

## [1.2.17](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.2.16...@lekoarts/gatsby-theme-cara@1.2.17) (2020-11-02)

### Bug Fixes

- **deps:** update packages ([#530](https://github.com/LekoArts/gatsby-themes/issues/530)) ([2125d8e](https://github.com/LekoArts/gatsby-themes/commit/2125d8ec904388c66d821a7db7ebca6adc9ff73c))

## [1.2.16](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.2.15...@lekoarts/gatsby-theme-cara@1.2.16) (2020-10-25)

### Bug Fixes

- **deps:** update packages ([#510](https://github.com/LekoArts/gatsby-themes/issues/510)) ([06ecc65](https://github.com/LekoArts/gatsby-themes/commit/06ecc65b784e8fd27d5354761211df14f7a72749))

## [1.2.15](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.2.14...@lekoarts/gatsby-theme-cara@1.2.15) (2020-10-10)

**Note:** Version bump only for package @lekoarts/gatsby-theme-cara

## [1.2.14](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.2.13...@lekoarts/gatsby-theme-cara@1.2.14) (2020-09-25)

### Bug Fixes

- **deps:** update packages ([#490](https://github.com/LekoArts/gatsby-themes/issues/490)) ([b3af934](https://github.com/LekoArts/gatsby-themes/commit/b3af934ac68b4f9fb7492cc3da7707392325175b))

## [1.2.13](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.2.12...@lekoarts/gatsby-theme-cara@1.2.13) (2020-09-16)

### Bug Fixes

- **deps:** update packages ([#484](https://github.com/LekoArts/gatsby-themes/issues/484)) ([006cdc4](https://github.com/LekoArts/gatsby-themes/commit/006cdc4b8623595b14f6571fe694671a77a6a9dc))

## [1.2.12](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.2.11...@lekoarts/gatsby-theme-cara@1.2.12) (2020-09-10)

### Bug Fixes

- **deps:** update packages ([#481](https://github.com/LekoArts/gatsby-themes/issues/481)) ([cf206a2](https://github.com/LekoArts/gatsby-themes/commit/cf206a241867ede738be2b3a1b856ec3e85c010e))

## [1.2.11](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.2.10...@lekoarts/gatsby-theme-cara@1.2.11) (2020-08-27)

### Bug Fixes

- **deps:** update packages ([#458](https://github.com/LekoArts/gatsby-themes/issues/458)) ([dcfb106](https://github.com/LekoArts/gatsby-themes/commit/dcfb1060ee90a928ae28840906b6f3b706218ad8))
- **deps:** update packages ([#461](https://github.com/LekoArts/gatsby-themes/issues/461)) ([6e4e35e](https://github.com/LekoArts/gatsby-themes/commit/6e4e35e21b502a9a3b9305785b372f03a7741ce7))
- **deps:** update packages ([#464](https://github.com/LekoArts/gatsby-themes/issues/464)) ([cfa1d43](https://github.com/LekoArts/gatsby-themes/commit/cfa1d43fd03d860930005359907b0bab1278e243))

## [1.2.10](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.2.9...@lekoarts/gatsby-theme-cara@1.2.10) (2020-07-09)

**Note:** Version bump only for package @lekoarts/gatsby-theme-cara

## [1.2.9](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.2.8...@lekoarts/gatsby-theme-cara@1.2.9) (2020-07-03)

### Bug Fixes

- **deps:** update packages ([#437](https://github.com/LekoArts/gatsby-themes/issues/437)) ([5e27caf](https://github.com/LekoArts/gatsby-themes/commit/5e27caf74c2eae0e7c158fa5a15bd52ae2069ee7))
- Set default values and replace defaultProps ([#436](https://github.com/LekoArts/gatsby-themes/issues/436)) ([d62857f](https://github.com/LekoArts/gatsby-themes/commit/d62857ffd1d2d97cfa31cb6ca37cb39db48467d0))

## [1.2.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.2.7...@lekoarts/gatsby-theme-cara@1.2.8) (2020-07-02)

### Bug Fixes

- **deps:** update packages ([#429](https://github.com/LekoArts/gatsby-themes/issues/429)) ([f25dfb6](https://github.com/LekoArts/gatsby-themes/commit/f25dfb6105669f62468abc63ceb73c2fbbb73065))

## [1.2.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.2.6...@lekoarts/gatsby-theme-cara@1.2.7) (2020-06-11)

### Bug Fixes

- Normalize CSS in themes & examples ([#422](https://github.com/LekoArts/gatsby-themes/issues/422)) ([9a2600c](https://github.com/LekoArts/gatsby-themes/commit/9a2600cc45d0f6729799183116f1b87d3c943749))

## [1.2.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.2.5...@lekoarts/gatsby-theme-cara@1.2.6) (2020-06-08)

### Bug Fixes

- **deps:** update packages ([#408](https://github.com/LekoArts/gatsby-themes/issues/408)) ([11b89ad](https://github.com/LekoArts/gatsby-themes/commit/11b89ad8bb0a59dc3fe95941bca57d83a1716e80))

## [1.2.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.2.4...@lekoarts/gatsby-theme-cara@1.2.5) (2020-05-29)

### Bug Fixes

- **deps:** update packages ([#403](https://github.com/LekoArts/gatsby-themes/issues/403)) ([4275401](https://github.com/LekoArts/gatsby-themes/commit/427540138f6c8687dfff4163679a222ba5d49c8f))

## [1.2.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.2.3...@lekoarts/gatsby-theme-cara@1.2.4) (2020-05-12)

**Note:** Version bump only for package @lekoarts/gatsby-theme-cara

## [1.2.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.2.2...@lekoarts/gatsby-theme-cara@1.2.3) (2020-05-04)

### Bug Fixes

- **deps:** update packages ([#394](https://github.com/LekoArts/gatsby-themes/issues/394)) ([c047fce](https://github.com/LekoArts/gatsby-themes/commit/c047fce748e9c85604a5fb2f104918d455b96580))

## [1.2.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.2.1...@lekoarts/gatsby-theme-cara@1.2.2) (2020-05-02)

### Bug Fixes

- Use correct ::selection colors ([f311851](https://github.com/LekoArts/gatsby-themes/commit/f311851e25c0c7bf40299ec3a7a430dc210bbdc9))

## [1.2.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.2.0...@lekoarts/gatsby-theme-cara@1.2.1) (2020-04-28)

### Bug Fixes

- **deps:** update gatsby ([#378](https://github.com/LekoArts/gatsby-themes/issues/378)) ([8238565](https://github.com/LekoArts/gatsby-themes/commit/82385658f18c983b4ca4d83233660e9f4492a4a9))

# [1.2.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.1.8...@lekoarts/gatsby-theme-cara@1.2.0) (2020-04-27)

### Features

- Update theme-ui to v0.3.x ([#371](https://github.com/LekoArts/gatsby-themes/issues/371)) ([67a05ac](https://github.com/LekoArts/gatsby-themes/commit/67a05ac3e1deaddfe38591739e7f50f56d49d109)), closes [/theme-ui.com/migrating#v03](https://github.com//theme-ui.com/migrating/issues/v03) [#262](https://github.com/LekoArts/gatsby-themes/issues/262)

## [1.1.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.1.7...@lekoarts/gatsby-theme-cara@1.1.8) (2020-04-24)

### Bug Fixes

- **deps:** update gatsby ([#364](https://github.com/LekoArts/gatsby-themes/issues/364)) ([aac08a8](https://github.com/LekoArts/gatsby-themes/commit/aac08a809b86de28f78d2db95dc5651a0a8e640b))

## [1.1.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.1.6...@lekoarts/gatsby-theme-cara@1.1.7) (2020-04-13)

### Bug Fixes

- **deps:** update dependency react-helmet to v6 ([#354](https://github.com/LekoArts/gatsby-themes/issues/354)) ([117d1d5](https://github.com/LekoArts/gatsby-themes/commit/117d1d5a6989d763c89137d8a9f0fb55f55efdee))

## [1.1.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.1.5...@lekoarts/gatsby-theme-cara@1.1.6) (2020-04-13)

### Bug Fixes

- **deps:** update gatsby ([#353](https://github.com/LekoArts/gatsby-themes/issues/353)) ([4550ff3](https://github.com/LekoArts/gatsby-themes/commit/4550ff3a79ba415a4f019019300fea47d24b16c8))

## [1.1.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.1.4...@lekoarts/gatsby-theme-cara@1.1.5) (2020-04-12)

### Bug Fixes

- Use withPrefix helper in SEO component ([#346](https://github.com/LekoArts/gatsby-themes/issues/346)) ([91fc16c](https://github.com/LekoArts/gatsby-themes/commit/91fc16c3c725a2d858ee093d761530975e2173d9))

## [1.1.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.1.3...@lekoarts/gatsby-theme-cara@1.1.4) (2020-04-12)

### Bug Fixes

- **deps:** update gatsby ([#343](https://github.com/LekoArts/gatsby-themes/issues/343)) ([6f4f07f](https://github.com/LekoArts/gatsby-themes/commit/6f4f07f0d6570610a3d17bb60472a52ac402693d))

## [1.1.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.1.2...@lekoarts/gatsby-theme-cara@1.1.3) (2020-04-01)

**Note:** Version bump only for package @lekoarts/gatsby-theme-cara

## [1.1.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.1.1...@lekoarts/gatsby-theme-cara@1.1.2) (2020-03-31)

### Bug Fixes

- **deps:** update gatsby ([#305](https://github.com/LekoArts/gatsby-themes/issues/305)) ([f3a5e36](https://github.com/LekoArts/gatsby-themes/commit/f3a5e369b6ce1e3b6c046287fe0c1511fa9db758))
- **deps:** update gatsby ([#312](https://github.com/LekoArts/gatsby-themes/issues/312)) ([5a93a50](https://github.com/LekoArts/gatsby-themes/commit/5a93a509d33cc1738de8cfb54a1690ae8dba3151))
- **deps:** update gatsby ([#319](https://github.com/LekoArts/gatsby-themes/issues/319)) ([b7c3dcd](https://github.com/LekoArts/gatsby-themes/commit/b7c3dcdfd54a3cd8291b3dca3868be2af738c1a5))
- **deps:** update gatsby ([#330](https://github.com/LekoArts/gatsby-themes/issues/330)) ([af9b834](https://github.com/LekoArts/gatsby-themes/commit/af9b834102b2e15689557c861f83902b3cb2a728))
- **deps:** update mdx to ^1.5.8 ([#331](https://github.com/LekoArts/gatsby-themes/issues/331)) ([9580e68](https://github.com/LekoArts/gatsby-themes/commit/9580e681f589d60aa1384c5b8d9049ecbde70ea2))

## [1.1.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.1.0...@lekoarts/gatsby-theme-cara@1.1.1) (2020-03-04)

### Bug Fixes

- **deps:** update dependency @emotion/core to ^10.0.28 ([#296](https://github.com/LekoArts/gatsby-themes/issues/296)) ([8f92e72](https://github.com/LekoArts/gatsby-themes/commit/8f92e726a198026e1aa7917ab1161a941e166dbe))
- **deps:** update gatsby ([#297](https://github.com/LekoArts/gatsby-themes/issues/297)) ([1c2cd69](https://github.com/LekoArts/gatsby-themes/commit/1c2cd695d7e2abbc820ce81a37fc20f23ab9f7ce))
- **deps:** update gatsby ([#298](https://github.com/LekoArts/gatsby-themes/issues/298)) ([a904526](https://github.com/LekoArts/gatsby-themes/commit/a904526aed9c86fa291866fc85f0d0bca11112b6))

# [1.1.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.20...@lekoarts/gatsby-theme-cara@1.1.0) (2020-02-29)

### Features

- Add factor prop to all sections ([e893a9b](https://github.com/LekoArts/gatsby-themes/commit/e893a9b60911f475017931ecd9841321cb3d4fa8))

## [1.0.20](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.19...@lekoarts/gatsby-theme-cara@1.0.20) (2020-02-27)

### Bug Fixes

- **deps:** update gatsby ([#278](https://github.com/LekoArts/gatsby-themes/issues/278)) ([8d8d8e4](https://github.com/LekoArts/gatsby-themes/commit/8d8d8e48bdeac04a07a74682cbadd4927b3ec101))
- **deps:** update mdx to ^1.5.7 ([#288](https://github.com/LekoArts/gatsby-themes/issues/288)) ([feac925](https://github.com/LekoArts/gatsby-themes/commit/feac9250092047dce9a2d9bfe0fe56a53a547256))

## [1.0.19](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.18...@lekoarts/gatsby-theme-cara@1.0.19) (2020-02-16)

### Bug Fixes

- **deps:** update gatsby ([#260](https://github.com/LekoArts/gatsby-themes/issues/260)) ([5a779f3](https://github.com/LekoArts/gatsby-themes/commit/5a779f32d548e0f4cfb63f6534f81c949123fa67))

## [1.0.18](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.17...@lekoarts/gatsby-theme-cara@1.0.18) (2020-01-23)

### Bug Fixes

- Various fixes about TypeScript, typos, comments ([#235](https://github.com/LekoArts/gatsby-themes/issues/235)) ([2a429c2](https://github.com/LekoArts/gatsby-themes/commit/2a429c2c49ed7a07ec231248372929bb2f18ab91))

## [1.0.17](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.16...@lekoarts/gatsby-theme-cara@1.0.17) (2020-01-17)

### Bug Fixes

- **deps:** update gatsby ([#224](https://github.com/LekoArts/gatsby-themes/issues/224)) ([b8c544a](https://github.com/LekoArts/gatsby-themes/commit/b8c544a0172180b246cd17c3385dc8e55efef981))
- **deps:** update mdx to ^1.5.5 ([#198](https://github.com/LekoArts/gatsby-themes/issues/198)) ([052d711](https://github.com/LekoArts/gatsby-themes/commit/052d711c2a56ecaf7a0f10f308b525cd963a9bc2))

## [1.0.16](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.15...@lekoarts/gatsby-theme-cara@1.0.16) (2020-01-04)

### Bug Fixes

- Various styling issues in different browsers ([#210](https://github.com/LekoArts/gatsby-themes/issues/210)) ([a4ce528](https://github.com/LekoArts/gatsby-themes/commit/a4ce528151c3ef227beec66162804d6ed88dd33b))

## [1.0.15](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.14...@lekoarts/gatsby-theme-cara@1.0.15) (2020-01-04)

### Bug Fixes

- MDX option ([#209](https://github.com/LekoArts/gatsby-themes/issues/209)) ([dcc99b7](https://github.com/LekoArts/gatsby-themes/commit/dcc99b72c7db440162874547e11eba498fb7762e))

## [1.0.14](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.13...@lekoarts/gatsby-theme-cara@1.0.14) (2019-12-31)

### Bug Fixes

- **deps:** update emotion monorepo to ^10.0.27 ([#196](https://github.com/LekoArts/gatsby-themes/issues/196)) ([53f019e](https://github.com/LekoArts/gatsby-themes/commit/53f019ed5e0718367dcb2458480f42795cfa4efe))
- **deps:** update gatsby ([#192](https://github.com/LekoArts/gatsby-themes/issues/192)) ([77916ac](https://github.com/LekoArts/gatsby-themes/commit/77916acb51169bbc2e79af70d0b5ee93d1592a2f))
- **deps:** update gatsby ([#197](https://github.com/LekoArts/gatsby-themes/issues/197)) ([a194a3a](https://github.com/LekoArts/gatsby-themes/commit/a194a3a9e8e5ef034189a51e69624700408caebd))
- **deps:** update theme ui ([#199](https://github.com/LekoArts/gatsby-themes/issues/199)) ([47bb84a](https://github.com/LekoArts/gatsby-themes/commit/47bb84a5b8da618e8b083632493c97a91c442a89))

## [1.0.13](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.12...@lekoarts/gatsby-theme-cara@1.0.13) (2019-12-03)

### Bug Fixes

- **deps:** update gatsby ([#178](https://github.com/LekoArts/gatsby-themes/issues/178)) ([6ede2c3](https://github.com/LekoArts/gatsby-themes/commit/6ede2c3654f5baa6f1c53f5bb73d046fc257c0af))

## [1.0.12](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.11...@lekoarts/gatsby-theme-cara@1.0.12) (2019-11-25)

### Bug Fixes

- **deps:** Update all dependencies ([#159](https://github.com/LekoArts/gatsby-themes/issues/159)) ([6047e50](https://github.com/LekoArts/gatsby-themes/commit/6047e5005f5b1ea3438ec99c0aea1cd1febf20b0))
- **deps:** update gatsby ([#166](https://github.com/LekoArts/gatsby-themes/issues/166)) ([8b5cd32](https://github.com/LekoArts/gatsby-themes/commit/8b5cd32222495e1433b6c508697b1853ba99b939))
- **deps:** update theme ui ([#158](https://github.com/LekoArts/gatsby-themes/issues/158)) ([ef07342](https://github.com/LekoArts/gatsby-themes/commit/ef07342deed95faf403f3ce07fe5b2a8f9996ef0))

## [1.0.11](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.10...@lekoarts/gatsby-theme-cara@1.0.11) (2019-11-16)

### Bug Fixes

- **deps:** update gatsby ([#149](https://github.com/LekoArts/gatsby-themes/issues/149)) ([307df50](https://github.com/LekoArts/gatsby-themes/commit/307df50))

## [1.0.10](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.9...@lekoarts/gatsby-theme-cara@1.0.10) (2019-11-04)

### Bug Fixes

- **deps:** update dependency @emotion/styled to ^10.0.23 ([#133](https://github.com/LekoArts/gatsby-themes/issues/133)) ([5bebd52](https://github.com/LekoArts/gatsby-themes/commit/5bebd52))
- **deps:** update dependency theme-ui to ^0.2.46 ([#136](https://github.com/LekoArts/gatsby-themes/issues/136)) ([328eedd](https://github.com/LekoArts/gatsby-themes/commit/328eedd))
- **deps:** update gatsby ([#137](https://github.com/LekoArts/gatsby-themes/issues/137)) ([8619dc2](https://github.com/LekoArts/gatsby-themes/commit/8619dc2))

## [1.0.9](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.8...@lekoarts/gatsby-theme-cara@1.0.9) (2019-10-31)

### Bug Fixes

- **deps:** update emotion monorepo to ^10.0.22 ([#125](https://github.com/LekoArts/gatsby-themes/issues/125)) ([7e5eb60](https://github.com/LekoArts/gatsby-themes/commit/7e5eb60))
- **deps:** update gatsby ([#126](https://github.com/LekoArts/gatsby-themes/issues/126)) ([0e8ca8b](https://github.com/LekoArts/gatsby-themes/commit/0e8ca8b))

## [1.0.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.7...@lekoarts/gatsby-theme-cara@1.0.8) (2019-10-17)

### Bug Fixes

- **deps:** update gatsby ([#112](https://github.com/LekoArts/gatsby-themes/issues/112)) ([24dcb25](https://github.com/LekoArts/gatsby-themes/commit/24dcb25))
- **deps:** update mdx to ^1.5.1 ([#113](https://github.com/LekoArts/gatsby-themes/issues/113)) ([31276f9](https://github.com/LekoArts/gatsby-themes/commit/31276f9))
- **deps:** update theme ui to ^0.2.44 ([#114](https://github.com/LekoArts/gatsby-themes/issues/114)) ([13e0a45](https://github.com/LekoArts/gatsby-themes/commit/13e0a45))

## [1.0.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.6...@lekoarts/gatsby-theme-cara@1.0.7) (2019-10-11)

### Bug Fixes

- **deps:** update dependency @emotion/core to ^10.0.21 ([#104](https://github.com/LekoArts/gatsby-themes/issues/104)) ([d3b29a9](https://github.com/LekoArts/gatsby-themes/commit/d3b29a9))
- **deps:** update gatsby ([#105](https://github.com/LekoArts/gatsby-themes/issues/105)) ([b345ce0](https://github.com/LekoArts/gatsby-themes/commit/b345ce0))
- **deps:** update gatsby ([#98](https://github.com/LekoArts/gatsby-themes/issues/98)) ([ea669d1](https://github.com/LekoArts/gatsby-themes/commit/ea669d1))
- **deps:** update mdx to ^1.5.0 ([#99](https://github.com/LekoArts/gatsby-themes/issues/99)) ([76c4a9a](https://github.com/LekoArts/gatsby-themes/commit/76c4a9a))

## [1.0.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.5...@lekoarts/gatsby-theme-cara@1.0.6) (2019-09-24)

### Bug Fixes

- **deps:** update gatsby ([#89](https://github.com/LekoArts/gatsby-themes/issues/89)) ([94be8d9](https://github.com/LekoArts/gatsby-themes/commit/94be8d9))
- **deps:** update theme ui to ^0.2.43 ([#90](https://github.com/LekoArts/gatsby-themes/issues/90)) ([eac0272](https://github.com/LekoArts/gatsby-themes/commit/eac0272))

## [1.0.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.4...@lekoarts/gatsby-theme-cara@1.0.5) (2019-09-16)

### Bug Fixes

- **deps:** update gatsby ([#82](https://github.com/LekoArts/gatsby-themes/issues/82)) ([283ef30](https://github.com/LekoArts/gatsby-themes/commit/283ef30))
- **deps:** update mdx to ^1.4.5 ([#83](https://github.com/LekoArts/gatsby-themes/issues/83)) ([4ee0644](https://github.com/LekoArts/gatsby-themes/commit/4ee0644))
- **deps:** update theme ui to ^0.2.42 ([#84](https://github.com/LekoArts/gatsby-themes/issues/84)) ([931c598](https://github.com/LekoArts/gatsby-themes/commit/931c598))

## [1.0.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.3...@lekoarts/gatsby-theme-cara@1.0.4) (2019-09-09)

### Bug Fixes

- **deps:** update gatsby ([#73](https://github.com/LekoArts/gatsby-themes/issues/73)) ([c0b86e6](https://github.com/LekoArts/gatsby-themes/commit/c0b86e6))
- **deps:** update mdx to ^1.4.4 ([#74](https://github.com/LekoArts/gatsby-themes/issues/74)) ([b28517b](https://github.com/LekoArts/gatsby-themes/commit/b28517b))
- **deps:** update theme ui ([#75](https://github.com/LekoArts/gatsby-themes/issues/75)) ([f76ddba](https://github.com/LekoArts/gatsby-themes/commit/f76ddba))

## [1.0.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.2...@lekoarts/gatsby-theme-cara@1.0.3) (2019-09-02)

### Bug Fixes

- **deps:** update emotion monorepo to ^10.0.17 ([#64](https://github.com/LekoArts/gatsby-themes/issues/64)) ([34041e8](https://github.com/LekoArts/gatsby-themes/commit/34041e8))
- **deps:** update mdx to ^1.4.0 ([#65](https://github.com/LekoArts/gatsby-themes/issues/65)) ([5d37985](https://github.com/LekoArts/gatsby-themes/commit/5d37985))

## [1.0.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@1.0.1...@lekoarts/gatsby-theme-cara@1.0.2) (2019-08-29)

### Bug Fixes

- Correct link to theme in footer ([ad8bc44](https://github.com/LekoArts/gatsby-themes/commit/ad8bc44))

## [1.0.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@0.0.11...@lekoarts/gatsby-theme-cara@1.0.1) (2019-08-24)

**Note:** Version bump only for package @lekoarts/gatsby-theme-cara

There are **NO** breaking changes, this is just a bump to stable version since the theme is established now.

## [0.0.11](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@0.0.10...@lekoarts/gatsby-theme-cara@0.0.11) (2019-08-24)

### Bug Fixes

- Modify footer links ([#52](https://github.com/LekoArts/gatsby-themes/issues/52)) ([793c94a](https://github.com/LekoArts/gatsby-themes/commit/793c94a))

## [0.0.10](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@0.0.9...@lekoarts/gatsby-theme-cara@0.0.10) (2019-08-20)

### Bug Fixes

- **deps:** update dependency @emotion/core to ^10.0.16 ([#41](https://github.com/LekoArts/gatsby-themes/issues/41)) ([074a79b](https://github.com/LekoArts/gatsby-themes/commit/074a79b))
- **deps:** update gatsby ([#42](https://github.com/LekoArts/gatsby-themes/issues/42)) ([46f9332](https://github.com/LekoArts/gatsby-themes/commit/46f9332))
- **deps:** update theme ui ([#44](https://github.com/LekoArts/gatsby-themes/issues/44)) ([81a7f6c](https://github.com/LekoArts/gatsby-themes/commit/81a7f6c))
- Dependency & renovate updates ([#48](https://github.com/LekoArts/gatsby-themes/issues/48)) ([208cc23](https://github.com/LekoArts/gatsby-themes/commit/208cc23))

## [0.0.9](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@0.0.8...@lekoarts/gatsby-theme-cara@0.0.9) (2019-08-12)

**Note:** Version bump only for package @lekoarts/gatsby-theme-cara

## [0.0.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@0.0.7...@lekoarts/gatsby-theme-cara@0.0.8) (2019-08-12)

### Bug Fixes

- **deps:** update mdx to ^1.2.2 ([#36](https://github.com/LekoArts/gatsby-themes/issues/36)) ([f574230](https://github.com/LekoArts/gatsby-themes/commit/f574230))
- **deps:** update theme ui ([#37](https://github.com/LekoArts/gatsby-themes/issues/37)) ([970a9f3](https://github.com/LekoArts/gatsby-themes/commit/970a9f3))

## [0.0.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@0.0.6...@lekoarts/gatsby-theme-cara@0.0.7) (2019-08-06)

### Bug Fixes

- Type errors, typings ([07429da](https://github.com/LekoArts/gatsby-themes/commit/07429da))

## [0.0.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@0.0.5...@lekoarts/gatsby-theme-cara@0.0.6) (2019-08-05)

### Bug Fixes

- **deps:** update emotion monorepo to ^10.0.15 ([#20](https://github.com/LekoArts/gatsby-themes/issues/20)) ([a7ac838](https://github.com/LekoArts/gatsby-themes/commit/a7ac838))
- **deps:** update mdx to ^1.1.5 ([#21](https://github.com/LekoArts/gatsby-themes/issues/21)) ([d35c4d2](https://github.com/LekoArts/gatsby-themes/commit/d35c4d2))

## [0.0.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@0.0.4...@lekoarts/gatsby-theme-cara@0.0.5) (2019-08-02)

**Note:** Version bump only for package @lekoarts/gatsby-theme-cara

## [0.0.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@0.0.3...@lekoarts/gatsby-theme-cara@0.0.4) (2019-07-31)

### Bug Fixes

- Remove white-space from Footer component ([2fa77a1](https://github.com/LekoArts/gatsby-themes/commit/2fa77a1))
- Colors in Contact section ([6d2d5dd](https://github.com/LekoArts/gatsby-themes/commit/6d2d5dd))

## [0.0.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-cara@0.0.2...@lekoarts/gatsby-theme-cara@0.0.3) (2019-07-31)

### Bug Fixes

- Add shortcodes again ([e41da33](https://github.com/LekoArts/gatsby-themes/commit/e41da33))
- right colors in both modes ([0e3872b](https://github.com/LekoArts/gatsby-themes/commit/0e3872b))

## 0.0.2 (2019-07-31)

### Features

- Add gatsby-theme-cara ([#12](https://github.com/LekoArts/gatsby-themes/issues/12)) ([e798a7d](https://github.com/LekoArts/gatsby-themes/commit/e798a7d))
