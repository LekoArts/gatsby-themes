# Change Log

## 5.1.6

### Patch Changes

- [#1276](https://github.com/LekoArts/gatsby-themes/pull/1276) [`a739a35`](https://github.com/LekoArts/gatsby-themes/commit/a739a35cc53f8d240040ee8f3b72b490fb17818c) Thanks [@renovate](https://github.com/apps/renovate)! - update minor and patch dependencies

## 5.1.5

### Patch Changes

- [`409bba45`](https://github.com/LekoArts/gatsby-themes/commit/409bba451d8637d04de2efc8199fa662a2595c68) Thanks [@LekoArts](https://github.com/LekoArts)! - Remove link to my Patreon page. To simplify things I disabled my Patreon. If you want to support my OSS work, please consider using GitHub sponsors or Ko-fi. Thanks!

## 5.1.4

### Patch Changes

- [#1224](https://github.com/LekoArts/gatsby-themes/pull/1224) [`9be65d4f`](https://github.com/LekoArts/gatsby-themes/commit/9be65d4f39e02082763ffda763cb2537f93acf37) Thanks [@LekoArts](https://github.com/LekoArts)! - Update URLs of deployed example

## 5.1.3

### Patch Changes

- [#1217](https://github.com/LekoArts/gatsby-themes/pull/1217) [`ae5a3477`](https://github.com/LekoArts/gatsby-themes/commit/ae5a3477d372f10f2e9973ef23cd912f2213441f) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-graphql-playground

- [`5393b80b`](https://github.com/LekoArts/gatsby-themes/commit/5393b80b41b5291b35573a89926b8a8d1945e327) Thanks [@LekoArts](https://github.com/LekoArts)! - Update unified and unist-util-visit dependencies

- Updated dependencies [[`5393b80b`](https://github.com/LekoArts/gatsby-themes/commit/5393b80b41b5291b35573a89926b8a8d1945e327)]:
  - @lekoarts/themes-utils@3.0.1

## 5.1.2

### Patch Changes

- [#1202](https://github.com/LekoArts/gatsby-themes/pull/1202) [`78924d1f`](https://github.com/LekoArts/gatsby-themes/commit/78924d1f52a9cae0c3576f9e553c67325880ee6a) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-graphql-playground to ^5.10.0

## 5.1.1

### Patch Changes

- [#1165](https://github.com/LekoArts/gatsby-themes/pull/1165) [`b350a5a5`](https://github.com/LekoArts/gatsby-themes/commit/b350a5a5a4416fe6f30a16af629f0cb898ad9b6f) Thanks [@LekoArts](https://github.com/LekoArts)! - Ensure that the color mode toggle (light/dark mode) works correctly. This is done through adding the current color mode to the `<html>` element like so:

  ```html
  <html class="theme-ui-light"></html>
  ```

  When the button is pressed it'll change to:

  ```html
  <html class="theme-ui-dark"></html>
  ```

  In theory this shouldn't be necessary, but there is a weird interaction between [Theme UI](https://theme-ui.com/) and [Gatsby Head API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/) that I currently don't have the time to deeply investigate.

- [#1164](https://github.com/LekoArts/gatsby-themes/pull/1164) [`27abea13`](https://github.com/LekoArts/gatsby-themes/commit/27abea13fad5a8834e231e505fab4067de862b30) Thanks [@LekoArts](https://github.com/LekoArts)! - Move some global styles from `<Global>` component to Theme UI's `styles.root`. This makes it easier to modify those directly through the Theme UI config.

- [#1137](https://github.com/LekoArts/gatsby-themes/pull/1137) [`a2514a8a`](https://github.com/LekoArts/gatsby-themes/commit/a2514a8afcbd72ac19060b57029a983338ee9f46) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-graphql-playground

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

## 5.0.4

### Patch Changes

- [#1116](https://github.com/LekoArts/gatsby-themes/pull/1116) [`cf7d5122`](https://github.com/LekoArts/gatsby-themes/commit/cf7d51223a73387f12cac490e2a42f068b0ded26) Thanks [@LekoArts](https://github.com/LekoArts)! - chore(deps): Various dependency updates

## 5.0.3

### Patch Changes

- [#1074](https://github.com/LekoArts/gatsby-themes/pull/1074) [`ca2d8b20`](https://github.com/LekoArts/gatsby-themes/commit/ca2d8b209203fc5811837a21eb3c14a9296da5bd) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-graphql-playground to ^5.2.0

- [#1080](https://github.com/LekoArts/gatsby-themes/pull/1080) [`296b41a1`](https://github.com/LekoArts/gatsby-themes/commit/296b41a1d783c649d4ec6bf40a32d38668ef385c) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Remove `useColorSchemeMediaQuery` entry from Theme UI configuration since the "system" setting overwrote the preference of a user. We'd need to wait for Theme UI to implement a proper "system" color mode, see https://github.com/system-ui/theme-ui/discussions/2264. If you want to have the old behavior, define your own Theme UI configuration as shown in the docs.

- [#1080](https://github.com/LekoArts/gatsby-themes/pull/1080) [`296b41a1`](https://github.com/LekoArts/gatsby-themes/commit/296b41a1d783c649d4ec6bf40a32d38668ef385c) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Improve useColorMode usage by: improving the TS types, adding a SSR fallback to the sun/moon icon toggle so that the correct one is displayed once React is hydrated

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

### Patch Changes

- Updated dependencies [[`02872400`](https://github.com/LekoArts/gatsby-themes/commit/0287240022c308a7d1fcc8af348ee7d21bca0dd5)]:
  - @lekoarts/themes-utils@2.0.0

## 4.0.3

### Patch Changes

- [#1034](https://github.com/LekoArts/gatsby-themes/pull/1034) [`60e2497f`](https://github.com/LekoArts/gatsby-themes/commit/60e2497f241ae37ea1da943724fd20f2bc7df8b0) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-graphql-playground

- [#1043](https://github.com/LekoArts/gatsby-themes/pull/1043) [`5ddaf82f`](https://github.com/LekoArts/gatsby-themes/commit/5ddaf82fc5e7643b841b60028bd7c566b6f9528f) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update theme-ui to ^0.15.3

## 4.0.2

### Patch Changes

- [`c1effd54`](https://github.com/LekoArts/gatsby-themes/commit/c1effd5435036cbf5de8c16408bd119f1e479e68) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: Change public URL from Netlify to Gatsby Cloud Hosting

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

**Breaking Changes:**

- Any breaking changes from `theme-ui` between v0.11 and v0.15
- Bump `react` & `react-dom` peerDependency to `>=18.0.0`
- Removal of `siteLanguage` from `siteMetadata`
- The MDX components are not managed by `gatsby-plugin-theme-ui/components` anymore but defined in a `<MDXProvider>` in `src/components/layout`
- [`useColorSchemeMediaQuery`](https://theme-ui.com/color-modes#responding-to-the-prefers-color-scheme-media-query) in Theme UI config is set to `system`
- Removal of `body` from the `Playground` type. The field `contentFilePath` was added.
- Changed from `@theme-ui/prism` to `@mapbox/rehype-prism`

**Migration:**

- Internally the necessary changes of the [gatsby-plugin-mdx migration guide](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#migrating-from-v3-to-v4) were made, but if you set the `mdx` option to `false` and/or shadowed the theme in any way, you'll need to read the migration guide to e.g. change your `gatsby-config`. You'll also need to add any `remarkPlugins` or `rehypePlugins` that the theme is adding by default.
- MDX 2 is more strict about the allowed syntax, so you'll need to [update your MDX content](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#updating-mdx-content) to be compliant.
- See [Theme UI's migration guide](https://github.com/system-ui/theme-ui/blob/develop/MIGRATING.md)
- If you shadowed a file or used `react-helmet` in any form in your site, you'll either need to migrate to the Gatsby Head API or re-install the necessary dependencies. By default, the theme no longer ships with `react-helmet` as internally everything was migrated to Gatsby Head API. To have the `lang` tag work correctly on the `<html>` element you'll need to set it by using the [`setHtmlAttributes` API](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#onRenderBody). The current starter already has this included (you can copy it from there). Thus the `<Seo>` component should only be used together with Gatsby Head API.

### Patch Changes

- Updated dependencies [[`ee969f3`](https://github.com/LekoArts/gatsby-themes/commit/ee969f30037fa99232292014431854773735d0a0)]:
  - @lekoarts/themes-utils@1.0.0

## 3.0.10

### Patch Changes

- [#982](https://github.com/LekoArts/gatsby-themes/pull/982) [`1a4358c`](https://github.com/LekoArts/gatsby-themes/commit/1a4358cf2eeed453479f2e4f018c36cb75690201) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-graphql-playground

## 3.0.9

### Patch Changes

- [#964](https://github.com/LekoArts/gatsby-themes/pull/964) [`87fb55e`](https://github.com/LekoArts/gatsby-themes/commit/87fb55e9df76d68dfc646e930a8ad728c4d576c1) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-graphql-playground

## 3.0.8

### Patch Changes

- [#938](https://github.com/LekoArts/gatsby-themes/pull/938) [`8566d32`](https://github.com/LekoArts/gatsby-themes/commit/8566d32c9c38a1c26749c6663b34bb2befb7cd57) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-graphql-playground

## 3.0.7

### Patch Changes

- [#925](https://github.com/LekoArts/gatsby-themes/pull/925) [`bc8997a`](https://github.com/LekoArts/gatsby-themes/commit/bc8997ad78cbd37dcdcdfcd02e30ad4bb5272996) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Pass full `info` object to resolver

## 3.0.6

### Patch Changes

- [#911](https://github.com/LekoArts/gatsby-themes/pull/911) [`d8bf673`](https://github.com/LekoArts/gatsby-themes/commit/d8bf673dddf7861240b6ac5ddb796fc5fe2a2e40) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-graphql-playground

## 3.0.5

### Patch Changes

- [#891](https://github.com/LekoArts/gatsby-themes/pull/891) [`e9aef3b`](https://github.com/LekoArts/gatsby-themes/commit/e9aef3bbf2ba03ccb76ecbacac34e61300def810) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-graphql-playground

## 3.0.4

### Patch Changes

- [#869](https://github.com/LekoArts/gatsby-themes/pull/869) [`dbe1a0e`](https://github.com/LekoArts/gatsby-themes/commit/dbe1a0e854271cc1a8f0694199b323cbe1953c52) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: Update peerDependencies to include React 18

* [#862](https://github.com/LekoArts/gatsby-themes/pull/862) [`48e0e88`](https://github.com/LekoArts/gatsby-themes/commit/48e0e88a6d7fb3df7908782782c07acb3c71cb7a) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-graphql-playground

## 3.0.3

### Patch Changes

- [#808](https://github.com/LekoArts/gatsby-themes/pull/808) [`49f7440`](https://github.com/LekoArts/gatsby-themes/commit/49f7440ea520d65bfee45dbc193078e6ed60a2e2) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-graphql-playground

## 3.0.2

### Patch Changes

- [#792](https://github.com/LekoArts/gatsby-themes/pull/792) [`75d43d0`](https://github.com/LekoArts/gatsby-themes/commit/75d43d0b01772e3e80144c245ba0e93c99ebd434) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: TypeScript updates

## 3.0.1

### Patch Changes

- [#777](https://github.com/LekoArts/gatsby-themes/pull/777) [`090dfc2`](https://github.com/LekoArts/gatsby-themes/commit/090dfc23e55605ba7311e7ffe14e37294d27d26b) Thanks [@LekoArts](https://github.com/LekoArts)! - chore(deps): Update gatsby-plugin-mdx and gatsby

* [#773](https://github.com/LekoArts/gatsby-themes/pull/773) [`a93281b`](https://github.com/LekoArts/gatsby-themes/commit/a93281bd53323afaf0cfa26a1e8f01887215953d) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-graphql-playground

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

## 2.0.6

### Patch Changes

- [#696](https://github.com/LekoArts/gatsby-themes/pull/696) [`d0b7944`](https://github.com/LekoArts/gatsby-themes/commit/d0b79444bb75631bbbf83db0af21be811f648f60) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: Improve READMEs with more instructions

  Links to changelogs and places to ask questions were added.

## 2.0.5

### Patch Changes

- [#689](https://github.com/LekoArts/gatsby-themes/pull/689) [`0daa3b2`](https://github.com/LekoArts/gatsby-themes/commit/0daa3b20b82b8bfa984fe08c58c0dc105e284205) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-graphql-playground

## 2.0.4

### Patch Changes

- [#660](https://github.com/LekoArts/gatsby-themes/pull/660) [`5deed2d`](https://github.com/LekoArts/gatsby-themes/commit/5deed2d81183f7425b502eef63f015c14b3df72a) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-graphql-playground

  | Package                                                            | Change                                                                                               |
  | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
  | [gatsby-plugin-mdx](https://togithub.com/gatsbyjs/gatsby)          | [`^2.10.1` -> `^2.13.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-mdx/2.13.0/2.13.0)          |
  | [gatsby-plugin-react-helmet](https://togithub.com/gatsbyjs/gatsby) | [`^4.10.0` -> `^4.13.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-react-helmet/4.13.0/4.13.0) |
  | [gatsby-source-filesystem](https://togithub.com/gatsbyjs/gatsby)   | [`^3.10.0` -> `^3.13.0`](https://renovatebot.com/diffs/npm/gatsby-source-filesystem/3.13.0/3.13.0)   |

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

## 2.0.0

### Major Changes

[#599](https://github.com/LekoArts/gatsby-themes/pull/599) [`1785dcf`](https://github.com/LekoArts/gatsby-themes/commit/1785dcfad131ab9270c401e6a3bb450f7cb01288) Thanks [@LekoArts](https://github.com/LekoArts)!

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

## 1.1.21

### Patch Changes

- [`47f747e`](https://github.com/LekoArts/gatsby-themes/commit/47f747e045962996503bf4043b0adc5a2527a855) [#559](https://github.com/LekoArts/gatsby-themes/pull/559) Thanks [@renovate](https://github.com/apps/renovate)! - Dependency updates for various packages, including theme-ui and gatsby related packages (includes improvements for `gatsby-plugin-image`)

## 1.1.20

### Patch Changes

- [`9d25527`](https://github.com/LekoArts/gatsby-themes/commit/9d25527cf2372d24682d85c44ecca02675019774) [#551](https://github.com/LekoArts/gatsby-themes/pull/551) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update packages

  You can see the details of the update here: https://github.com/LekoArts/gatsby-themes/pull/551

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.19](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.18...@lekoarts/gatsby-theme-graphql-playground@1.1.19) (2020-11-11)

**Note:** Version bump only for package @lekoarts/gatsby-theme-graphql-playground

## [1.1.18](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.17...@lekoarts/gatsby-theme-graphql-playground@1.1.18) (2020-11-02)

### Bug Fixes

- **deps:** update packages ([#530](https://github.com/LekoArts/gatsby-themes/issues/530)) ([2125d8e](https://github.com/LekoArts/gatsby-themes/commit/2125d8ec904388c66d821a7db7ebca6adc9ff73c))

## [1.1.17](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.16...@lekoarts/gatsby-theme-graphql-playground@1.1.17) (2020-10-25)

### Bug Fixes

- **deps:** update packages ([#510](https://github.com/LekoArts/gatsby-themes/issues/510)) ([06ecc65](https://github.com/LekoArts/gatsby-themes/commit/06ecc65b784e8fd27d5354761211df14f7a72749))

## [1.1.16](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.15...@lekoarts/gatsby-theme-graphql-playground@1.1.16) (2020-10-10)

**Note:** Version bump only for package @lekoarts/gatsby-theme-graphql-playground

## [1.1.15](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.14...@lekoarts/gatsby-theme-graphql-playground@1.1.15) (2020-09-25)

### Bug Fixes

- **deps:** update packages ([#490](https://github.com/LekoArts/gatsby-themes/issues/490)) ([b3af934](https://github.com/LekoArts/gatsby-themes/commit/b3af934ac68b4f9fb7492cc3da7707392325175b))

## [1.1.14](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.13...@lekoarts/gatsby-theme-graphql-playground@1.1.14) (2020-09-16)

### Bug Fixes

- **deps:** update packages ([#484](https://github.com/LekoArts/gatsby-themes/issues/484)) ([006cdc4](https://github.com/LekoArts/gatsby-themes/commit/006cdc4b8623595b14f6571fe694671a77a6a9dc))

## [1.1.13](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.12...@lekoarts/gatsby-theme-graphql-playground@1.1.13) (2020-09-10)

### Bug Fixes

- **deps:** update packages ([#481](https://github.com/LekoArts/gatsby-themes/issues/481)) ([cf206a2](https://github.com/LekoArts/gatsby-themes/commit/cf206a241867ede738be2b3a1b856ec3e85c010e))

## [1.1.12](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.11...@lekoarts/gatsby-theme-graphql-playground@1.1.12) (2020-08-27)

### Bug Fixes

- **deps:** update dependency re-resizable to ^6.5.4 ([#454](https://github.com/LekoArts/gatsby-themes/issues/454)) ([4e71c90](https://github.com/LekoArts/gatsby-themes/commit/4e71c90cbe8fa35faae70c6dfb879028aa26a368))
- **deps:** update packages ([#458](https://github.com/LekoArts/gatsby-themes/issues/458)) ([dcfb106](https://github.com/LekoArts/gatsby-themes/commit/dcfb1060ee90a928ae28840906b6f3b706218ad8))
- **deps:** update packages ([#461](https://github.com/LekoArts/gatsby-themes/issues/461)) ([6e4e35e](https://github.com/LekoArts/gatsby-themes/commit/6e4e35e21b502a9a3b9305785b372f03a7741ce7))
- **deps:** update packages ([#464](https://github.com/LekoArts/gatsby-themes/issues/464)) ([cfa1d43](https://github.com/LekoArts/gatsby-themes/commit/cfa1d43fd03d860930005359907b0bab1278e243))

## [1.1.11](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.10...@lekoarts/gatsby-theme-graphql-playground@1.1.11) (2020-07-09)

**Note:** Version bump only for package @lekoarts/gatsby-theme-graphql-playground

## [1.1.10](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.9...@lekoarts/gatsby-theme-graphql-playground@1.1.10) (2020-07-04)

### Bug Fixes

- remove folder creation in onPreBootstrap step ([#440](https://github.com/LekoArts/gatsby-themes/issues/440)) ([ba92910](https://github.com/LekoArts/gatsby-themes/commit/ba9291019db6945726274db34f6b272873a40eca))

## [1.1.9](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.8...@lekoarts/gatsby-theme-graphql-playground@1.1.9) (2020-07-03)

### Bug Fixes

- **deps:** update packages ([#437](https://github.com/LekoArts/gatsby-themes/issues/437)) ([5e27caf](https://github.com/LekoArts/gatsby-themes/commit/5e27caf74c2eae0e7c158fa5a15bd52ae2069ee7))
- Set default values and replace defaultProps ([#436](https://github.com/LekoArts/gatsby-themes/issues/436)) ([d62857f](https://github.com/LekoArts/gatsby-themes/commit/d62857ffd1d2d97cfa31cb6ca37cb39db48467d0))

## [1.1.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.7...@lekoarts/gatsby-theme-graphql-playground@1.1.8) (2020-07-02)

### Bug Fixes

- **deps:** update packages ([#429](https://github.com/LekoArts/gatsby-themes/issues/429)) ([f25dfb6](https://github.com/LekoArts/gatsby-themes/commit/f25dfb6105669f62468abc63ceb73c2fbbb73065))

## [1.1.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.6...@lekoarts/gatsby-theme-graphql-playground@1.1.7) (2020-06-11)

### Bug Fixes

- Normalize CSS in themes & examples ([#422](https://github.com/LekoArts/gatsby-themes/issues/422)) ([9a2600c](https://github.com/LekoArts/gatsby-themes/commit/9a2600cc45d0f6729799183116f1b87d3c943749))

## [1.1.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.5...@lekoarts/gatsby-theme-graphql-playground@1.1.6) (2020-06-08)

### Bug Fixes

- **deps:** update packages ([#408](https://github.com/LekoArts/gatsby-themes/issues/408)) ([11b89ad](https://github.com/LekoArts/gatsby-themes/commit/11b89ad8bb0a59dc3fe95941bca57d83a1716e80))

## [1.1.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.4...@lekoarts/gatsby-theme-graphql-playground@1.1.5) (2020-05-29)

### Bug Fixes

- **deps:** update packages ([#403](https://github.com/LekoArts/gatsby-themes/issues/403)) ([4275401](https://github.com/LekoArts/gatsby-themes/commit/427540138f6c8687dfff4163679a222ba5d49c8f))

## [1.1.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.3...@lekoarts/gatsby-theme-graphql-playground@1.1.4) (2020-05-12)

**Note:** Version bump only for package @lekoarts/gatsby-theme-graphql-playground

## [1.1.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.2...@lekoarts/gatsby-theme-graphql-playground@1.1.3) (2020-05-04)

### Bug Fixes

- **deps:** update packages ([#394](https://github.com/LekoArts/gatsby-themes/issues/394)) ([c047fce](https://github.com/LekoArts/gatsby-themes/commit/c047fce748e9c85604a5fb2f104918d455b96580))

## [1.1.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.1...@lekoarts/gatsby-theme-graphql-playground@1.1.2) (2020-05-02)

**Note:** Version bump only for package @lekoarts/gatsby-theme-graphql-playground

## [1.1.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.1.0...@lekoarts/gatsby-theme-graphql-playground@1.1.1) (2020-04-28)

### Bug Fixes

- **deps:** update gatsby ([#378](https://github.com/LekoArts/gatsby-themes/issues/378)) ([8238565](https://github.com/LekoArts/gatsby-themes/commit/82385658f18c983b4ca4d83233660e9f4492a4a9))
- **deps:** update mdx to ^1.5.9 ([#379](https://github.com/LekoArts/gatsby-themes/issues/379)) ([0cc9462](https://github.com/LekoArts/gatsby-themes/commit/0cc94627475b4fcdc8d6db1dff1b41c2fd658ac6))

# [1.1.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.19...@lekoarts/gatsby-theme-graphql-playground@1.1.0) (2020-04-27)

### Features

- Update theme-ui to v0.3.x ([#371](https://github.com/LekoArts/gatsby-themes/issues/371)) ([67a05ac](https://github.com/LekoArts/gatsby-themes/commit/67a05ac3e1deaddfe38591739e7f50f56d49d109)), closes [/theme-ui.com/migrating#v03](https://github.com//theme-ui.com/migrating/issues/v03) [#262](https://github.com/LekoArts/gatsby-themes/issues/262)

## [1.0.19](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.18...@lekoarts/gatsby-theme-graphql-playground@1.0.19) (2020-04-24)

### Bug Fixes

- **deps:** update gatsby ([#364](https://github.com/LekoArts/gatsby-themes/issues/364)) ([aac08a8](https://github.com/LekoArts/gatsby-themes/commit/aac08a809b86de28f78d2db95dc5651a0a8e640b))

## [1.0.18](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.17...@lekoarts/gatsby-theme-graphql-playground@1.0.18) (2020-04-13)

### Bug Fixes

- **deps:** update dependency react-helmet to v6 ([#354](https://github.com/LekoArts/gatsby-themes/issues/354)) ([117d1d5](https://github.com/LekoArts/gatsby-themes/commit/117d1d5a6989d763c89137d8a9f0fb55f55efdee))

## [1.0.17](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.16...@lekoarts/gatsby-theme-graphql-playground@1.0.17) (2020-04-13)

### Bug Fixes

- **deps:** update gatsby ([#353](https://github.com/LekoArts/gatsby-themes/issues/353)) ([4550ff3](https://github.com/LekoArts/gatsby-themes/commit/4550ff3a79ba415a4f019019300fea47d24b16c8))

## [1.0.16](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.15...@lekoarts/gatsby-theme-graphql-playground@1.0.16) (2020-04-12)

### Bug Fixes

- Use withPrefix helper in SEO component ([#346](https://github.com/LekoArts/gatsby-themes/issues/346)) ([91fc16c](https://github.com/LekoArts/gatsby-themes/commit/91fc16c3c725a2d858ee093d761530975e2173d9))

## [1.0.15](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.14...@lekoarts/gatsby-theme-graphql-playground@1.0.15) (2020-04-12)

### Bug Fixes

- **deps:** update gatsby ([#343](https://github.com/LekoArts/gatsby-themes/issues/343)) ([6f4f07f](https://github.com/LekoArts/gatsby-themes/commit/6f4f07f0d6570610a3d17bb60472a52ac402693d))

## [1.0.14](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.13...@lekoarts/gatsby-theme-graphql-playground@1.0.14) (2020-04-01)

**Note:** Version bump only for package @lekoarts/gatsby-theme-graphql-playground

## [1.0.13](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.12...@lekoarts/gatsby-theme-graphql-playground@1.0.13) (2020-03-31)

### Bug Fixes

- **deps:** update dependency re-resizable to ^6.3.2 ([#329](https://github.com/LekoArts/gatsby-themes/issues/329)) ([e66b128](https://github.com/LekoArts/gatsby-themes/commit/e66b128fbe4fc2b35525f0d31e70b794b0507f90))
- **deps:** update gatsby ([#305](https://github.com/LekoArts/gatsby-themes/issues/305)) ([f3a5e36](https://github.com/LekoArts/gatsby-themes/commit/f3a5e369b6ce1e3b6c046287fe0c1511fa9db758))
- **deps:** update gatsby ([#312](https://github.com/LekoArts/gatsby-themes/issues/312)) ([5a93a50](https://github.com/LekoArts/gatsby-themes/commit/5a93a509d33cc1738de8cfb54a1690ae8dba3151))
- **deps:** update gatsby ([#319](https://github.com/LekoArts/gatsby-themes/issues/319)) ([b7c3dcd](https://github.com/LekoArts/gatsby-themes/commit/b7c3dcdfd54a3cd8291b3dca3868be2af738c1a5))
- **deps:** update gatsby ([#330](https://github.com/LekoArts/gatsby-themes/issues/330)) ([af9b834](https://github.com/LekoArts/gatsby-themes/commit/af9b834102b2e15689557c861f83902b3cb2a728))
- **deps:** update mdx to ^1.5.8 ([#331](https://github.com/LekoArts/gatsby-themes/issues/331)) ([9580e68](https://github.com/LekoArts/gatsby-themes/commit/9580e681f589d60aa1384c5b8d9049ecbde70ea2))

## [1.0.12](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.11...@lekoarts/gatsby-theme-graphql-playground@1.0.12) (2020-03-04)

### Bug Fixes

- **deps:** update dependency @emotion/core to ^10.0.28 ([#296](https://github.com/LekoArts/gatsby-themes/issues/296)) ([8f92e72](https://github.com/LekoArts/gatsby-themes/commit/8f92e726a198026e1aa7917ab1161a941e166dbe))
- **deps:** update gatsby ([#297](https://github.com/LekoArts/gatsby-themes/issues/297)) ([1c2cd69](https://github.com/LekoArts/gatsby-themes/commit/1c2cd695d7e2abbc820ce81a37fc20f23ab9f7ce))
- **deps:** update gatsby ([#298](https://github.com/LekoArts/gatsby-themes/issues/298)) ([a904526](https://github.com/LekoArts/gatsby-themes/commit/a904526aed9c86fa291866fc85f0d0bca11112b6))

## [1.0.11](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.10...@lekoarts/gatsby-theme-graphql-playground@1.0.11) (2020-02-27)

### Bug Fixes

- **deps:** update gatsby ([#278](https://github.com/LekoArts/gatsby-themes/issues/278)) ([8d8d8e4](https://github.com/LekoArts/gatsby-themes/commit/8d8d8e48bdeac04a07a74682cbadd4927b3ec101))
- **deps:** update mdx to ^1.5.7 ([#288](https://github.com/LekoArts/gatsby-themes/issues/288)) ([feac925](https://github.com/LekoArts/gatsby-themes/commit/feac9250092047dce9a2d9bfe0fe56a53a547256))

## [1.0.10](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.9...@lekoarts/gatsby-theme-graphql-playground@1.0.10) (2020-02-16)

### Bug Fixes

- **deps:** update dependency re-resizable to ^6.2.0 ([#271](https://github.com/LekoArts/gatsby-themes/issues/271)) ([6b558b8](https://github.com/LekoArts/gatsby-themes/commit/6b558b89b3f044d93ec7482d07a4c6efa2e028c9))
- **deps:** update gatsby ([#260](https://github.com/LekoArts/gatsby-themes/issues/260)) ([5a779f3](https://github.com/LekoArts/gatsby-themes/commit/5a779f32d548e0f4cfb63f6534f81c949123fa67))

## [1.0.9](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.8...@lekoarts/gatsby-theme-graphql-playground@1.0.9) (2020-01-23)

### Bug Fixes

- Various fixes about TypeScript, typos, comments ([#235](https://github.com/LekoArts/gatsby-themes/issues/235)) ([2a429c2](https://github.com/LekoArts/gatsby-themes/commit/2a429c2c49ed7a07ec231248372929bb2f18ab91))

## [1.0.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.7...@lekoarts/gatsby-theme-graphql-playground@1.0.8) (2020-01-17)

### Bug Fixes

- Delete unused file and use React.Fragment instead of <> ([f4e36ca](https://github.com/LekoArts/gatsby-themes/commit/f4e36caef6637c0977f0894d4679caa08fa363d1))
- **deps:** update gatsby ([#224](https://github.com/LekoArts/gatsby-themes/issues/224)) ([b8c544a](https://github.com/LekoArts/gatsby-themes/commit/b8c544a0172180b246cd17c3385dc8e55efef981))
- **deps:** update mdx to ^1.5.5 ([#198](https://github.com/LekoArts/gatsby-themes/issues/198)) ([052d711](https://github.com/LekoArts/gatsby-themes/commit/052d711c2a56ecaf7a0f10f308b525cd963a9bc2))

## [1.0.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.6...@lekoarts/gatsby-theme-graphql-playground@1.0.7) (2019-12-31)

### Bug Fixes

- **deps:** update emotion monorepo to ^10.0.27 ([#196](https://github.com/LekoArts/gatsby-themes/issues/196)) ([53f019e](https://github.com/LekoArts/gatsby-themes/commit/53f019ed5e0718367dcb2458480f42795cfa4efe))
- **deps:** update gatsby ([#192](https://github.com/LekoArts/gatsby-themes/issues/192)) ([77916ac](https://github.com/LekoArts/gatsby-themes/commit/77916acb51169bbc2e79af70d0b5ee93d1592a2f))
- **deps:** update gatsby ([#197](https://github.com/LekoArts/gatsby-themes/issues/197)) ([a194a3a](https://github.com/LekoArts/gatsby-themes/commit/a194a3a9e8e5ef034189a51e69624700408caebd))
- **deps:** update theme ui ([#193](https://github.com/LekoArts/gatsby-themes/issues/193)) ([cfea6ee](https://github.com/LekoArts/gatsby-themes/commit/cfea6ee10d392cfc40190ed869ce5891221cd7da))
- **deps:** update theme ui ([#199](https://github.com/LekoArts/gatsby-themes/issues/199)) ([47bb84a](https://github.com/LekoArts/gatsby-themes/commit/47bb84a5b8da618e8b083632493c97a91c442a89))

## [1.0.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.5...@lekoarts/gatsby-theme-graphql-playground@1.0.6) (2019-12-03)

### Bug Fixes

- **deps:** update dependency re-resizable to ^6.1.1 ([#177](https://github.com/LekoArts/gatsby-themes/issues/177)) ([7c68497](https://github.com/LekoArts/gatsby-themes/commit/7c68497529735f9a73c6ba3d0fcab80ad4353de0))
- **deps:** update gatsby ([#178](https://github.com/LekoArts/gatsby-themes/issues/178)) ([6ede2c3](https://github.com/LekoArts/gatsby-themes/commit/6ede2c3654f5baa6f1c53f5bb73d046fc257c0af))

## [1.0.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.4...@lekoarts/gatsby-theme-graphql-playground@1.0.5) (2019-11-25)

### Bug Fixes

- **deps:** update gatsby ([#166](https://github.com/LekoArts/gatsby-themes/issues/166)) ([8b5cd32](https://github.com/LekoArts/gatsby-themes/commit/8b5cd32222495e1433b6c508697b1853ba99b939))
- **deps:** update theme ui ([#158](https://github.com/LekoArts/gatsby-themes/issues/158)) ([ef07342](https://github.com/LekoArts/gatsby-themes/commit/ef07342deed95faf403f3ce07fe5b2a8f9996ef0))

## [1.0.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.3...@lekoarts/gatsby-theme-graphql-playground@1.0.4) (2019-11-16)

### Bug Fixes

- **deps:** update dependency @mdx-js/react to ^1.5.1 ([#148](https://github.com/LekoArts/gatsby-themes/issues/148)) ([69a9da1](https://github.com/LekoArts/gatsby-themes/commit/69a9da1))
- **deps:** update gatsby ([#149](https://github.com/LekoArts/gatsby-themes/issues/149)) ([307df50](https://github.com/LekoArts/gatsby-themes/commit/307df50))

## [1.0.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.2...@lekoarts/gatsby-theme-graphql-playground@1.0.3) (2019-11-06)

**Note:** Version bump only for package @lekoarts/gatsby-theme-graphql-playground

## [1.0.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-graphql-playground@1.0.1...@lekoarts/gatsby-theme-graphql-playground@1.0.2) (2019-11-04)

### Bug Fixes

- Add missing React Helmet deps and plugin ([e6c6b77](https://github.com/LekoArts/gatsby-themes/commit/e6c6b77))

## 1.0.1 (2019-11-04)

### Features

- Add gatsby-theme-graphql-playground ([#138](https://github.com/LekoArts/gatsby-themes/issues/138)) ([2eea13c](https://github.com/LekoArts/gatsby-themes/commit/2eea13c))
