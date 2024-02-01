# Change Log

## 5.1.6

### Patch Changes

- [#1290](https://github.com/LekoArts/gatsby-themes/pull/1290) [`134ae5c`](https://github.com/LekoArts/gatsby-themes/commit/134ae5c430ebb9b3cace4bc41bef291a9073eb41) Thanks [@renovate](https://github.com/apps/renovate)! - update minor and patch dependencies

## 5.1.5

### Patch Changes

- [#1272](https://github.com/LekoArts/gatsby-themes/pull/1272) [`9aae2de`](https://github.com/LekoArts/gatsby-themes/commit/9aae2de15d9949b273c11306ae297d35bbdbe88b) Thanks [@renovate](https://github.com/apps/renovate)! - update minor and patch dependencies

## 5.1.4

### Patch Changes

- [`409bba45`](https://github.com/LekoArts/gatsby-themes/commit/409bba451d8637d04de2efc8199fa662a2595c68) Thanks [@LekoArts](https://github.com/LekoArts)! - Remove link to my Patreon page. To simplify things I disabled my Patreon. If you want to support my OSS work, please consider using GitHub sponsors or Ko-fi. Thanks!

## 5.1.3

### Patch Changes

- [#1214](https://github.com/LekoArts/gatsby-themes/pull/1214) [`270aaee8`](https://github.com/LekoArts/gatsby-themes/commit/270aaee8736e45d47d6241112dc1db974556f2a3) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-emilia-core to ^5.12.0

- Updated dependencies [[`5393b80b`](https://github.com/LekoArts/gatsby-themes/commit/5393b80b41b5291b35573a89926b8a8d1945e327)]:
  - @lekoarts/themes-utils@3.0.1

## 5.1.2

### Patch Changes

- [#1199](https://github.com/LekoArts/gatsby-themes/pull/1199) [`c061dea7`](https://github.com/LekoArts/gatsby-themes/commit/c061dea743e9438e1d397f21de5a5d35b8cfe380) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-emilia-core to ^5.10.0

## 5.1.1

### Patch Changes

- [#1150](https://github.com/LekoArts/gatsby-themes/pull/1150) [`12e417f8`](https://github.com/LekoArts/gatsby-themes/commit/12e417f80a75cb41a89bbb28c03885ca5e747872) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-emilia-core

## 5.1.0

### Minor Changes

- [#1119](https://github.com/LekoArts/gatsby-themes/pull/1119) [`02844608`](https://github.com/LekoArts/gatsby-themes/commit/02844608a2ebcbdbc12d8bba27c795ab350386e6) Thanks [@LekoArts](https://github.com/LekoArts)! - Starting with [Gatsby 5.3](https://www.gatsbyjs.com/docs/reference/release-notes/v5.3/#es-modules-esm-in-gatsby-files) ESM in Gatsby files is supported now! So you can write `gatsby-config.mjs` or `gatsby-node.mjs`.

  Therefore this theme was updated to use ESM for its source code. This shouldn't make a difference for actually using the theme as behavior stays the same. If this is not the case, please open an issue!

  One benefit of now using ESM behind the scenes is that e.g. the `remark-*` packages could be updated to their latest versions (they are ESM-only). Yey for using up-to-date software.

- [#1119](https://github.com/LekoArts/gatsby-themes/pull/1119) [`02844608`](https://github.com/LekoArts/gatsby-themes/commit/02844608a2ebcbdbc12d8bba27c795ab350386e6) Thanks [@LekoArts](https://github.com/LekoArts)! - In the last major version release the `siteLanguage` key on the `siteMetadata` object was removed since the [Gatsby Head API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/) didn't support setting the `lang` attribute on the `<html>` back then. Starting with [Gatsby 5.5](https://www.gatsbyjs.com/docs/reference/release-notes/v5.5/#setting-html-and-body-attributes) this is now supported and the removal change was reverted.

  Thus you can use the `siteLanguage` key on the `siteMetadata` object again to change the language globally. By default it uses `en`. This is also highlighted in the `README` again. If you want to change the language on a per-page basis, define your own `<html lang="value" />` in your Head API export as it then overrides the global configuration.

- [#1119](https://github.com/LekoArts/gatsby-themes/pull/1119) [`02844608`](https://github.com/LekoArts/gatsby-themes/commit/02844608a2ebcbdbc12d8bba27c795ab350386e6) Thanks [@LekoArts](https://github.com/LekoArts)! - Because this theme now uses a [Gatsby Head API](https://www.gatsbyjs.com/docs/reference/release-notes/v5.5/#setting-html-and-body-attributes) feature that was introduced in [Gatsby 5.5](https://www.gatsbyjs.com/docs/reference/release-notes/v5.5/#setting-html-and-body-attributes) the `peerDependencies` range was updated from `^5.0.0` to `^5.5.0`.

  Please also update your `gatsby` package when updating this theme.

### Patch Changes

- Updated dependencies [[`02844608`](https://github.com/LekoArts/gatsby-themes/commit/02844608a2ebcbdbc12d8bba27c795ab350386e6)]:
  - @lekoarts/themes-utils@3.0.0

## 5.0.5

### Patch Changes

- [#1116](https://github.com/LekoArts/gatsby-themes/pull/1116) [`cf7d5122`](https://github.com/LekoArts/gatsby-themes/commit/cf7d51223a73387f12cac490e2a42f068b0ded26) Thanks [@LekoArts](https://github.com/LekoArts)! - chore(deps): Various dependency updates

## 5.0.4

### Patch Changes

- [#1071](https://github.com/LekoArts/gatsby-themes/pull/1071) [`0165e298`](https://github.com/LekoArts/gatsby-themes/commit/0165e29809ee095a1a30d2bf82ece6784f6cc925) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-emilia-core to ^5.2.0

## 5.0.0

### Major Changes

- [#1045](https://github.com/LekoArts/gatsby-themes/pull/1045) [`02872400`](https://github.com/LekoArts/gatsby-themes/commit/0287240022c308a7d1fcc8af348ee7d21bca0dd5) Thanks [@LekoArts](https://github.com/LekoArts)! - Update to [Gatsby 5](https://www.gatsbyjs.com/gatsby-5/). [Gatsby 5 Migration Guide](https://gatsbyjs.com/docs/reference/release-notes/migrating-from-v4-to-v5/).

  **Breaking Changes:**

  - Minimal Node.js version 18.0.0
  - Minimal required React version is 18

  For all other breaking changes, refer to the [Gatsby 5 Migration Guide](https://gatsbyjs.com/docs/reference/release-notes/migrating-from-v4-to-v5/).

### Patch Changes

- Updated dependencies [[`02872400`](https://github.com/LekoArts/gatsby-themes/commit/0287240022c308a7d1fcc8af348ee7d21bca0dd5)]:
  - @lekoarts/themes-utils@2.0.0

## 4.0.2

### Patch Changes

- [#1030](https://github.com/LekoArts/gatsby-themes/pull/1030) [`cba0f744`](https://github.com/LekoArts/gatsby-themes/commit/cba0f7449d2914e2a02e4ec7113d9ffb0de3ceaf) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency @mdx-js/react to ^2.1.5 for gatsby-theme-emilia-core

## 4.0.1

### Patch Changes

- [`fa281b1a`](https://github.com/LekoArts/gatsby-themes/commit/fa281b1a96c04ea625cfb1e138dc08bf2e0043f2) Thanks [@LekoArts](https://github.com/LekoArts)! - Update README information and change some `package.json` details.

- Updated dependencies [[`fa281b1a`](https://github.com/LekoArts/gatsby-themes/commit/fa281b1a96c04ea625cfb1e138dc08bf2e0043f2), [`fa281b1a`](https://github.com/LekoArts/gatsby-themes/commit/fa281b1a96c04ea625cfb1e138dc08bf2e0043f2)]:
  - @lekoarts/themes-utils@1.1.1

## 4.0.0

### Major Changes

[#967](https://github.com/LekoArts/gatsby-themes/pull/967) [`ee969f3`](https://github.com/LekoArts/gatsby-themes/commit/ee969f30037fa99232292014431854773735d0a0)

In preparation for the upcoming [Gatsby 5 release](https://github.com/gatsbyjs/gatsby/discussions/36609) this release will focus on some breaking changes unrelated to the `gatsby` core package. Another new major version will follow once Gatsby 5 is out so that you can upgrade in steps.

**Features:**

- Update to [MDX 2](https://mdxjs.com/blog/v2/) and [`gatsby-plugin-mdx` 4](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/) (**Breaking Change**)
- Update [Theme UI](https://theme-ui.com/) from v0.11 to v0.15 ([Theme UI Changelog](https://github.com/system-ui/theme-ui/blob/develop/CHANGELOG.md)) (**Breaking Change**)
- Replace [`react-helmet`](https://github.com/nfl/react-helmet) with [Gatsby Head API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/) (**Breaking Change**)
- Improve performance by moving all SVG to [SVG Sprites](https://benadam.me/thoughts/react-svg-sprites/) (**Breaking Change**)

**Breaking Changes:**

- Any breaking changes from `theme-ui` between v0.11 and v0.15
- Bump `react` & `react-dom` peerDependency to `>=18.0.0`
- Removal of `siteLanguage` from `siteMetadata`
- The MDX components are not managed by `gatsby-plugin-theme-ui/components` anymore but defined in a `<MDXProvider>` in `src/components/layout`
- [`useColorSchemeMediaQuery`](https://theme-ui.com/color-modes#responding-to-the-prefers-color-scheme-media-query) in Theme UI config is set to `system`
- Removal of `body` from the `Project` type. The field `contentFilePath` was added.

**Migration:**

- Internally the necessary changes of the [gatsby-plugin-mdx migration guide](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#migrating-from-v3-to-v4) were made, but if you set the `mdx` option to `false` and/or shadowed the theme in any way, you'll need to read the migration guide to e.g. change your `gatsby-config`. You'll also need to add any `remarkPlugins` or `rehypePlugins` that the theme is adding by default.
- MDX 2 is more strict about the allowed syntax, so you'll need to [update your MDX content](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#updating-mdx-content) to be compliant.
- See [Theme UI's migration guide](https://github.com/system-ui/theme-ui/blob/develop/MIGRATING.md)
- If you shadowed a file or used `react-helmet` in any form in your site, you'll either need to migrate to the Gatsby Head API or re-install the necessary dependencies. By default, the theme no longer ships with `react-helmet` as internally everything was migrated to Gatsby Head API. To have the `lang` tag work correctly on the `<html>` element you'll need to set it by using the [`setHtmlAttributes` API](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#onRenderBody). The current starter already has this included (you can copy it from there). Thus the `<Seo>` component should only be used together with Gatsby Head API.
- The files inside the `assets` folder (`bg-pattern`, `left-arrow`, and `location`) were removed and a new `<Svg>` component was added. The `<Svg>` component is expecting a `icons.svg` file inside the `static` folder. The current starter already has this included (you can copy it from there).

### Patch Changes

- Updated dependencies [[`ee969f3`](https://github.com/LekoArts/gatsby-themes/commit/ee969f30037fa99232292014431854773735d0a0)]:
  - @lekoarts/themes-utils@1.0.0

## 3.0.12

### Patch Changes

- [#961](https://github.com/LekoArts/gatsby-themes/pull/961) [`35c58dd`](https://github.com/LekoArts/gatsby-themes/commit/35c58dd133257f4e01e61568a160b84f1377bcac) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-emilia-core

## 3.0.11

### Patch Changes

- [#935](https://github.com/LekoArts/gatsby-themes/pull/935) [`40b93a2`](https://github.com/LekoArts/gatsby-themes/commit/40b93a28bc571d366e40286586e8d816f3675325) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-emilia-core

## 3.0.10

### Patch Changes

- [#925](https://github.com/LekoArts/gatsby-themes/pull/925) [`bc8997a`](https://github.com/LekoArts/gatsby-themes/commit/bc8997ad78cbd37dcdcdfcd02e30ad4bb5272996) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Pass full `info` object to resolver

## 3.0.9

### Patch Changes

- [#906](https://github.com/LekoArts/gatsby-themes/pull/906) [`2aae68a`](https://github.com/LekoArts/gatsby-themes/commit/2aae68ac9e3b70c72f5c101b5bc3ec9798ea7690) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-emilia-core

## 3.0.8

### Patch Changes

- [#885](https://github.com/LekoArts/gatsby-themes/pull/885) [`44edc7a`](https://github.com/LekoArts/gatsby-themes/commit/44edc7a569f9aa2e38c3ae620d4dc00d7f547b73) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-emilia-core

## 3.0.7

### Patch Changes

- [#869](https://github.com/LekoArts/gatsby-themes/pull/869) [`dbe1a0e`](https://github.com/LekoArts/gatsby-themes/commit/dbe1a0e854271cc1a8f0694199b323cbe1953c52) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: Update peerDependencies to include React 18

* [#859](https://github.com/LekoArts/gatsby-themes/pull/859) [`11892d7`](https://github.com/LekoArts/gatsby-themes/commit/11892d78d5be7b7568a29800d62ab18b69ed8a0a) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-emilia-core

## 3.0.6

### Patch Changes

- [#842](https://github.com/LekoArts/gatsby-themes/pull/842) [`db31e11`](https://github.com/LekoArts/gatsby-themes/commit/db31e11895a4281f63446fcb2555756555dc33fb) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-emilia-core

## 3.0.5

### Patch Changes

- [#805](https://github.com/LekoArts/gatsby-themes/pull/805) [`79aa1e4`](https://github.com/LekoArts/gatsby-themes/commit/79aa1e48102b3e897ca082f1091c958d9265a84c) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-emilia-core

## 3.0.2

### Patch Changes

- [#777](https://github.com/LekoArts/gatsby-themes/pull/777) [`090dfc2`](https://github.com/LekoArts/gatsby-themes/commit/090dfc23e55605ba7311e7ffe14e37294d27d26b) Thanks [@LekoArts](https://github.com/LekoArts)! - chore(deps): Update gatsby-plugin-mdx and gatsby

* [#770](https://github.com/LekoArts/gatsby-themes/pull/770) [`c23c4d8`](https://github.com/LekoArts/gatsby-themes/commit/c23c4d8c1125bde28dd86759649449b197f27948) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-emilia-core

## 3.0.1

### Patch Changes

- [#710](https://github.com/LekoArts/gatsby-themes/pull/710) [`93cb821`](https://github.com/LekoArts/gatsby-themes/commit/93cb82182b5e1f6c3ba6067bf87bb019acb174ae) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency gatsby-plugin-sharp to ^4.0.1 for gatsby-theme-emilia-core

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

**Features:**

- You can now use `defer: true` in the frontmatter of your page/post to mark the page as deferred (for Deferred Static Generation)

**Migration:**

- If you used Theme UI in custom components, check the [Theme UI changelog](https://github.com/system-ui/theme-ui/blob/develop/CHANGELOG.md)
- Update CI/local environment to account for the new Node.js requirement

## 2.0.6

### Patch Changes

- [#696](https://github.com/LekoArts/gatsby-themes/pull/696) [`d0b7944`](https://github.com/LekoArts/gatsby-themes/commit/d0b79444bb75631bbbf83db0af21be811f648f60) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: Improve READMEs with more instructions

  Links to changelogs and places to ask questions were added.

## 2.0.5

### Patch Changes

- [#686](https://github.com/LekoArts/gatsby-themes/pull/686) [`67ea91f`](https://github.com/LekoArts/gatsby-themes/commit/67ea91ff1c1d6627193141b0b60be8fb80e61170) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-emilia-core

## 2.0.4

### Patch Changes

- [#657](https://github.com/LekoArts/gatsby-themes/pull/657) [`abbd114`](https://github.com/LekoArts/gatsby-themes/commit/abbd1142adecf81edea488798aca9de420ffd4c0) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-emilia-core

  | Package                                                          | Change                                                                                             |
  | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
  | [gatsby-plugin-mdx](https://togithub.com/gatsbyjs/gatsby)        | [`^2.10.1` -> `^2.13.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-mdx/2.10.1/2.13.0)        |
  | [gatsby-plugin-sharp](https://togithub.com/gatsbyjs/gatsby)      | [`^3.10.2` -> `^3.13.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-sharp/3.10.2/3.13.0)      |
  | [gatsby-source-filesystem](https://togithub.com/gatsbyjs/gatsby) | [`^3.10.0` -> `^3.13.0`](https://renovatebot.com/diffs/npm/gatsby-source-filesystem/3.10.0/3.13.0) |
  | [gatsby-transformer-sharp](https://togithub.com/gatsbyjs/gatsby) | [`^3.10.0` -> `^3.13.0`](https://renovatebot.com/diffs/npm/gatsby-transformer-sharp/3.10.0/3.13.0) |

## 2.0.3

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

## 2.0.2

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

* [#605](https://github.com/LekoArts/gatsby-themes/pull/605) [`b2822c0`](https://github.com/LekoArts/gatsby-themes/commit/b2822c0f6bef8f7d74d1846160659e8ddb0a6c36) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Don't use nullish coalescing

  Support for Node versions older than 14+

## 2.0.0

### Major Changes

[#599](https://github.com/LekoArts/gatsby-themes/pull/599) [`1785dcf`](https://github.com/LekoArts/gatsby-themes/commit/1785dcfad131ab9270c401e6a3bb450f7cb01288) Thanks [@LekoArts](https://github.com/LekoArts)!

### Breaking Changes

1. Using `lessBabel` option for `gatsby-plugin-mdx`
1. Updating `react-spring` from v8 to v9
1. Updating `theme-ui` from v0.3 to v0.9 and thus also `emotion` from v10 to v11
1. Removed `@emotion/styled`
1. Updating all Gatsby related packages to latest
1. Migrated from `gatsby-image` to `gatsby-plugin-image`
1. Removed `gatsby-plugin-typescript` & `gatsby-plugin-emotion`
1. Removed the `colorThief` node field
1. Normal CSS grid layout (instead of Masonry layout)

#### Migrating

1. The `lessBabel` option might break your setup in some edge cases. If it doesn't work, turn on the `mdx` option and choose your own config for `gatsby-plugin-mdx`
1. You can find the migration guide for `react-spring` here: https://react-spring.io/changelog#v900. The most notable change is the import that was used inside the components. From `import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"` to `import { ParallaxLayer } from "@react-spring/parallax"`
1. The changelog/migration guide for `theme-ui` is here: https://theme-ui.com/migrating and for `emotion` here: https://emotion.sh/docs/emotion-11
1. If you still want to use `@emotion/styled` you'll need to install it separately now
1. Gatsby v3 migration guide: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/
1. The theme itself is completely migrated to the new image plugin, but if you shadowed components and relied on the old structure, you'll need to migrate to `gatsby-plugin-image`: https://www.gatsbyjs.com/docs/reference/release-notes/image-migration-guide/
1. The TypeScript plugin isn't necessary anymore with Gatsby v3 -- if you want to continue to use `@emotion/styled` you'll need to add `gatsby-plugin-emotion` yourself
1. The `gatsby-plugin-image` now exposes the dominant color via the `placeholder` itself
1. The Masonry layout was a bit hacky, so I switched it to a normal CSS grid layout. You could shadow the `card` component to try something on your own. Once the CSS spec itself has a native masonry layout I'll add it back

### Improvements

- You can use the `sharp` theme option to be able to configure `gatsby-plugin-sharp` on your own (helpful for defaults for `gatsby-plugin-image`)
- Performance improvements from `react-spring` and `theme-ui` upgrades
- Eagerly load the first image in the grid (better lighthouse score)

### Updates to Starter

If you only cloned the starter (https://github.com/LekoArts/gatsby-starter-portfolio-emilia) and didn't change anything else this section will be more relevant to you.

- Conditionally add `gatsby-plugin-google-analytics`
- Add `FAST_DEV` flag
- Update to all latest Gatsby (+ plugins) versions
- Add 404 page

## 1.3.21

### Patch Changes

- [`47f747e`](https://github.com/LekoArts/gatsby-themes/commit/47f747e045962996503bf4043b0adc5a2527a855) [#559](https://github.com/LekoArts/gatsby-themes/pull/559) Thanks [@renovate](https://github.com/apps/renovate)! - Dependency updates for various packages, including theme-ui and gatsby related packages (includes improvements for `gatsby-plugin-image`)

## 1.3.20

### Patch Changes

- [`9d25527`](https://github.com/LekoArts/gatsby-themes/commit/9d25527cf2372d24682d85c44ecca02675019774) [#551](https://github.com/LekoArts/gatsby-themes/pull/551) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update packages

  You can see the details of the update here: https://github.com/LekoArts/gatsby-themes/pull/551

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.3.18](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.3.17...@lekoarts/gatsby-theme-emilia-core@1.3.18) (2020-11-11)

**Note:** Version bump only for package @lekoarts/gatsby-theme-emilia-core

## [1.3.17](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.3.16...@lekoarts/gatsby-theme-emilia-core@1.3.17) (2020-11-02)

### Bug Fixes

- **deps:** update packages ([#530](https://github.com/LekoArts/gatsby-themes/issues/530)) ([2125d8e](https://github.com/LekoArts/gatsby-themes/commit/2125d8ec904388c66d821a7db7ebca6adc9ff73c))

## [1.3.16](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.3.15...@lekoarts/gatsby-theme-emilia-core@1.3.16) (2020-10-25)

### Bug Fixes

- **deps:** update packages ([#510](https://github.com/LekoArts/gatsby-themes/issues/510)) ([06ecc65](https://github.com/LekoArts/gatsby-themes/commit/06ecc65b784e8fd27d5354761211df14f7a72749))

## [1.3.15](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.3.14...@lekoarts/gatsby-theme-emilia-core@1.3.15) (2020-10-10)

**Note:** Version bump only for package @lekoarts/gatsby-theme-emilia-core

## [1.3.14](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.3.13...@lekoarts/gatsby-theme-emilia-core@1.3.14) (2020-09-25)

### Bug Fixes

- **deps:** update packages ([#490](https://github.com/LekoArts/gatsby-themes/issues/490)) ([b3af934](https://github.com/LekoArts/gatsby-themes/commit/b3af934ac68b4f9fb7492cc3da7707392325175b))

## [1.3.13](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.3.12...@lekoarts/gatsby-theme-emilia-core@1.3.13) (2020-09-16)

### Bug Fixes

- **deps:** update packages ([#484](https://github.com/LekoArts/gatsby-themes/issues/484)) ([006cdc4](https://github.com/LekoArts/gatsby-themes/commit/006cdc4b8623595b14f6571fe694671a77a6a9dc))

## [1.3.12](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.3.11...@lekoarts/gatsby-theme-emilia-core@1.3.12) (2020-09-10)

### Bug Fixes

- **deps:** update packages ([#481](https://github.com/LekoArts/gatsby-themes/issues/481)) ([cf206a2](https://github.com/LekoArts/gatsby-themes/commit/cf206a241867ede738be2b3a1b856ec3e85c010e))

## [1.3.11](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.3.10...@lekoarts/gatsby-theme-emilia-core@1.3.11) (2020-08-27)

### Bug Fixes

- **deps:** update packages ([#458](https://github.com/LekoArts/gatsby-themes/issues/458)) ([dcfb106](https://github.com/LekoArts/gatsby-themes/commit/dcfb1060ee90a928ae28840906b6f3b706218ad8))
- **deps:** update packages ([#461](https://github.com/LekoArts/gatsby-themes/issues/461)) ([6e4e35e](https://github.com/LekoArts/gatsby-themes/commit/6e4e35e21b502a9a3b9305785b372f03a7741ce7))
- **deps:** update packages ([#464](https://github.com/LekoArts/gatsby-themes/issues/464)) ([cfa1d43](https://github.com/LekoArts/gatsby-themes/commit/cfa1d43fd03d860930005359907b0bab1278e243))

## [1.3.10](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.3.9...@lekoarts/gatsby-theme-emilia-core@1.3.10) (2020-07-09)

### Bug Fixes

- **deps:** update dependency gatsby-plugin-sharp to ^2.6.18 ([#445](https://github.com/LekoArts/gatsby-themes/issues/445)) ([5aad537](https://github.com/LekoArts/gatsby-themes/commit/5aad53719cd6049a1f9cfbecaf730ded952031d3))

## [1.3.9](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.3.8...@lekoarts/gatsby-theme-emilia-core@1.3.9) (2020-07-04)

### Bug Fixes

- remove folder creation in onPreBootstrap step ([#440](https://github.com/LekoArts/gatsby-themes/issues/440)) ([ba92910](https://github.com/LekoArts/gatsby-themes/commit/ba9291019db6945726274db34f6b272873a40eca))

## [1.3.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.3.7...@lekoarts/gatsby-theme-emilia-core@1.3.8) (2020-07-03)

### Bug Fixes

- **deps:** update packages ([#437](https://github.com/LekoArts/gatsby-themes/issues/437)) ([5e27caf](https://github.com/LekoArts/gatsby-themes/commit/5e27caf74c2eae0e7c158fa5a15bd52ae2069ee7))

## [1.3.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.3.6...@lekoarts/gatsby-theme-emilia-core@1.3.7) (2020-07-02)

### Bug Fixes

- **deps:** update packages ([#429](https://github.com/LekoArts/gatsby-themes/issues/429)) ([f25dfb6](https://github.com/LekoArts/gatsby-themes/commit/f25dfb6105669f62468abc63ceb73c2fbbb73065))

## [1.3.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.3.5...@lekoarts/gatsby-theme-emilia-core@1.3.6) (2020-06-08)

### Bug Fixes

- **deps:** update packages ([#408](https://github.com/LekoArts/gatsby-themes/issues/408)) ([11b89ad](https://github.com/LekoArts/gatsby-themes/commit/11b89ad8bb0a59dc3fe95941bca57d83a1716e80))

## [1.3.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.3.4...@lekoarts/gatsby-theme-emilia-core@1.3.5) (2020-05-29)

### Bug Fixes

- **deps:** update packages ([#403](https://github.com/LekoArts/gatsby-themes/issues/403)) ([4275401](https://github.com/LekoArts/gatsby-themes/commit/427540138f6c8687dfff4163679a222ba5d49c8f))

## [1.3.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.3.3...@lekoarts/gatsby-theme-emilia-core@1.3.4) (2020-05-12)

**Note:** Version bump only for package @lekoarts/gatsby-theme-emilia-core

## [1.3.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.3.2...@lekoarts/gatsby-theme-emilia-core@1.3.3) (2020-05-04)

### Bug Fixes

- **deps:** update packages ([#394](https://github.com/LekoArts/gatsby-themes/issues/394)) ([c047fce](https://github.com/LekoArts/gatsby-themes/commit/c047fce748e9c85604a5fb2f104918d455b96580))

## [1.3.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.3.1...@lekoarts/gatsby-theme-emilia-core@1.3.2) (2020-05-02)

**Note:** Version bump only for package @lekoarts/gatsby-theme-emilia-core

## [1.3.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.3.0...@lekoarts/gatsby-theme-emilia-core@1.3.1) (2020-04-28)

### Bug Fixes

- **deps:** update gatsby ([#378](https://github.com/LekoArts/gatsby-themes/issues/378)) ([8238565](https://github.com/LekoArts/gatsby-themes/commit/82385658f18c983b4ca4d83233660e9f4492a4a9))

# [1.3.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.2.6...@lekoarts/gatsby-theme-emilia-core@1.3.0) (2020-04-27)

### Features

- Update theme-ui to v0.3.x ([#371](https://github.com/LekoArts/gatsby-themes/issues/371)) ([67a05ac](https://github.com/LekoArts/gatsby-themes/commit/67a05ac3e1deaddfe38591739e7f50f56d49d109)), closes [/theme-ui.com/migrating#v03](https://github.com//theme-ui.com/migrating/issues/v03) [#262](https://github.com/LekoArts/gatsby-themes/issues/262)

## [1.2.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.2.5...@lekoarts/gatsby-theme-emilia-core@1.2.6) (2020-04-24)

### Bug Fixes

- **deps:** update gatsby ([#364](https://github.com/LekoArts/gatsby-themes/issues/364)) ([aac08a8](https://github.com/LekoArts/gatsby-themes/commit/aac08a809b86de28f78d2db95dc5651a0a8e640b))

## [1.2.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.2.4...@lekoarts/gatsby-theme-emilia-core@1.2.5) (2020-04-13)

### Bug Fixes

- **deps:** update gatsby ([#353](https://github.com/LekoArts/gatsby-themes/issues/353)) ([4550ff3](https://github.com/LekoArts/gatsby-themes/commit/4550ff3a79ba415a4f019019300fea47d24b16c8))

## [1.2.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.2.3...@lekoarts/gatsby-theme-emilia-core@1.2.4) (2020-04-12)

### Bug Fixes

- **deps:** update gatsby ([#343](https://github.com/LekoArts/gatsby-themes/issues/343)) ([6f4f07f](https://github.com/LekoArts/gatsby-themes/commit/6f4f07f0d6570610a3d17bb60472a52ac402693d))

## [1.2.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.2.2...@lekoarts/gatsby-theme-emilia-core@1.2.3) (2020-04-01)

**Note:** Version bump only for package @lekoarts/gatsby-theme-emilia-core

## [1.2.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.2.1...@lekoarts/gatsby-theme-emilia-core@1.2.2) (2020-03-31)

### Bug Fixes

- **deps:** update gatsby ([#305](https://github.com/LekoArts/gatsby-themes/issues/305)) ([f3a5e36](https://github.com/LekoArts/gatsby-themes/commit/f3a5e369b6ce1e3b6c046287fe0c1511fa9db758))
- **deps:** update gatsby ([#312](https://github.com/LekoArts/gatsby-themes/issues/312)) ([5a93a50](https://github.com/LekoArts/gatsby-themes/commit/5a93a509d33cc1738de8cfb54a1690ae8dba3151))
- **deps:** update gatsby ([#319](https://github.com/LekoArts/gatsby-themes/issues/319)) ([b7c3dcd](https://github.com/LekoArts/gatsby-themes/commit/b7c3dcdfd54a3cd8291b3dca3868be2af738c1a5))
- **deps:** update gatsby ([#330](https://github.com/LekoArts/gatsby-themes/issues/330)) ([af9b834](https://github.com/LekoArts/gatsby-themes/commit/af9b834102b2e15689557c861f83902b3cb2a728))
- **deps:** update mdx to ^1.5.8 ([#331](https://github.com/LekoArts/gatsby-themes/issues/331)) ([9580e68](https://github.com/LekoArts/gatsby-themes/commit/9580e681f589d60aa1384c5b8d9049ecbde70ea2))

## [1.2.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.2.0...@lekoarts/gatsby-theme-emilia-core@1.2.1) (2020-03-04)

### Bug Fixes

- **deps:** update gatsby ([#297](https://github.com/LekoArts/gatsby-themes/issues/297)) ([1c2cd69](https://github.com/LekoArts/gatsby-themes/commit/1c2cd695d7e2abbc820ce81a37fc20f23ab9f7ce))
- **deps:** update gatsby ([#298](https://github.com/LekoArts/gatsby-themes/issues/298)) ([a904526](https://github.com/LekoArts/gatsby-themes/commit/a904526aed9c86fa291866fc85f0d0bca11112b6))

# [1.2.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.1.4...@lekoarts/gatsby-theme-emilia-core@1.2.0) (2020-02-27)

### Features

- Add `formatString` option ([#289](https://github.com/LekoArts/gatsby-themes/issues/289)) ([4714efb](https://github.com/LekoArts/gatsby-themes/commit/4714efbab2156eb853e94958f0b078f28dd065dc))

## [1.1.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.1.3...@lekoarts/gatsby-theme-emilia-core@1.1.4) (2020-02-27)

### Bug Fixes

- **deps:** update gatsby ([#278](https://github.com/LekoArts/gatsby-themes/issues/278)) ([8d8d8e4](https://github.com/LekoArts/gatsby-themes/commit/8d8d8e48bdeac04a07a74682cbadd4927b3ec101))
- **deps:** update mdx to ^1.5.7 ([#288](https://github.com/LekoArts/gatsby-themes/issues/288)) ([feac925](https://github.com/LekoArts/gatsby-themes/commit/feac9250092047dce9a2d9bfe0fe56a53a547256))

## [1.1.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.1.2...@lekoarts/gatsby-theme-emilia-core@1.1.3) (2020-02-16)

### Bug Fixes

- **deps:** update dependency gatsby-plugin-sharp to ^2.4.0 ([#246](https://github.com/LekoArts/gatsby-themes/issues/246)) ([19a6fbe](https://github.com/LekoArts/gatsby-themes/commit/19a6fbe8c4313fd03c2dc3f5c69a886ceb56d699))
- **deps:** update gatsby ([#260](https://github.com/LekoArts/gatsby-themes/issues/260)) ([5a779f3](https://github.com/LekoArts/gatsby-themes/commit/5a779f32d548e0f4cfb63f6534f81c949123fa67))

## [1.1.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.1.1...@lekoarts/gatsby-theme-emilia-core@1.1.2) (2020-01-23)

### Bug Fixes

- **deps:** update gatsby ([#229](https://github.com/LekoArts/gatsby-themes/issues/229)) ([9292484](https://github.com/LekoArts/gatsby-themes/commit/9292484599ba48cc622696a4b38a7f170c91df86))

## [1.1.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.1.0...@lekoarts/gatsby-theme-emilia-core@1.1.1) (2020-01-17)

### Bug Fixes

- **deps:** update gatsby ([#224](https://github.com/LekoArts/gatsby-themes/issues/224)) ([b8c544a](https://github.com/LekoArts/gatsby-themes/commit/b8c544a0172180b246cd17c3385dc8e55efef981))
- **deps:** update mdx to ^1.5.5 ([#198](https://github.com/LekoArts/gatsby-themes/issues/198)) ([052d711](https://github.com/LekoArts/gatsby-themes/commit/052d711c2a56ecaf7a0f10f308b525cd963a9bc2))

# [1.1.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.0.13...@lekoarts/gatsby-theme-emilia-core@1.1.0) (2020-01-07)

### Features

- **gatsby-theme-emilia-core:** Custom slug for projects via frontmatter ([ccdaa1a](https://github.com/LekoArts/gatsby-themes/commit/ccdaa1aab2137f8ac76017723f50c582edae3a0b))

## [1.0.13](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.0.12...@lekoarts/gatsby-theme-emilia-core@1.0.13) (2019-12-31)

### Bug Fixes

- **deps:** update gatsby ([#192](https://github.com/LekoArts/gatsby-themes/issues/192)) ([77916ac](https://github.com/LekoArts/gatsby-themes/commit/77916acb51169bbc2e79af70d0b5ee93d1592a2f))
- **deps:** update gatsby ([#197](https://github.com/LekoArts/gatsby-themes/issues/197)) ([a194a3a](https://github.com/LekoArts/gatsby-themes/commit/a194a3a9e8e5ef034189a51e69624700408caebd))

## [1.0.12](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.0.11...@lekoarts/gatsby-theme-emilia-core@1.0.12) (2019-12-03)

### Bug Fixes

- **deps:** update gatsby ([#178](https://github.com/LekoArts/gatsby-themes/issues/178)) ([6ede2c3](https://github.com/LekoArts/gatsby-themes/commit/6ede2c3654f5baa6f1c53f5bb73d046fc257c0af))

## [1.0.11](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.0.10...@lekoarts/gatsby-theme-emilia-core@1.0.11) (2019-11-25)

### Bug Fixes

- **deps:** update gatsby ([#166](https://github.com/LekoArts/gatsby-themes/issues/166)) ([8b5cd32](https://github.com/LekoArts/gatsby-themes/commit/8b5cd32222495e1433b6c508697b1853ba99b939))

## [1.0.10](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.0.9...@lekoarts/gatsby-theme-emilia-core@1.0.10) (2019-11-16)

### Bug Fixes

- **deps:** update gatsby ([#149](https://github.com/LekoArts/gatsby-themes/issues/149)) ([307df50](https://github.com/LekoArts/gatsby-themes/commit/307df50))

## [1.0.9](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.0.8...@lekoarts/gatsby-theme-emilia-core@1.0.9) (2019-11-04)

### Bug Fixes

- **deps:** update gatsby ([#137](https://github.com/LekoArts/gatsby-themes/issues/137)) ([8619dc2](https://github.com/LekoArts/gatsby-themes/commit/8619dc2))

## [1.0.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.0.7...@lekoarts/gatsby-theme-emilia-core@1.0.8) (2019-10-31)

### Bug Fixes

- **deps:** update dependency gatsby-plugin-sharp to ^2.2.32 ([#120](https://github.com/LekoArts/gatsby-themes/issues/120)) ([07a42de](https://github.com/LekoArts/gatsby-themes/commit/07a42de))
- **deps:** update gatsby ([#126](https://github.com/LekoArts/gatsby-themes/issues/126)) ([0e8ca8b](https://github.com/LekoArts/gatsby-themes/commit/0e8ca8b))

## [1.0.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.0.6...@lekoarts/gatsby-theme-emilia-core@1.0.7) (2019-10-17)

### Bug Fixes

- **deps:** update gatsby ([#112](https://github.com/LekoArts/gatsby-themes/issues/112)) ([24dcb25](https://github.com/LekoArts/gatsby-themes/commit/24dcb25))
- **deps:** update mdx to ^1.5.1 ([#113](https://github.com/LekoArts/gatsby-themes/issues/113)) ([31276f9](https://github.com/LekoArts/gatsby-themes/commit/31276f9))

## [1.0.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.0.5...@lekoarts/gatsby-theme-emilia-core@1.0.6) (2019-10-11)

### Bug Fixes

- **deps:** update gatsby ([#105](https://github.com/LekoArts/gatsby-themes/issues/105)) ([b345ce0](https://github.com/LekoArts/gatsby-themes/commit/b345ce0))
- **deps:** update gatsby ([#98](https://github.com/LekoArts/gatsby-themes/issues/98)) ([ea669d1](https://github.com/LekoArts/gatsby-themes/commit/ea669d1))
- **deps:** update mdx to ^1.5.0 ([#99](https://github.com/LekoArts/gatsby-themes/issues/99)) ([76c4a9a](https://github.com/LekoArts/gatsby-themes/commit/76c4a9a))

## [1.0.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.0.4...@lekoarts/gatsby-theme-emilia-core@1.0.5) (2019-09-24)

### Bug Fixes

- **deps:** update gatsby ([#89](https://github.com/LekoArts/gatsby-themes/issues/89)) ([94be8d9](https://github.com/LekoArts/gatsby-themes/commit/94be8d9))

## [1.0.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.0.3...@lekoarts/gatsby-theme-emilia-core@1.0.4) (2019-09-16)

### Bug Fixes

- **deps:** update gatsby ([#82](https://github.com/LekoArts/gatsby-themes/issues/82)) ([283ef30](https://github.com/LekoArts/gatsby-themes/commit/283ef30))
- **deps:** update mdx to ^1.4.5 ([#83](https://github.com/LekoArts/gatsby-themes/issues/83)) ([4ee0644](https://github.com/LekoArts/gatsby-themes/commit/4ee0644))

## [1.0.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.0.2...@lekoarts/gatsby-theme-emilia-core@1.0.3) (2019-09-10)

### Bug Fixes

- **gatsby-theme-emilia:** Make avatar configurable ([#78](https://github.com/LekoArts/gatsby-themes/issues/78)) ([479a6e9](https://github.com/LekoArts/gatsby-themes/commit/479a6e9)), closes [#77](https://github.com/LekoArts/gatsby-themes/issues/77)

## [1.0.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-emilia-core@1.0.1...@lekoarts/gatsby-theme-emilia-core@1.0.2) (2019-09-09)

### Bug Fixes

- **deps:** update gatsby ([#73](https://github.com/LekoArts/gatsby-themes/issues/73)) ([c0b86e6](https://github.com/LekoArts/gatsby-themes/commit/c0b86e6))
- **deps:** update mdx to ^1.4.4 ([#74](https://github.com/LekoArts/gatsby-themes/issues/74)) ([b28517b](https://github.com/LekoArts/gatsby-themes/commit/b28517b))

## 1.0.1 (2019-09-08)

### Features

- **gatsby-theme-emilia:** Convert Emilia starter to theme ([#69](https://github.com/LekoArts/gatsby-themes/issues/69)) ([3d54047](https://github.com/LekoArts/gatsby-themes/commit/3d54047))
