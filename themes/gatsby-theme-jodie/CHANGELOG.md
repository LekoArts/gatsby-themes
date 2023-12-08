# Change Log

## 5.1.5

### Patch Changes

- [#1261](https://github.com/LekoArts/gatsby-themes/pull/1261) [`39a25f5`](https://github.com/LekoArts/gatsby-themes/commit/39a25f5123590976567d6f0b561cd220a55dc06e) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependency gatsby-plugin-image to `^3.12.3`

- Updated dependencies [[`68a3f6b`](https://github.com/LekoArts/gatsby-themes/commit/68a3f6b9375394477760e74217b67385f7faed66)]:
  - @lekoarts/gatsby-theme-jodie-core@5.1.5

## 5.1.4

### Patch Changes

- [`409bba45`](https://github.com/LekoArts/gatsby-themes/commit/409bba451d8637d04de2efc8199fa662a2595c68) Thanks [@LekoArts](https://github.com/LekoArts)! - Remove link to my Patreon page. To simplify things I disabled my Patreon. If you want to support my OSS work, please consider using GitHub sponsors or Ko-fi. Thanks!

- Updated dependencies [[`409bba45`](https://github.com/LekoArts/gatsby-themes/commit/409bba451d8637d04de2efc8199fa662a2595c68)]:
  - @lekoarts/gatsby-theme-jodie-core@5.1.4

## 5.1.3

### Patch Changes

- [#1221](https://github.com/LekoArts/gatsby-themes/pull/1221) [`b2bf4123`](https://github.com/LekoArts/gatsby-themes/commit/b2bf412372c416563222e9cd161d5bf5a71acd74) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency gatsby-plugin-image to ^3.12.0 for gatsby-theme-jodie

- Updated dependencies [[`47bc85b6`](https://github.com/LekoArts/gatsby-themes/commit/47bc85b67bc8d5d726410cfa3df7c32b9bdf7ae3)]:
  - @lekoarts/gatsby-theme-jodie-core@5.1.3

## 5.1.1

### Patch Changes

- [#1138](https://github.com/LekoArts/gatsby-themes/pull/1138) [`2b21e8a7`](https://github.com/LekoArts/gatsby-themes/commit/2b21e8a7428810533eb22feeaf12ac2ea90f8546) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-jodie

- [#1164](https://github.com/LekoArts/gatsby-themes/pull/1164) [`27abea13`](https://github.com/LekoArts/gatsby-themes/commit/27abea13fad5a8834e231e505fab4067de862b30) Thanks [@LekoArts](https://github.com/LekoArts)! - This theme had a fixed `font-size` of `18px` on the `<html>` element. This is a **bad** accessibility practice.
  This explicitly set `font-size` is removed now.

  This will make the overall font sizes and spacing for the theme smaller (since all other font sizes and padding/margin are derived from the root `font-size` through `rem`).

  If you need the old font styles, you can adjust the [`fontSizes` inside the Theme UI configuration](https://theme-ui.com/theme-spec#font-sizes-typographic-scale).

  Currently, the `fontSizes` array inside the Theme UI configuration you're using is:

  ```js
  const fontSizes = [
    "0.875rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "1.875rem",
    "2.25rem",
    "3rem",
    "4rem",
    "4.5rem",
  ];
  ```

  Previously, the `font-size` was set like this:

  ```css
  html {
    font-size: 18px;
  }
  ```

  So for the normal base of `16px`, `18px` is `1.125rem`. So you could change it to this:

  ```js
  const fontSizes = [
    "1rem",
    "1.125rem",
    "1.375rem",
    "1.625rem",
    "2rem",
    "2.375rem",
    "3.125rem",
    "4.125rem",
    "4.625rem",
  ];
  ```

- [#1164](https://github.com/LekoArts/gatsby-themes/pull/1164) [`27abea13`](https://github.com/LekoArts/gatsby-themes/commit/27abea13fad5a8834e231e505fab4067de862b30) Thanks [@LekoArts](https://github.com/LekoArts)! - Move some global styles from `<Global>` component to Theme UI's `styles.root`. This makes it easier to modify those directly through the Theme UI config.

- [#1163](https://github.com/LekoArts/gatsby-themes/pull/1163) [`641c865d`](https://github.com/LekoArts/gatsby-themes/commit/641c865d6f6c44936e6d7f7ca695362f8f0924a1) Thanks [@LekoArts](https://github.com/LekoArts)! - fix(gatsby-theme-jodie): Correct CSS for <img> on custom pages

- Updated dependencies [[`d3d85067`](https://github.com/LekoArts/gatsby-themes/commit/d3d85067e57b7fb95817a510e307b99598aaaa43)]:
  - @lekoarts/gatsby-theme-jodie-core@5.1.1

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

- Updated dependencies [[`02844608`](https://github.com/LekoArts/gatsby-themes/commit/02844608a2ebcbdbc12d8bba27c795ab350386e6), [`02844608`](https://github.com/LekoArts/gatsby-themes/commit/02844608a2ebcbdbc12d8bba27c795ab350386e6)]:
  - @lekoarts/gatsby-theme-jodie-core@5.1.0

## 5.0.4

### Patch Changes

- [#1116](https://github.com/LekoArts/gatsby-themes/pull/1116) [`cf7d5122`](https://github.com/LekoArts/gatsby-themes/commit/cf7d51223a73387f12cac490e2a42f068b0ded26) Thanks [@LekoArts](https://github.com/LekoArts)! - chore(deps): Various dependency updates

- Updated dependencies [[`cf7d5122`](https://github.com/LekoArts/gatsby-themes/commit/cf7d51223a73387f12cac490e2a42f068b0ded26)]:
  - @lekoarts/gatsby-theme-jodie-core@5.0.4

## 5.0.3

### Patch Changes

- [#1069](https://github.com/LekoArts/gatsby-themes/pull/1069) [`5b1c7d5a`](https://github.com/LekoArts/gatsby-themes/commit/5b1c7d5ae4488694d910dd3b5ad4c34a001fada8) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency gatsby-plugin-image to ^3.3.2 for gatsby-theme-jodie

- [#1080](https://github.com/LekoArts/gatsby-themes/pull/1080) [`296b41a1`](https://github.com/LekoArts/gatsby-themes/commit/296b41a1d783c649d4ec6bf40a32d38668ef385c) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Remove `useColorSchemeMediaQuery` entry from Theme UI configuration since the "system" setting overwrote the preference of a user. We'd need to wait for Theme UI to implement a proper "system" color mode, see https://github.com/system-ui/theme-ui/discussions/2264. If you want to have the old behavior, define your own Theme UI configuration as shown in the docs.

- [#1080](https://github.com/LekoArts/gatsby-themes/pull/1080) [`296b41a1`](https://github.com/LekoArts/gatsby-themes/commit/296b41a1d783c649d4ec6bf40a32d38668ef385c) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Improve useColorMode usage by: improving the TS types, adding a SSR fallback to the sun/moon icon toggle so that the correct one is displayed once React is hydrated

- Updated dependencies [[`6777294a`](https://github.com/LekoArts/gatsby-themes/commit/6777294a68c885b039d98236d636033aa71f19c5)]:
  - @lekoarts/gatsby-theme-jodie-core@5.0.3

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
  - @lekoarts/gatsby-theme-jodie-core@5.0.0

## 4.0.2

### Patch Changes

- [#1043](https://github.com/LekoArts/gatsby-themes/pull/1043) [`5ddaf82f`](https://github.com/LekoArts/gatsby-themes/commit/5ddaf82fc5e7643b841b60028bd7c566b6f9528f) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update theme-ui to ^0.15.3

- [#1028](https://github.com/LekoArts/gatsby-themes/pull/1028) [`fcda23c5`](https://github.com/LekoArts/gatsby-themes/commit/fcda23c5c6af6b87dde614bfa032648977f177f5) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency @emotion/react to ^11.10.5 for gatsby-theme-jodie

- Updated dependencies [[`28747a5d`](https://github.com/LekoArts/gatsby-themes/commit/28747a5d291aa0439738ff74c45e934772fc971b)]:
  - @lekoarts/gatsby-theme-jodie-core@4.0.2

## 4.0.1

### Patch Changes

- [`fa281b1a`](https://github.com/LekoArts/gatsby-themes/commit/fa281b1a96c04ea625cfb1e138dc08bf2e0043f2) Thanks [@LekoArts](https://github.com/LekoArts)! - Update README information and change some `package.json` details.

- Updated dependencies [[`fa281b1a`](https://github.com/LekoArts/gatsby-themes/commit/fa281b1a96c04ea625cfb1e138dc08bf2e0043f2)]:
  - @lekoarts/gatsby-theme-jodie-core@4.0.1

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
- [`useColorSchemeMediaQuery`](https://theme-ui.com/color-modes#responding-to-the-prefers-color-scheme-media-query) in Theme UI config is set to `system`
- Removal of `body` from the `Project` and `Page` type. The field `contentFilePath` was added.
- Removal of `gatsby-omni-font-loader`
- Removal of `gatsby-plugin-theme-ui/components` and `@theme-ui/prism`. If you want to have `<code>` styles, re-add them to your project again (e.g. by using `@theme-ui/prism` or `@mapbox/rehype-prism` with `gatsby-plugin-mdx`)

**Non-Breaking Changes:**

- The homepage images are now served with `[AUTO, WEBP, AVIF]` (previously it was `[AUTO, WEBP]`)

**Migration:**

- Internally the necessary changes of the [gatsby-plugin-mdx migration guide](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#migrating-from-v3-to-v4) were made, but if you set the `mdx` option to `false` and/or shadowed the theme in any way, you'll need to read the migration guide to e.g. change your `gatsby-config`. You'll also need to add any `remarkPlugins` or `rehypePlugins` that the theme is adding by default.
- MDX 2 is more strict about the allowed syntax, so you'll need to [update your MDX content](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#updating-mdx-content) to be compliant.
- See [Theme UI's migration guide](https://github.com/system-ui/theme-ui/blob/develop/MIGRATING.md)
- If you shadowed a file or used `react-helmet` in any form in your site, you'll either need to migrate to the Gatsby Head API or re-install the necessary dependencies. By default, the theme no longer ships with `react-helmet` as internally everything was migrated to Gatsby Head API. To have the `lang` tag work correctly on the `<html>` element you'll need to set it by using the [`setHtmlAttributes` API](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#onRenderBody). The current starter already has this included (you can copy it from there). Thus the `<Seo>` component should only be used together with Gatsby Head API.
- With the removal of `gatsby-omni-font-loader` in the example you'll now need to self-host your fonts. The current starter already has this included (you can copy it from there).

### Patch Changes

- Updated dependencies [[`ee969f3`](https://github.com/LekoArts/gatsby-themes/commit/ee969f30037fa99232292014431854773735d0a0)]:
  - @lekoarts/gatsby-theme-jodie-core@4.0.0

## 3.0.9

### Patch Changes

- [#965](https://github.com/LekoArts/gatsby-themes/pull/965) [`5af334a`](https://github.com/LekoArts/gatsby-themes/commit/5af334a96d7efb13cf4fc22b85868525a0e30b85) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-jodie

## 3.0.7

### Patch Changes

- [#912](https://github.com/LekoArts/gatsby-themes/pull/912) [`ae42b4b`](https://github.com/LekoArts/gatsby-themes/commit/ae42b4bf78ae24fddfb585cdde673320b62df7f3) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-jodie

- Updated dependencies [[`83fcc29`](https://github.com/LekoArts/gatsby-themes/commit/83fcc29bc5605ca20ac953877cd3135e3961b28b)]:
  - @lekoarts/gatsby-theme-jodie-core@3.0.7

## 3.0.6

### Patch Changes

- [#892](https://github.com/LekoArts/gatsby-themes/pull/892) [`4016afc`](https://github.com/LekoArts/gatsby-themes/commit/4016afc3085e9dbffddd73802e3a6845396b977a) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-jodie

- Updated dependencies [[`2eac6d4`](https://github.com/LekoArts/gatsby-themes/commit/2eac6d44bab4d5fb376b4a8d67d4f8ae9450c5ed)]:
  - @lekoarts/gatsby-theme-jodie-core@3.0.6

## 3.0.5

### Patch Changes

- [#863](https://github.com/LekoArts/gatsby-themes/pull/863) [`fa83c71`](https://github.com/LekoArts/gatsby-themes/commit/fa83c71b61e615540b661de212d4991c9fbe4dcc) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-jodie

* [#869](https://github.com/LekoArts/gatsby-themes/pull/869) [`dbe1a0e`](https://github.com/LekoArts/gatsby-themes/commit/dbe1a0e854271cc1a8f0694199b323cbe1953c52) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: Update peerDependencies to include React 18

* Updated dependencies [[`dbe1a0e`](https://github.com/LekoArts/gatsby-themes/commit/dbe1a0e854271cc1a8f0694199b323cbe1953c52), [`9571909`](https://github.com/LekoArts/gatsby-themes/commit/95719091f9698a5110ae6f6a7f31ffa393815eac)]:
  - @lekoarts/gatsby-theme-jodie-core@3.0.5

## 3.0.4

### Patch Changes

- [#810](https://github.com/LekoArts/gatsby-themes/pull/810) [`e3d723f`](https://github.com/LekoArts/gatsby-themes/commit/e3d723fee3823d8a90d79b2364168df351938947) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-jodie-core

* [#809](https://github.com/LekoArts/gatsby-themes/pull/809) [`ee7fc3c`](https://github.com/LekoArts/gatsby-themes/commit/ee7fc3c9f9964d764eb91dc0abc6680aff28bd86) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-jodie

* Updated dependencies [[`e3d723f`](https://github.com/LekoArts/gatsby-themes/commit/e3d723fee3823d8a90d79b2364168df351938947)]:
  - @lekoarts/gatsby-theme-jodie-core@3.0.4

## 3.0.3

### Patch Changes

- [#792](https://github.com/LekoArts/gatsby-themes/pull/792) [`75d43d0`](https://github.com/LekoArts/gatsby-themes/commit/75d43d0b01772e3e80144c245ba0e93c99ebd434) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: TypeScript updates

## 3.0.2

### Patch Changes

- [#777](https://github.com/LekoArts/gatsby-themes/pull/777) [`090dfc2`](https://github.com/LekoArts/gatsby-themes/commit/090dfc23e55605ba7311e7ffe14e37294d27d26b) Thanks [@LekoArts](https://github.com/LekoArts)! - chore(deps): Update gatsby-plugin-mdx and gatsby

* [#748](https://github.com/LekoArts/gatsby-themes/pull/748) [`0c9022d`](https://github.com/LekoArts/gatsby-themes/commit/0c9022d08d358b3fa8f2adc1325bbe52a65413a7) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-jodie

- [#774](https://github.com/LekoArts/gatsby-themes/pull/774) [`49e212c`](https://github.com/LekoArts/gatsby-themes/commit/49e212c06a8668ae7a4e7f1eb8d5bfe7de445d24) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-jodie

- Updated dependencies [[`5e7fab3`](https://github.com/LekoArts/gatsby-themes/commit/5e7fab3a383865de9d60842c079e3a6d9cf64da3), [`090dfc2`](https://github.com/LekoArts/gatsby-themes/commit/090dfc23e55605ba7311e7ffe14e37294d27d26b)]:
  - @lekoarts/gatsby-theme-jodie-core@3.0.2

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

**Bug Fixes:**

- The `slug` key on projects now correctly respects the `projectsPrefix` option. This means that the URL now also contains the `projectsPrefix` option (which is potentially breaking if you rely on this being different).
- The `slug` key on pages now correctly respects the `basePath` option. This means that the URL now also contains the `basePath` option (which is potentially breaking if you rely on this being different).
- The items in the `navigation` option are now prefixed with the `basePath` in the `navigation.tsx` component. If you've shadowed the file you'll need to update your component.
- The logo link (in the `sidebar.tsx` component) now goes to `basePath` and not `/` (this way the link correctly works with `basePath` option). If you've shadowed the file you'll need to update your component.

**Migration:**

- If you relied on `slug` both for posts or pages you'll need to check if your URLs are still as expected
- If you used Theme UI in custom components, check the [Theme UI changelog](https://github.com/system-ui/theme-ui/blob/develop/CHANGELOG.md)
- Update CI/local environment to account for the new Node.js requirement

### Patch Changes

- Updated dependencies [[`1598dd6`](https://github.com/LekoArts/gatsby-themes/commit/1598dd660e3ba795b50c4aeb11550806e0b7b6ba)]:
  - @lekoarts/gatsby-theme-jodie-core@3.0.0

## 2.0.6

### Patch Changes

- [#696](https://github.com/LekoArts/gatsby-themes/pull/696) [`d0b7944`](https://github.com/LekoArts/gatsby-themes/commit/d0b79444bb75631bbbf83db0af21be811f648f60) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: Improve READMEs with more instructions

  Links to changelogs and places to ask questions were added.

- Updated dependencies [[`d0b7944`](https://github.com/LekoArts/gatsby-themes/commit/d0b79444bb75631bbbf83db0af21be811f648f60)]:
  - @lekoarts/gatsby-theme-jodie-core@2.0.6

## 2.0.5

### Patch Changes

- [#695](https://github.com/LekoArts/gatsby-themes/pull/695) [`afba2ff`](https://github.com/LekoArts/gatsby-themes/commit/afba2fff5d97e5a27c3110c078a2c804557cbf56) Thanks [@LekoArts](https://github.com/LekoArts)! - fix(deps): update minor and patch dependencies for gatsby-theme-jodie

* [#691](https://github.com/LekoArts/gatsby-themes/pull/691) [`6b8a950`](https://github.com/LekoArts/gatsby-themes/commit/6b8a95045c99743e152b88471bc78f93621b3099) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-jodie-core

* Updated dependencies [[`6b8a950`](https://github.com/LekoArts/gatsby-themes/commit/6b8a95045c99743e152b88471bc78f93621b3099)]:
  - @lekoarts/gatsby-theme-jodie-core@2.0.5

## 2.0.4

### Patch Changes

- [#662](https://github.com/LekoArts/gatsby-themes/pull/662) [`22e57f5`](https://github.com/LekoArts/gatsby-themes/commit/22e57f56f260a4d9ee161a28c9de0a2222ed89de) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-jodie-core

  | Package                                                          | Change                                                                                             |
  | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
  | [gatsby-plugin-mdx](https://togithub.com/gatsbyjs/gatsby)        | [`^2.10.1` -> `^2.13.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-mdx/2.13.0/2.13.0)        |
  | [gatsby-plugin-sharp](https://togithub.com/gatsbyjs/gatsby)      | [`^3.10.2` -> `^3.13.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-sharp/3.13.0/3.13.0)      |
  | [gatsby-source-filesystem](https://togithub.com/gatsbyjs/gatsby) | [`^3.10.0` -> `^3.13.0`](https://renovatebot.com/diffs/npm/gatsby-source-filesystem/3.13.0/3.13.0) |
  | [gatsby-transformer-sharp](https://togithub.com/gatsbyjs/gatsby) | [`^3.10.0` -> `^3.13.0`](https://renovatebot.com/diffs/npm/gatsby-transformer-sharp/3.13.0/3.13.0) |

* [#661](https://github.com/LekoArts/gatsby-themes/pull/661) [`841e6f1`](https://github.com/LekoArts/gatsby-themes/commit/841e6f164c9db95c69c994de6294fdc7c24e1d01) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-jodie

  | Package                                                            | Change                                                                                               |
  | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
  | [gatsby-plugin-image](https://togithub.com/gatsbyjs/gatsby)        | [`^1.10.1` -> `^1.13.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-image/1.13.0/1.13.0)        |
  | [gatsby-plugin-react-helmet](https://togithub.com/gatsbyjs/gatsby) | [`^4.10.0` -> `^4.13.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-react-helmet/4.13.0/4.13.0) |

* Updated dependencies [[`22e57f5`](https://github.com/LekoArts/gatsby-themes/commit/22e57f56f260a4d9ee161a28c9de0a2222ed89de)]:
  - @lekoarts/gatsby-theme-jodie-core@2.0.4

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

- Updated dependencies [[`a159f35`](https://github.com/LekoArts/gatsby-themes/commit/a159f3597f9e7871da52e743f02626aa6053574f)]:
  - @lekoarts/gatsby-theme-jodie-core@2.0.3

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

- Updated dependencies [[`6d104cf`](https://github.com/LekoArts/gatsby-themes/commit/6d104cf94b926a04c386b7c3cfaecce7b0934000)]:
  - @lekoarts/gatsby-theme-jodie-core@2.0.2

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

* Updated dependencies [[`e1aec09`](https://github.com/LekoArts/gatsby-themes/commit/e1aec0984a39e834ae81001bf41bb2813a30bf33), [`b2822c0`](https://github.com/LekoArts/gatsby-themes/commit/b2822c0f6bef8f7d74d1846160659e8ddb0a6c36)]:
  - @lekoarts/gatsby-theme-jodie-core@2.0.1

## 2.0.0

### Major Changes

[#599](https://github.com/LekoArts/gatsby-themes/pull/599) [`1785dcf`](https://github.com/LekoArts/gatsby-themes/commit/1785dcfad131ab9270c401e6a3bb450f7cb01288) Thanks [@LekoArts](https://github.com/LekoArts)!

### Breaking Changes

1. Using `lessBabel` option for `gatsby-plugin-mdx`
1. Updating `theme-ui` from v0.3 to v0.9 and thus also `emotion` from v10 to v11
1. Updating all Gatsby related packages to latest
1. Migrated from `gatsby-image` to `gatsby-plugin-image`
1. Removed `fontsource-work-sans` npm package

#### Migrating

1. The `lessBabel` option might break your setup in some edge cases. If it doesn't work, turn on the `mdx` option and choose your own config for `gatsby-plugin-mdx`
1. The changelog/migration guide for `theme-ui` is here: https://theme-ui.com/migrating and for `emotion` here: https://emotion.sh/docs/emotion-11
1. Gatsby v3 migration guide: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/
1. The theme itself is completely migrated to the new image plugin, but if you shadowed components and relied on the old structure, you'll need to migrate to `gatsby-plugin-image`: https://www.gatsbyjs.com/docs/reference/release-notes/image-migration-guide/
1. The starter now handles loading the font (via `gatsby-omni-font-loader`). This enables you to switch the primary font more easily (once you updated the Theme UI config). You can copy the configuration from there into your own `gatsby-config.js`

### Improvements

- You can use the `sharp` theme option to be able to configure `gatsby-plugin-sharp` on your own (helpful for defaults for `gatsby-plugin-image`)
- Performance improvements from `theme-ui` upgrade
- Eagerly load the first image in the grid (better lighthouse score)

### Updates to Starter

If you only cloned the starter (https://github.com/LekoArts/gatsby-starter-portfolio-jodie) and didn't change anything else this section will be more relevant to you.

- Conditionally add `gatsby-plugin-google-analytics`
- Conditionally add `gatsby-plugin-webpack-bundle-analyser-v2`
- Use `gatsby-omni-font-loader` to load the primary font ("Work Sans") instead of in the theme itself
- Add `FAST_DEV` flag
- Update to all latest Gatsby (+ plugins) versions
- Remove `gatsby-source-instagram` as Instagram locked down its API (and public scraping methods) even further. The page is now called `/art` and showcases the custom page in the same way

### Patch Changes

- Updated dependencies [[`1785dcf`](https://github.com/LekoArts/gatsby-themes/commit/1785dcfad131ab9270c401e6a3bb450f7cb01288)]:
  - @lekoarts/gatsby-theme-jodie-core@2.0.0

## 1.1.1

### Patch Changes

- [`47f747e`](https://github.com/LekoArts/gatsby-themes/commit/47f747e045962996503bf4043b0adc5a2527a855) [#559](https://github.com/LekoArts/gatsby-themes/pull/559) Thanks [@renovate](https://github.com/apps/renovate)! - Dependency updates for various packages, including theme-ui and gatsby related packages (includes improvements for `gatsby-plugin-image`)

- Updated dependencies [[`47f747e`](https://github.com/LekoArts/gatsby-themes/commit/47f747e045962996503bf4043b0adc5a2527a855)]:
  - @lekoarts/gatsby-theme-jodie-core@1.1.1

## 1.1.0

### Minor Changes

- [`2e2b6de`](https://github.com/LekoArts/gatsby-themes/commit/2e2b6de1b4b35ca614143907a4366a91d1aa2b7e) [#557](https://github.com/LekoArts/gatsby-themes/pull/557) Thanks [@LekoArts](https://github.com/LekoArts)! - feat(gatsby-theme-jodie): Add customization options for homepage

  The PR https://github.com/LekoArts/gatsby-themes/pull/557 added some new possiblities to customize the homepage of `gatsby-theme-jodie`. This was requested in: https://github.com/LekoArts/gatsby-themes/issues/547

  More specifically, this adds two new theme options and one special file to shadow:

  1. `homepagePageLimit`
  2. `homepageProjectLimit`
  3. Shadowing [`modify-grid.ts`](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/src/utils/modify-grid.ts)

  The options 1) and 2) are explained in the theme options of the README -- they limit the number of projects and pages that will randomly be distributed on the page.

  Option 3) is a really powerful one! The `modifyGrid` function is wrapping the entire array of projects & pages before passing it to the `render` function of the React component. Or in other words: As the name suggests you can modify the items that are passed to the grid on the homepage.

  You don't need to update any code on your end, however, if you want to modify your homepage, see the instructions in the [README](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/README.md#customizing-the-homepage).

### Patch Changes

- Updated dependencies [[`2e2b6de`](https://github.com/LekoArts/gatsby-themes/commit/2e2b6de1b4b35ca614143907a4366a91d1aa2b7e)]:
  - @lekoarts/gatsby-theme-jodie-core@1.1.0

## 1.0.4

### Patch Changes

- [`9d25527`](https://github.com/LekoArts/gatsby-themes/commit/9d25527cf2372d24682d85c44ecca02675019774) [#551](https://github.com/LekoArts/gatsby-themes/pull/551) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update packages

  You can see the details of the update here: https://github.com/LekoArts/gatsby-themes/pull/551

- Updated dependencies [[`9d25527`](https://github.com/LekoArts/gatsby-themes/commit/9d25527cf2372d24682d85c44ecca02675019774)]:
  - @lekoarts/gatsby-theme-jodie-core@1.0.4

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-jodie@1.0.2...@lekoarts/gatsby-theme-jodie@1.0.3) (2020-11-11)

**Note:** Version bump only for package @lekoarts/gatsby-theme-jodie

## [1.0.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-jodie@1.0.1...@lekoarts/gatsby-theme-jodie@1.0.2) (2020-11-02)

### Bug Fixes

- **deps:** update packages ([#530](https://github.com/LekoArts/gatsby-themes/issues/530)) ([2125d8e](https://github.com/LekoArts/gatsby-themes/commit/2125d8ec904388c66d821a7db7ebca6adc9ff73c))

## [1.0.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-jodie@1.0.0...@lekoarts/gatsby-theme-jodie@1.0.1) (2020-11-01)

### Bug Fixes

- **deps:** update packages ([#523](https://github.com/LekoArts/gatsby-themes/issues/523)) ([fb02217](https://github.com/LekoArts/gatsby-themes/commit/fb0221761af80e753990b5d2f2b410c98748ca02))
