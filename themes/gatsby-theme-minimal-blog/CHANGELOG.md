# Change Log

## 6.1.1

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

- [#1139](https://github.com/LekoArts/gatsby-themes/pull/1139) [`dcbdefd5`](https://github.com/LekoArts/gatsby-themes/commit/dcbdefd517feac688658f87c805529d4711a1cbd) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog

- Updated dependencies [[`6985b62e`](https://github.com/LekoArts/gatsby-themes/commit/6985b62ec1b410cd7824c86ca76d701414fc716c)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@6.1.1

## 6.1.0

### Minor Changes

- [#1119](https://github.com/LekoArts/gatsby-themes/pull/1119) [`02844608`](https://github.com/LekoArts/gatsby-themes/commit/02844608a2ebcbdbc12d8bba27c795ab350386e6) Thanks [@LekoArts](https://github.com/LekoArts)! - Starting with [Gatsby 5.3](https://www.gatsbyjs.com/docs/reference/release-notes/v5.3/#es-modules-esm-in-gatsby-files) ESM in Gatsby files is supported now! So you can write `gatsby-config.mjs` or `gatsby-node.mjs`.

  Therefore this theme was updated to use ESM for its source code. This shouldn't make a difference for actually using the theme as behavior stays the same. If this is not the case, please open an issue!

  One benefit of now using ESM behind the scenes is that e.g. the `remark-*` packages could be updated to their latest versions (they are ESM-only). Yey for using up-to-date software.

- [#1119](https://github.com/LekoArts/gatsby-themes/pull/1119) [`02844608`](https://github.com/LekoArts/gatsby-themes/commit/02844608a2ebcbdbc12d8bba27c795ab350386e6) Thanks [@LekoArts](https://github.com/LekoArts)! - In the last major version release the `siteLanguage` key on the `siteMetadata` object was removed since the [Gatsby Head API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/) didn't support setting the `lang` attribute on the `<html>` back then. Starting with [Gatsby 5.5](https://www.gatsbyjs.com/docs/reference/release-notes/v5.5/#setting-html-and-body-attributes) this is now supported and the removal change was reverted.

  Thus you can use the `siteLanguage` key on the `siteMetadata` object again to change the language globally. By default it uses `en`. This is also highlighted in the `README` again. If you want to change the language on a per-page basis, define your own `<html lang="value" />` in your Head API export as it then overrides the global configuration.

- [#1119](https://github.com/LekoArts/gatsby-themes/pull/1119) [`02844608`](https://github.com/LekoArts/gatsby-themes/commit/02844608a2ebcbdbc12d8bba27c795ab350386e6) Thanks [@LekoArts](https://github.com/LekoArts)! - Because this theme now uses a [Gatsby Head API](https://www.gatsbyjs.com/docs/reference/release-notes/v5.5/#setting-html-and-body-attributes) feature that was introduced in [Gatsby 5.5](https://www.gatsbyjs.com/docs/reference/release-notes/v5.5/#setting-html-and-body-attributes) the `peerDependencies` range was updated from `^5.0.0` to `^5.5.0`.

  Please also update your `gatsby` package when updating this theme.

### Patch Changes

- Updated dependencies [[`02844608`](https://github.com/LekoArts/gatsby-themes/commit/02844608a2ebcbdbc12d8bba27c795ab350386e6), [`02844608`](https://github.com/LekoArts/gatsby-themes/commit/02844608a2ebcbdbc12d8bba27c795ab350386e6), [`02844608`](https://github.com/LekoArts/gatsby-themes/commit/02844608a2ebcbdbc12d8bba27c795ab350386e6)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@6.1.0
  - @lekoarts/themes-utils@3.0.0

## 6.0.5

### Patch Changes

- [#1116](https://github.com/LekoArts/gatsby-themes/pull/1116) [`cf7d5122`](https://github.com/LekoArts/gatsby-themes/commit/cf7d51223a73387f12cac490e2a42f068b0ded26) Thanks [@LekoArts](https://github.com/LekoArts)! - chore(deps): Various dependency updates

- Updated dependencies [[`04980e78`](https://github.com/LekoArts/gatsby-themes/commit/04980e788d71991f859863c58ea376f53e606f00), [`cf7d5122`](https://github.com/LekoArts/gatsby-themes/commit/cf7d51223a73387f12cac490e2a42f068b0ded26)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@6.0.5

## 6.0.4

### Patch Changes

- [#1108](https://github.com/LekoArts/gatsby-themes/pull/1108) [`de6ad02b`](https://github.com/LekoArts/gatsby-themes/commit/de6ad02b22026686fac15625d9d6fcc5cb2360a1) Thanks [@aaftio](https://github.com/aaftio)! - feat: Add golang tag to code blocks

## 6.0.3

### Patch Changes

- [#1080](https://github.com/LekoArts/gatsby-themes/pull/1080) [`296b41a1`](https://github.com/LekoArts/gatsby-themes/commit/296b41a1d783c649d4ec6bf40a32d38668ef385c) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Remove `useColorSchemeMediaQuery` entry from Theme UI configuration since the "system" setting overwrote the preference of a user. We'd need to wait for Theme UI to implement a proper "system" color mode, see https://github.com/system-ui/theme-ui/discussions/2264. If you want to have the old behavior, define your own Theme UI configuration as shown in the docs.

- [#1080](https://github.com/LekoArts/gatsby-themes/pull/1080) [`296b41a1`](https://github.com/LekoArts/gatsby-themes/commit/296b41a1d783c649d4ec6bf40a32d38668ef385c) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Use CSS variables for CSS styles of code blocks so that both in light/dark mode the correct styles are applied

- [#1080](https://github.com/LekoArts/gatsby-themes/pull/1080) [`296b41a1`](https://github.com/LekoArts/gatsby-themes/commit/296b41a1d783c649d4ec6bf40a32d38668ef385c) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Improve useColorMode usage by: improving the TS types, adding a SSR fallback to the sun/moon icon toggle so that the correct one is displayed once React is hydrated

- [#1067](https://github.com/LekoArts/gatsby-themes/pull/1067) [`804e8574`](https://github.com/LekoArts/gatsby-themes/commit/804e85747d500de65f3b4dc715923794fc3d5848) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog

- Updated dependencies [[`8007bb38`](https://github.com/LekoArts/gatsby-themes/commit/8007bb387378291473f78bc64b7cc57998a6e984)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@6.0.3

## 6.0.2

### Patch Changes

- [#1051](https://github.com/LekoArts/gatsby-themes/pull/1051) [`4facf3d1`](https://github.com/LekoArts/gatsby-themes/commit/4facf3d1e45c8db320050607dd84a0c4a4a74a62) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Use minor pin and update to 0.15.4

- [#1053](https://github.com/LekoArts/gatsby-themes/pull/1053) [`c331d005`](https://github.com/LekoArts/gatsby-themes/commit/c331d005fd1e90ea857554930b8a8e4bf7892626) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Switch from `@theme-ui/presets` to individual preset (e.g. `@theme-ui/preset-tailwind`)

## 6.0.1

### Patch Changes

- [`b9148840`](https://github.com/LekoArts/gatsby-themes/commit/b91488404155c7a1965837d807c372131b68f6a0) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Pin @theme-ui/presets to 0.15.3 as 0.15.4 was a breaking change

## 6.0.0

### Major Changes

- [#1045](https://github.com/LekoArts/gatsby-themes/pull/1045) [`02872400`](https://github.com/LekoArts/gatsby-themes/commit/0287240022c308a7d1fcc8af348ee7d21bca0dd5) Thanks [@LekoArts](https://github.com/LekoArts)! - Update to [Gatsby 5](https://www.gatsbyjs.com/gatsby-5/). [Gatsby 5 Migration Guide](https://gatsbyjs.com/docs/reference/release-notes/migrating-from-v4-to-v5/).

  **Breaking Changes:**

  - Minimal Node.js version 18.0.0
  - Minimal required React version is 18

  For all other breaking changes, refer to the [Gatsby 5 Migration Guide](https://gatsbyjs.com/docs/reference/release-notes/migrating-from-v4-to-v5/).

### Patch Changes

- Updated dependencies [[`02872400`](https://github.com/LekoArts/gatsby-themes/commit/0287240022c308a7d1fcc8af348ee7d21bca0dd5), [`02872400`](https://github.com/LekoArts/gatsby-themes/commit/0287240022c308a7d1fcc8af348ee7d21bca0dd5)]:
  - @lekoarts/themes-utils@2.0.0
  - @lekoarts/gatsby-theme-minimal-blog-core@6.0.0

## 5.0.3

### Patch Changes

- [#1035](https://github.com/LekoArts/gatsby-themes/pull/1035) [`f64491cb`](https://github.com/LekoArts/gatsby-themes/commit/f64491cb1194f290b569dad149c486cfe20bbf02) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog

- [#1043](https://github.com/LekoArts/gatsby-themes/pull/1043) [`5ddaf82f`](https://github.com/LekoArts/gatsby-themes/commit/5ddaf82fc5e7643b841b60028bd7c566b6f9528f) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update theme-ui to ^0.15.3

- Updated dependencies [[`be91f14a`](https://github.com/LekoArts/gatsby-themes/commit/be91f14a186baa350b1e5360fd74af55f0906f5a)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@5.0.3

## 5.0.2

### Patch Changes

- [`2d8e5d17`](https://github.com/LekoArts/gatsby-themes/commit/2d8e5d178bead2c9589ff0176982b6af18d2e62c) Thanks [@LekoArts](https://github.com/LekoArts)! - fix: Code block language & copy button positioning on scroll

  When the code block horizontally scrolled the copy button stayed in its position and not in the top right. Same with the language label.

## 5.0.1

### Patch Changes

- [`fa281b1a`](https://github.com/LekoArts/gatsby-themes/commit/fa281b1a96c04ea625cfb1e138dc08bf2e0043f2) Thanks [@LekoArts](https://github.com/LekoArts)! - Update README information and change some `package.json` details.

- Updated dependencies [[`fa281b1a`](https://github.com/LekoArts/gatsby-themes/commit/fa281b1a96c04ea625cfb1e138dc08bf2e0043f2), [`fa281b1a`](https://github.com/LekoArts/gatsby-themes/commit/fa281b1a96c04ea625cfb1e138dc08bf2e0043f2)]:
  - @lekoarts/themes-utils@1.1.1
  - @lekoarts/gatsby-theme-minimal-blog-core@5.0.1

## 5.0.0

### Major Changes

[#967](https://github.com/LekoArts/gatsby-themes/pull/967) [`ee969f3`](https://github.com/LekoArts/gatsby-themes/commit/ee969f30037fa99232292014431854773735d0a0)

In preparation for the upcoming [Gatsby 5 release](https://github.com/gatsbyjs/gatsby/discussions/36609) this release will focus on some breaking changes unrelated to the `gatsby` core package. Another new major version will follow once Gatsby 5 is out so that you can upgrade in steps.

**Features:**

- Update to [MDX 2](https://mdxjs.com/blog/v2/) and [`gatsby-plugin-mdx` 4](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/) (**Breaking Change**)
- Update [Theme UI](https://theme-ui.com/) from v0.11 to v0.15 ([Theme UI Changelog](https://github.com/system-ui/theme-ui/blob/develop/CHANGELOG.md)) (**Breaking Change**)
- Replace [`react-helmet`](https://github.com/nfl/react-helmet) with [Gatsby Head API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/) (**Breaking Change**)
- Improved Typography on the overall site and especially for the blog content
- Light/Dark Theme for code blocks and overall improved styling for code blocks

**Breaking Changes:**

- Any breaking changes from `theme-ui` between v0.11 and v0.15
- Bump `react` & `react-dom` peerDependency to `>=18.0.0`
- Removal of `siteLanguage` from `siteMetadata`
- The MDX components are not managed by `gatsby-plugin-theme-ui/components` anymore but defined in a `<MDXProvider>` in `src/components/layout`
- [`useColorSchemeMediaQuery`](https://theme-ui.com/color-modes#responding-to-the-prefers-color-scheme-media-query) in Theme UI config is set to `system`
- Removal of `body` from the `Post` and `Page` type. The field `contentFilePath` was added.
- Removal of `gatsby-omni-font-loader`
- `body` font style is changed from `"IBM Plex Sans"` to a system font stack
- Removal of `react-live`
- Change in syntax of highlighting lines, adding code title, and adding line numbers
- The `showLineNumbers` option is `false` by default now

**Migration:**

- Internally the necessary changes of the [gatsby-plugin-mdx migration guide](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#migrating-from-v3-to-v4) were made, but if you set the `mdx` option to `false` and/or shadowed the theme in any way, you'll need to read the migration guide to e.g. change your `gatsby-config`. You'll also need to add any `remarkPlugins` or `rehypePlugins` that the theme is adding by default.
- MDX 2 is more strict about the allowed syntax, so you'll need to [update your MDX content](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#updating-mdx-content) to be compliant.
- See [Theme UI's migration guide](https://github.com/system-ui/theme-ui/blob/develop/MIGRATING.md)
- If you shadowed a file or used `react-helmet` in any form in your site, you'll either need to migrate to the Gatsby Head API or re-install the necessary dependencies. By default, the theme no longer ships with `react-helmet` as internally everything was migrated to Gatsby Head API. To have the `lang` tag work correctly on the `<html>` element you'll need to set it by using the [`setHtmlAttributes` API](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#onRenderBody). The current starter already has this included (you can copy it from there). Thus the `<Seo>` component should only be used together with Gatsby Head API.
- With the removal of `gatsby-omni-font-loader` in the example you'll now need to self-host your fonts and change the Theme UI config. The theme switched to a system font stack in its Theme UI config and the example doesn't provide any custom font anymore.
- If you want to continue using `react-live`, you have to add the dependency and shadow the `<Code>` component.
- The syntax for adding code titles changed.
  Before:

  ````md
  ```js:title=test.js
  // content
  ```
  ````

  After:

  ````md
  ```js title=test.js
  // content
  ```
  ````

- The syntax for adding line highlighting changed.
  Before:

  ````md
  ```js {1,2-3}
  // content
  ```
  ````

  After:

  ````md
  ```js highlight=1,2-3
  // content
  ```
  ````

- The syntax for adding line numbers changed. You no longer _negate_ line numbers (previously `noLineNumbers`) but opt-in.
  Before:

  ````md
  ```js noLineNumbers
  // content that had line numbers by default
  ```
  ````

  After:

  ````md
  ```js withLineNumbers
  // content
  ```
  ````

- All syntax changes together.
  Before:

  ````md
  ```js:title=test.js {1,2-3}
  // content
  ```
  ````

  After:

  ````md
  ```js title=test.js highlight=1,2-3 withLineNumbers
  // content
  ```
  ````

### Patch Changes

- Updated dependencies [[`ee969f3`](https://github.com/LekoArts/gatsby-themes/commit/ee969f30037fa99232292014431854773735d0a0), [`ee969f3`](https://github.com/LekoArts/gatsby-themes/commit/ee969f30037fa99232292014431854773735d0a0)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@5.0.0
  - @lekoarts/themes-utils@1.0.0

## 4.1.7

### Patch Changes

- [#914](https://github.com/LekoArts/gatsby-themes/pull/914) [`15d6bd2`](https://github.com/LekoArts/gatsby-themes/commit/15d6bd2a74aa4e04518460b79c448a443e85206e) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog

- Updated dependencies [[`93e4927`](https://github.com/LekoArts/gatsby-themes/commit/93e492764d120d436b74661413c5d6af8f6854f2)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@4.1.7

## 4.1.6

### Patch Changes

- [#894](https://github.com/LekoArts/gatsby-themes/pull/894) [`ad18612`](https://github.com/LekoArts/gatsby-themes/commit/ad1861224d1c619ea145df0082b4c90f6ed77c83) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog

- Updated dependencies [[`beb1c63`](https://github.com/LekoArts/gatsby-themes/commit/beb1c63d60797390750b5a97f670d81118714849)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@4.1.6

## 4.1.5

### Patch Changes

- [#869](https://github.com/LekoArts/gatsby-themes/pull/869) [`dbe1a0e`](https://github.com/LekoArts/gatsby-themes/commit/dbe1a0e854271cc1a8f0694199b323cbe1953c52) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: Update peerDependencies to include React 18

* [#865](https://github.com/LekoArts/gatsby-themes/pull/865) [`12b2ced`](https://github.com/LekoArts/gatsby-themes/commit/12b2ceda479e915c4293234220a2b75949bb3094) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog

* Updated dependencies [[`dbe1a0e`](https://github.com/LekoArts/gatsby-themes/commit/dbe1a0e854271cc1a8f0694199b323cbe1953c52), [`dff0be1`](https://github.com/LekoArts/gatsby-themes/commit/dff0be15daeaa37dd67e3af23087a3dab3d13f65)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@4.1.5

## 4.1.4

### Patch Changes

- [#811](https://github.com/LekoArts/gatsby-themes/pull/811) [`1001a20`](https://github.com/LekoArts/gatsby-themes/commit/1001a20456c63b721debc96219e647cd246b0e8c) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog

* [#812](https://github.com/LekoArts/gatsby-themes/pull/812) [`334f0cb`](https://github.com/LekoArts/gatsby-themes/commit/334f0cb7237a97b522714f586b0f598537972187) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog-core

* Updated dependencies [[`334f0cb`](https://github.com/LekoArts/gatsby-themes/commit/334f0cb7237a97b522714f586b0f598537972187)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@4.1.4

## 4.1.3

### Patch Changes

- [#796](https://github.com/LekoArts/gatsby-themes/pull/796) [`fd16886`](https://github.com/LekoArts/gatsby-themes/commit/fd16886bc07356155da773586e8ad8c84de1779a) Thanks [@simpixelated](https://github.com/simpixelated)! - Add main landmark to layout component

## 4.1.2

### Patch Changes

- [#768](https://github.com/LekoArts/gatsby-themes/pull/768) [`4f58e93`](https://github.com/LekoArts/gatsby-themes/commit/4f58e933cf3df7c6f107cf32c5c933e24f9d0218) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog

* [#777](https://github.com/LekoArts/gatsby-themes/pull/777) [`090dfc2`](https://github.com/LekoArts/gatsby-themes/commit/090dfc23e55605ba7311e7ffe14e37294d27d26b) Thanks [@LekoArts](https://github.com/LekoArts)! - chore(deps): Update gatsby-plugin-mdx and gatsby

- [#750](https://github.com/LekoArts/gatsby-themes/pull/750) [`658668f`](https://github.com/LekoArts/gatsby-themes/commit/658668fc28142b8faf83405d75c04bacc1768ea5) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog

- Updated dependencies [[`d60f9cd`](https://github.com/LekoArts/gatsby-themes/commit/d60f9cdc38e0b9430012bf3ca30336e6e32d7ff4), [`090dfc2`](https://github.com/LekoArts/gatsby-themes/commit/090dfc23e55605ba7311e7ffe14e37294d27d26b)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@4.1.2

## 4.1.1

### Patch Changes

- [#729](https://github.com/LekoArts/gatsby-themes/pull/729) [`a934df5`](https://github.com/LekoArts/gatsby-themes/commit/a934df564cba63c20688d4a41a6fd8c77f39a1d0) Thanks [@LekoArts](https://github.com/LekoArts)! - fix(gatsby-theme-minimal-blog): Incorrect link styling in bottom section

  Links were rendered at a bigger size in the `<Bottom />` section. The styles were changed to only apply this bigger `fontSize` for links inside `<li>` items.

## 4.1.0

### Minor Changes

- [#705](https://github.com/LekoArts/gatsby-themes/pull/705) [`158b1f0`](https://github.com/LekoArts/gatsby-themes/commit/158b1f08fa6782151cab1f4b1d337d266d5e75c4) Thanks [@LekoArts](https://github.com/LekoArts)! - **Feature:** The `<Post />` component now has a `<PostFooter />` component at the bottom of the page (between the end of the post content and the global footer). You can shadow this to e.g. display a comment section below a post. The component receives its data through the `post` prop which holds the same data as what `<Post />` receives.

  Fixes https://github.com/LekoArts/gatsby-themes/discussions/698.

### Patch Changes

- Updated dependencies [[`71e15ca`](https://github.com/LekoArts/gatsby-themes/commit/71e15ca705be9aad95cbdd8baabe77b93cbbb77b)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@4.1.0

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

### Patch Changes

- Updated dependencies [[`1598dd6`](https://github.com/LekoArts/gatsby-themes/commit/1598dd660e3ba795b50c4aeb11550806e0b7b6ba)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@4.0.0

## 3.1.3

### Patch Changes

- [#696](https://github.com/LekoArts/gatsby-themes/pull/696) [`d0b7944`](https://github.com/LekoArts/gatsby-themes/commit/d0b79444bb75631bbbf83db0af21be811f648f60) Thanks [@LekoArts](https://github.com/LekoArts)! - chore: Improve READMEs with more instructions

  Links to changelogs and places to ask questions were added.

- Updated dependencies [[`d0b7944`](https://github.com/LekoArts/gatsby-themes/commit/d0b79444bb75631bbbf83db0af21be811f648f60)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@3.1.3

## 3.1.2

### Patch Changes

- [#692](https://github.com/LekoArts/gatsby-themes/pull/692) [`4d01e21`](https://github.com/LekoArts/gatsby-themes/commit/4d01e21bea0f0afc64445804402c54857b115517) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog

- Updated dependencies [[`afba2ff`](https://github.com/LekoArts/gatsby-themes/commit/afba2fff5d97e5a27c3110c078a2c804557cbf56)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@3.1.2

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

* [#663](https://github.com/LekoArts/gatsby-themes/pull/663) [`f0ba317`](https://github.com/LekoArts/gatsby-themes/commit/f0ba317cfbda893cfac30ba46b809cfc4398d7d3) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update minor and patch dependencies for gatsby-theme-minimal-blog

  | Package                                                            | Change                                                                                               |
  | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
  | [gatsby-plugin-catch-links](https://togithub.com/gatsbyjs/gatsby)  | [`^3.10.0` -> `^3.13.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-catch-links/3.13.0/3.13.0)  |
  | [gatsby-plugin-react-helmet](https://togithub.com/gatsbyjs/gatsby) | [`^4.10.0` -> `^4.13.0`](https://renovatebot.com/diffs/npm/gatsby-plugin-react-helmet/4.13.0/4.13.0) |
  | [react-live](https://togithub.com/philpl/react-live)               | [`^2.2.3` -> `^2.3.0`](https://renovatebot.com/diffs/npm/react-live/2.2.3/2.3.0)                     |

* Updated dependencies [[`2ca7855`](https://github.com/LekoArts/gatsby-themes/commit/2ca7855e1e8854352bac8052bb90b74c8463c595)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@3.1.1

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
          mdx: false,
          // + rest of the options you want to set
        },
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
                linkImagesToOriginal: false,
              },
            },
          ],
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 960,
                quality: 90,
                linkImagesToOriginal: false,
              },
            },
          ],
        },
      },
    ],
  };
  ```

### Patch Changes

- Updated dependencies [[`4fccc44`](https://github.com/LekoArts/gatsby-themes/commit/4fccc4412f4531c9b1063db3f8c6e41f4bda8ee0)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@3.1.0

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

- Updated dependencies [[`a159f35`](https://github.com/LekoArts/gatsby-themes/commit/a159f3597f9e7871da52e743f02626aa6053574f)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@3.0.3

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

- Updated dependencies [[`6d104cf`](https://github.com/LekoArts/gatsby-themes/commit/6d104cf94b926a04c386b7c3cfaecce7b0934000)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@3.0.2

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

* Updated dependencies [[`e1aec09`](https://github.com/LekoArts/gatsby-themes/commit/e1aec0984a39e834ae81001bf41bb2813a30bf33), [`b2822c0`](https://github.com/LekoArts/gatsby-themes/commit/b2822c0f6bef8f7d74d1846160659e8ddb0a6c36)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@3.0.1

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

### Patch Changes

- Updated dependencies [[`1785dcf`](https://github.com/LekoArts/gatsby-themes/commit/1785dcfad131ab9270c401e6a3bb450f7cb01288)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@3.0.0

## 2.7.6

### Patch Changes

- [`47f747e`](https://github.com/LekoArts/gatsby-themes/commit/47f747e045962996503bf4043b0adc5a2527a855) [#559](https://github.com/LekoArts/gatsby-themes/pull/559) Thanks [@renovate](https://github.com/apps/renovate)! - Dependency updates for various packages, including theme-ui and gatsby related packages (includes improvements for `gatsby-plugin-image`)

- Updated dependencies [[`47f747e`](https://github.com/LekoArts/gatsby-themes/commit/47f747e045962996503bf4043b0adc5a2527a855)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@2.7.6

## 2.7.5

### Patch Changes

- [`9d25527`](https://github.com/LekoArts/gatsby-themes/commit/9d25527cf2372d24682d85c44ecca02675019774) [#551](https://github.com/LekoArts/gatsby-themes/pull/551) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update packages

  You can see the details of the update here: https://github.com/LekoArts/gatsby-themes/pull/551

- Updated dependencies [[`9d25527`](https://github.com/LekoArts/gatsby-themes/commit/9d25527cf2372d24682d85c44ecca02675019774)]:
  - @lekoarts/gatsby-theme-minimal-blog-core@2.7.5

## 2.7.4

### Patch Changes

- [`99de145`](https://github.com/LekoArts/gatsby-themes/commit/99de1456ec2f0fa97154368c09c5202ab876ad91) [#541](https://github.com/LekoArts/gatsby-themes/pull/541) Thanks [@LekoArts](https://github.com/LekoArts)! - Adding two variants called "section_hero" and "section_bottom" to the homepage component so that both sections can be styled via Theme UI config directly, e.g. when the hero.mdx file is empty the surrounding section can be hidden via CSS.

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.7.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.7.2...@lekoarts/gatsby-theme-minimal-blog@2.7.3) (2020-11-11)

**Note:** Version bump only for package @lekoarts/gatsby-theme-minimal-blog

## [2.7.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.7.1...@lekoarts/gatsby-theme-minimal-blog@2.7.2) (2020-11-04)

**Note:** Version bump only for package @lekoarts/gatsby-theme-minimal-blog

## [2.7.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.7.0...@lekoarts/gatsby-theme-minimal-blog@2.7.1) (2020-11-02)

**Note:** Version bump only for package @lekoarts/gatsby-theme-minimal-blog

# [2.7.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.6.5...@lekoarts/gatsby-theme-minimal-blog@2.7.0) (2020-11-01)

### Features

- **gatsby-theme-minimal-blog:** Add postsPrefix option ([bc172cd](https://github.com/LekoArts/gatsby-themes/commit/bc172cd1eea69d9e76dd459c11d174b3ea96ea3d)), closes [#512](https://github.com/LekoArts/gatsby-themes/issues/512)

## [2.6.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.6.4...@lekoarts/gatsby-theme-minimal-blog@2.6.5) (2020-10-25)

### Bug Fixes

- **gatsby-theme-minimal-blog:** Use correct h1 on all pages ([#519](https://github.com/LekoArts/gatsby-themes/issues/519)) ([f6fdeb3](https://github.com/LekoArts/gatsby-themes/commit/f6fdeb38fd1fed4bc773681edae44fbf80096c17))

## [2.6.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.6.3...@lekoarts/gatsby-theme-minimal-blog@2.6.4) (2020-10-25)

### Bug Fixes

- **gatsby-theme-minimal-blog:** Add additional language PHP & PY flags ([#520](https://github.com/LekoArts/gatsby-themes/issues/520)) ([01f8e7f](https://github.com/LekoArts/gatsby-themes/commit/01f8e7f8af468376c58d39d03155f87a4ecb0e82))

## [2.6.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.6.2...@lekoarts/gatsby-theme-minimal-blog@2.6.3) (2020-10-25)

### Bug Fixes

- **deps:** update packages ([#510](https://github.com/LekoArts/gatsby-themes/issues/510)) ([06ecc65](https://github.com/LekoArts/gatsby-themes/commit/06ecc65b784e8fd27d5354761211df14f7a72749))

## [2.6.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.6.1...@lekoarts/gatsby-theme-minimal-blog@2.6.2) (2020-10-10)

**Note:** Version bump only for package @lekoarts/gatsby-theme-minimal-blog

## [2.6.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.6.0...@lekoarts/gatsby-theme-minimal-blog@2.6.1) (2020-09-25)

### Bug Fixes

- **minimal-blog:** Add 'word-break' to prose CSS ([c74e28c](https://github.com/LekoArts/gatsby-themes/commit/c74e28ccb713f68ed6d5bf5b59ae05f5b032efea)), closes [#492](https://github.com/LekoArts/gatsby-themes/issues/492)

# [2.6.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.5.4...@lekoarts/gatsby-theme-minimal-blog@2.6.0) (2020-09-25)

### Features

- **minimal-blog:** Add Canonical URL support ([#494](https://github.com/LekoArts/gatsby-themes/issues/494)) ([0e9d7ac](https://github.com/LekoArts/gatsby-themes/commit/0e9d7ac04fdf9a7d30cca8c7ccf7565d3955502f))

## [2.5.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.5.3...@lekoarts/gatsby-theme-minimal-blog@2.5.4) (2020-09-25)

**Note:** Version bump only for package @lekoarts/gatsby-theme-minimal-blog

## [2.5.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.5.2...@lekoarts/gatsby-theme-minimal-blog@2.5.3) (2020-09-16)

### Bug Fixes

- **deps:** update packages ([#484](https://github.com/LekoArts/gatsby-themes/issues/484)) ([006cdc4](https://github.com/LekoArts/gatsby-themes/commit/006cdc4b8623595b14f6571fe694671a77a6a9dc))

## [2.5.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.5.1...@lekoarts/gatsby-theme-minimal-blog@2.5.2) (2020-09-10)

### Bug Fixes

- Pass all page props to page components ([#487](https://github.com/LekoArts/gatsby-themes/issues/487)) ([1f6ab37](https://github.com/LekoArts/gatsby-themes/commit/1f6ab3755a4425ae77af453cdb0a2d14cc49f006))

## [2.5.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.5.0...@lekoarts/gatsby-theme-minimal-blog@2.5.1) (2020-08-28)

### Bug Fixes

- **minimal-blog:** Fix code block CSS positioning ([#480](https://github.com/LekoArts/gatsby-themes/issues/480)) ([98b6cac](https://github.com/LekoArts/gatsby-themes/commit/98b6cacd9ee8bf49d92faa6874fe27ec4b62c5cf))

# [2.5.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.4.2...@lekoarts/gatsby-theme-minimal-blog@2.5.0) (2020-08-27)

### Features

- **minimal-blog:** Add "Copy" button ([#477](https://github.com/LekoArts/gatsby-themes/issues/477)) ([3c5ef99](https://github.com/LekoArts/gatsby-themes/commit/3c5ef991c9b593341d8851035c8d846ec2823423))

## [2.4.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.4.1...@lekoarts/gatsby-theme-minimal-blog@2.4.2) (2020-08-27)

### Bug Fixes

- Add variant to parts of minimal-blog content ([7cd58a5](https://github.com/LekoArts/gatsby-themes/commit/7cd58a51f1441ad7cc46011eac3e15be6b707d8b))

## [2.4.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.4.0...@lekoarts/gatsby-theme-minimal-blog@2.4.1) (2020-08-27)

### Bug Fixes

- **deps:** update packages ([#458](https://github.com/LekoArts/gatsby-themes/issues/458)) ([dcfb106](https://github.com/LekoArts/gatsby-themes/commit/dcfb1060ee90a928ae28840906b6f3b706218ad8))
- **deps:** update packages ([#461](https://github.com/LekoArts/gatsby-themes/issues/461)) ([6e4e35e](https://github.com/LekoArts/gatsby-themes/commit/6e4e35e21b502a9a3b9305785b372f03a7741ce7))

# [2.4.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.3.13...@lekoarts/gatsby-theme-minimal-blog@2.4.0) (2020-07-09)

### Features

- Add bundle-analyzer and lazy-load react-live ([#450](https://github.com/LekoArts/gatsby-themes/issues/450)) ([667fd33](https://github.com/LekoArts/gatsby-themes/commit/667fd33ce6af546cf2250af1e22395a26f45d6a2))

## [2.3.13](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.3.12...@lekoarts/gatsby-theme-minimal-blog@2.3.13) (2020-07-09)

**Note:** Version bump only for package @lekoarts/gatsby-theme-minimal-blog

## [2.3.12](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.3.11...@lekoarts/gatsby-theme-minimal-blog@2.3.12) (2020-07-04)

**Note:** Version bump only for package @lekoarts/gatsby-theme-minimal-blog

## [2.3.11](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.3.10...@lekoarts/gatsby-theme-minimal-blog@2.3.11) (2020-07-03)

### Bug Fixes

- **deps:** update packages ([#437](https://github.com/LekoArts/gatsby-themes/issues/437)) ([5e27caf](https://github.com/LekoArts/gatsby-themes/commit/5e27caf74c2eae0e7c158fa5a15bd52ae2069ee7))
- Set default values and replace defaultProps ([#436](https://github.com/LekoArts/gatsby-themes/issues/436)) ([d62857f](https://github.com/LekoArts/gatsby-themes/commit/d62857ffd1d2d97cfa31cb6ca37cb39db48467d0))

## [2.3.10](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.3.9...@lekoarts/gatsby-theme-minimal-blog@2.3.10) (2020-07-02)

### Bug Fixes

- **deps:** update packages ([#429](https://github.com/LekoArts/gatsby-themes/issues/429)) ([f25dfb6](https://github.com/LekoArts/gatsby-themes/commit/f25dfb6105669f62468abc63ceb73c2fbbb73065))

## [2.3.9](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.3.8...@lekoarts/gatsby-theme-minimal-blog@2.3.9) (2020-06-11)

### Bug Fixes

- Normalize CSS in themes & examples ([#422](https://github.com/LekoArts/gatsby-themes/issues/422)) ([9a2600c](https://github.com/LekoArts/gatsby-themes/commit/9a2600cc45d0f6729799183116f1b87d3c943749))

## [2.3.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.3.7...@lekoarts/gatsby-theme-minimal-blog@2.3.8) (2020-06-11)

### Bug Fixes

- **gatsby-theme-minimal-blog:** font-size on mobile iOS ([#421](https://github.com/LekoArts/gatsby-themes/issues/421)) ([ab65ecc](https://github.com/LekoArts/gatsby-themes/commit/ab65ecceaabefc0f2f77c6f9602280a7214c34d1))

## [2.3.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.3.6...@lekoarts/gatsby-theme-minimal-blog@2.3.7) (2020-06-08)

**Note:** Version bump only for package @lekoarts/gatsby-theme-minimal-blog

## [2.3.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.3.5...@lekoarts/gatsby-theme-minimal-blog@2.3.6) (2020-05-29)

### Bug Fixes

- **deps:** update packages ([#403](https://github.com/LekoArts/gatsby-themes/issues/403)) ([4275401](https://github.com/LekoArts/gatsby-themes/commit/427540138f6c8687dfff4163679a222ba5d49c8f))

## [2.3.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.3.4...@lekoarts/gatsby-theme-minimal-blog@2.3.5) (2020-05-12)

**Note:** Version bump only for package @lekoarts/gatsby-theme-minimal-blog

## [2.3.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.3.3...@lekoarts/gatsby-theme-minimal-blog@2.3.4) (2020-05-04)

**Note:** Version bump only for package @lekoarts/gatsby-theme-minimal-blog

## [2.3.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.3.2...@lekoarts/gatsby-theme-minimal-blog@2.3.3) (2020-05-02)

### Bug Fixes

- Split header.tsx into more granular components ([#390](https://github.com/LekoArts/gatsby-themes/issues/390)) ([eeecabc](https://github.com/LekoArts/gatsby-themes/commit/eeecabc5eb9efbbcefc3f41d8e7f559569af1e12))

## [2.3.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.3.1...@lekoarts/gatsby-theme-minimal-blog@2.3.2) (2020-05-02)

### Bug Fixes

- **minimal-blog:** Correct ::selection colors. Fixes [#389](https://github.com/LekoArts/gatsby-themes/issues/389) ([9936e85](https://github.com/LekoArts/gatsby-themes/commit/9936e854e2016865217558012120d020c006dfb1))

## [2.3.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.3.0...@lekoarts/gatsby-theme-minimal-blog@2.3.1) (2020-04-28)

### Bug Fixes

- **deps:** update dependency prism-react-renderer to ^1.1.0 ([#377](https://github.com/LekoArts/gatsby-themes/issues/377)) ([c334028](https://github.com/LekoArts/gatsby-themes/commit/c334028c0768b2b332b02db3a58e255ee3c8ad25))
- **deps:** update gatsby ([#378](https://github.com/LekoArts/gatsby-themes/issues/378)) ([8238565](https://github.com/LekoArts/gatsby-themes/commit/82385658f18c983b4ca4d83233660e9f4492a4a9))

# [2.3.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.2.11...@lekoarts/gatsby-theme-minimal-blog@2.3.0) (2020-04-27)

### Features

- Update theme-ui to v0.3.x ([#371](https://github.com/LekoArts/gatsby-themes/issues/371)) ([67a05ac](https://github.com/LekoArts/gatsby-themes/commit/67a05ac3e1deaddfe38591739e7f50f56d49d109)), closes [/theme-ui.com/migrating#v03](https://github.com//theme-ui.com/migrating/issues/v03) [#262](https://github.com/LekoArts/gatsby-themes/issues/262)

## [2.2.11](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.2.10...@lekoarts/gatsby-theme-minimal-blog@2.2.11) (2020-04-24)

### Bug Fixes

- **minimal-blog:** remove falsy values from plugins list ([#368](https://github.com/LekoArts/gatsby-themes/issues/368)) ([452afa9](https://github.com/LekoArts/gatsby-themes/commit/452afa9eae6e4a999fd118c8a81881bbe2eacec7))

## [2.2.10](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.2.9...@lekoarts/gatsby-theme-minimal-blog@2.2.10) (2020-04-24)

### Bug Fixes

- **deps:** update gatsby ([#364](https://github.com/LekoArts/gatsby-themes/issues/364)) ([aac08a8](https://github.com/LekoArts/gatsby-themes/commit/aac08a809b86de28f78d2db95dc5651a0a8e640b))

## [2.2.9](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.2.8...@lekoarts/gatsby-theme-minimal-blog@2.2.9) (2020-04-13)

### Bug Fixes

- **deps:** update dependency react-helmet to v6 ([#354](https://github.com/LekoArts/gatsby-themes/issues/354)) ([117d1d5](https://github.com/LekoArts/gatsby-themes/commit/117d1d5a6989d763c89137d8a9f0fb55f55efdee))

## [2.2.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.2.7...@lekoarts/gatsby-theme-minimal-blog@2.2.8) (2020-04-13)

### Bug Fixes

- **deps:** update gatsby ([#353](https://github.com/LekoArts/gatsby-themes/issues/353)) ([4550ff3](https://github.com/LekoArts/gatsby-themes/commit/4550ff3a79ba415a4f019019300fea47d24b16c8))

## [2.2.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.2.6...@lekoarts/gatsby-theme-minimal-blog@2.2.7) (2020-04-12)

### Bug Fixes

- Allow timeToRead to be null ([#347](https://github.com/LekoArts/gatsby-themes/issues/347)) ([5142ecf](https://github.com/LekoArts/gatsby-themes/commit/5142ecfcf10a7eb1529be335282b55368fa73047))

## [2.2.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.2.5...@lekoarts/gatsby-theme-minimal-blog@2.2.6) (2020-04-12)

### Bug Fixes

- Use withPrefix helper in SEO component ([#346](https://github.com/LekoArts/gatsby-themes/issues/346)) ([91fc16c](https://github.com/LekoArts/gatsby-themes/commit/91fc16c3c725a2d858ee093d761530975e2173d9))

## [2.2.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.2.4...@lekoarts/gatsby-theme-minimal-blog@2.2.5) (2020-04-12)

**Note:** Version bump only for package @lekoarts/gatsby-theme-minimal-blog

## [2.2.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.2.3...@lekoarts/gatsby-theme-minimal-blog@2.2.4) (2020-04-01)

### Bug Fixes

- Remove `@loadable/component` ([#334](https://github.com/LekoArts/gatsby-themes/issues/334)) ([405a753](https://github.com/LekoArts/gatsby-themes/commit/405a7538467d7656c840b9de7f5aef59235e5f26))

## [2.2.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.2.2...@lekoarts/gatsby-theme-minimal-blog@2.2.3) (2020-03-31)

### Bug Fixes

- **deps:** update gatsby ([#305](https://github.com/LekoArts/gatsby-themes/issues/305)) ([f3a5e36](https://github.com/LekoArts/gatsby-themes/commit/f3a5e369b6ce1e3b6c046287fe0c1511fa9db758))
- **deps:** update gatsby ([#312](https://github.com/LekoArts/gatsby-themes/issues/312)) ([5a93a50](https://github.com/LekoArts/gatsby-themes/commit/5a93a509d33cc1738de8cfb54a1690ae8dba3151))
- **deps:** update gatsby ([#319](https://github.com/LekoArts/gatsby-themes/issues/319)) ([b7c3dcd](https://github.com/LekoArts/gatsby-themes/commit/b7c3dcdfd54a3cd8291b3dca3868be2af738c1a5))
- **deps:** update gatsby ([#330](https://github.com/LekoArts/gatsby-themes/issues/330)) ([af9b834](https://github.com/LekoArts/gatsby-themes/commit/af9b834102b2e15689557c861f83902b3cb2a728))
- **deps:** update mdx to ^1.5.8 ([#331](https://github.com/LekoArts/gatsby-themes/issues/331)) ([9580e68](https://github.com/LekoArts/gatsby-themes/commit/9580e681f589d60aa1384c5b8d9049ecbde70ea2))
- **gatsby-theme-minimal-blog:** Add post slug to the url meta tag ([#322](https://github.com/LekoArts/gatsby-themes/issues/322)) ([4a983b7](https://github.com/LekoArts/gatsby-themes/commit/4a983b79ed5261d61b93849b1c8f823c739e7666))

## [2.2.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.2.1...@lekoarts/gatsby-theme-minimal-blog@2.2.2) (2020-03-04)

### Bug Fixes

- Allow customized RSS feed and title ([#301](https://github.com/LekoArts/gatsby-themes/issues/301)) ([fa01ac8](https://github.com/LekoArts/gatsby-themes/commit/fa01ac8f3e7fc103b16377d678ed22108b0e27d0))

## [2.2.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.2.0...@lekoarts/gatsby-theme-minimal-blog@2.2.1) (2020-03-04)

### Bug Fixes

- **deps:** update dependency @emotion/core to ^10.0.28 ([#296](https://github.com/LekoArts/gatsby-themes/issues/296)) ([8f92e72](https://github.com/LekoArts/gatsby-themes/commit/8f92e726a198026e1aa7917ab1161a941e166dbe))
- **deps:** update gatsby ([#297](https://github.com/LekoArts/gatsby-themes/issues/297)) ([1c2cd69](https://github.com/LekoArts/gatsby-themes/commit/1c2cd695d7e2abbc820ce81a37fc20f23ab9f7ce))
- **deps:** update gatsby ([#298](https://github.com/LekoArts/gatsby-themes/issues/298)) ([a904526](https://github.com/LekoArts/gatsby-themes/commit/a904526aed9c86fa291866fc85f0d0bca11112b6))

# [2.2.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.1.1...@lekoarts/gatsby-theme-minimal-blog@2.2.0) (2020-02-29)

### Features

- Add excerpt, description and timeToRead to queries ([8c38636](https://github.com/LekoArts/gatsby-themes/commit/8c386368fd4a819cc95f41af8842bde712a5183e)), closes [#274](https://github.com/LekoArts/gatsby-themes/issues/274)

## [2.1.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.1.0...@lekoarts/gatsby-theme-minimal-blog@2.1.1) (2020-02-29)

### Bug Fixes

- Add table styles to minimal-blog ([6e3d750](https://github.com/LekoArts/gatsby-themes/commit/6e3d750b01d0398fc2dd5b3d043754389a0f46ff))

# [2.1.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.0.3...@lekoarts/gatsby-theme-minimal-blog@2.1.0) (2020-02-27)

### Features

- Add `formatString` option ([#289](https://github.com/LekoArts/gatsby-themes/issues/289)) ([4714efb](https://github.com/LekoArts/gatsby-themes/commit/4714efbab2156eb853e94958f0b078f28dd065dc))

## [2.0.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.0.2...@lekoarts/gatsby-theme-minimal-blog@2.0.3) (2020-02-27)

### Bug Fixes

- **deps:** update mdx to ^1.5.7 ([#288](https://github.com/LekoArts/gatsby-themes/issues/288)) ([feac925](https://github.com/LekoArts/gatsby-themes/commit/feac9250092047dce9a2d9bfe0fe56a53a547256))

## [2.0.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.0.1...@lekoarts/gatsby-theme-minimal-blog@2.0.2) (2020-02-16)

### Bug Fixes

- **deps:** update gatsby ([#260](https://github.com/LekoArts/gatsby-themes/issues/260)) ([5a779f3](https://github.com/LekoArts/gatsby-themes/commit/5a779f32d548e0f4cfb63f6534f81c949123fa67))

## [2.0.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@2.0.0...@lekoarts/gatsby-theme-minimal-blog@2.0.1) (2020-01-23)

### Bug Fixes

- Various fixes about TypeScript, typos, comments ([#235](https://github.com/LekoArts/gatsby-themes/issues/235)) ([2a429c2](https://github.com/LekoArts/gatsby-themes/commit/2a429c2c49ed7a07ec231248372929bb2f18ab91))

# [2.0.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@1.2.1...@lekoarts/gatsby-theme-minimal-blog@2.0.0) (2020-01-23)

### Features

- Change config format on minimal-blog theme ([#234](https://github.com/LekoArts/gatsby-themes/issues/234)) ([bdeb670](https://github.com/LekoArts/gatsby-themes/commit/bdeb670797da5faa2d4084c3c128f0e38dbbf582))

### BREAKING CHANGES

- The navigation and externalLinks options are no longer on the siteMetadata but now in the theme options itself.

## [1.2.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@1.2.0...@lekoarts/gatsby-theme-minimal-blog@1.2.1) (2020-01-17)

### Bug Fixes

- **deps:** update dependency @loadable/component to ^5.12.0 ([#223](https://github.com/LekoArts/gatsby-themes/issues/223)) ([7b3c42b](https://github.com/LekoArts/gatsby-themes/commit/7b3c42b6cc494d222f7c821a1c48a3abbff79f5e))
- **deps:** update gatsby ([#224](https://github.com/LekoArts/gatsby-themes/issues/224)) ([b8c544a](https://github.com/LekoArts/gatsby-themes/commit/b8c544a0172180b246cd17c3385dc8e55efef981))
- **deps:** update mdx to ^1.5.5 ([#198](https://github.com/LekoArts/gatsby-themes/issues/198)) ([052d711](https://github.com/LekoArts/gatsby-themes/commit/052d711c2a56ecaf7a0f10f308b525cd963a9bc2))

# [1.2.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@1.1.8...@lekoarts/gatsby-theme-minimal-blog@1.2.0) (2020-01-07)

### Features

- **gatsby-theme-minimal-blog-core:** Custom slug for blog posts via frontmatter ([05cff1e](https://github.com/LekoArts/gatsby-themes/commit/05cff1ec0bcd2ba2fb3b7cfbb8a55f626ab9abd8)), closes [#217](https://github.com/LekoArts/gatsby-themes/issues/217)

## [1.1.8](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@1.1.7...@lekoarts/gatsby-theme-minimal-blog@1.1.8) (2020-01-06)

### Bug Fixes

- **gatsby-theme-minimal-blog:** Correct padding. Fixes [#211](https://github.com/LekoArts/gatsby-themes/issues/211) ([2b431c6](https://github.com/LekoArts/gatsby-themes/commit/2b431c60a64152cf107ef9ae4c5f5ff1a17d4252))
- **gatsby-theme-minimal-blog:** Styling fixes ([240571e](https://github.com/LekoArts/gatsby-themes/commit/240571e39a4b12d6b6585c89062579dd2dc03a0f))

## [1.1.7](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@1.1.6...@lekoarts/gatsby-theme-minimal-blog@1.1.7) (2020-01-04)

### Bug Fixes

- Various styling issues in different browsers ([#210](https://github.com/LekoArts/gatsby-themes/issues/210)) ([a4ce528](https://github.com/LekoArts/gatsby-themes/commit/a4ce528151c3ef227beec66162804d6ed88dd33b))

## [1.1.6](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@1.1.5...@lekoarts/gatsby-theme-minimal-blog@1.1.6) (2020-01-03)

### Bug Fixes

- **gatsby-theme-minimal-blog:** Various fixes ([#206](https://github.com/LekoArts/gatsby-themes/issues/206)) ([4080016](https://github.com/LekoArts/gatsby-themes/commit/4080016ebdc30ee970c9ba554cacfbfd662486ee))

## [1.1.5](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@1.1.4...@lekoarts/gatsby-theme-minimal-blog@1.1.5) (2019-12-31)

### Bug Fixes

- **deps:** update dependency @loadable/component to ^5.11.0 ([#189](https://github.com/LekoArts/gatsby-themes/issues/189)) ([fe60b2b](https://github.com/LekoArts/gatsby-themes/commit/fe60b2b557ef48e9f9ed413209e9f3ca19a8a18e))
- **deps:** update dependency react-live to ^2.2.2 ([#191](https://github.com/LekoArts/gatsby-themes/issues/191)) ([0b22261](https://github.com/LekoArts/gatsby-themes/commit/0b2226198ac6e7e397bc8b84a0ca3c6fdc68097c))
- **deps:** update emotion monorepo to ^10.0.27 ([#196](https://github.com/LekoArts/gatsby-themes/issues/196)) ([53f019e](https://github.com/LekoArts/gatsby-themes/commit/53f019ed5e0718367dcb2458480f42795cfa4efe))
- **deps:** update gatsby ([#192](https://github.com/LekoArts/gatsby-themes/issues/192)) ([77916ac](https://github.com/LekoArts/gatsby-themes/commit/77916acb51169bbc2e79af70d0b5ee93d1592a2f))
- **deps:** update theme ui ([#193](https://github.com/LekoArts/gatsby-themes/issues/193)) ([cfea6ee](https://github.com/LekoArts/gatsby-themes/commit/cfea6ee10d392cfc40190ed869ce5891221cd7da))
- **deps:** update theme ui ([#199](https://github.com/LekoArts/gatsby-themes/issues/199)) ([47bb84a](https://github.com/LekoArts/gatsby-themes/commit/47bb84a5b8da618e8b083632493c97a91c442a89))

## [1.1.4](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@1.1.3...@lekoarts/gatsby-theme-minimal-blog@1.1.4) (2019-12-03)

### Bug Fixes

- **deps:** update gatsby ([#178](https://github.com/LekoArts/gatsby-themes/issues/178)) ([6ede2c3](https://github.com/LekoArts/gatsby-themes/commit/6ede2c3654f5baa6f1c53f5bb73d046fc257c0af))

## [1.1.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@1.1.2...@lekoarts/gatsby-theme-minimal-blog@1.1.3) (2019-12-01)

### Bug Fixes

- **gatsby-theme-minimal-blog:** Remove file extension from import ([88f2f3d](https://github.com/LekoArts/gatsby-themes/commit/88f2f3d40d49afda2cd8e39fe4f3f11104d44a7a))

## [1.1.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@1.1.1...@lekoarts/gatsby-theme-minimal-blog@1.1.2) (2019-11-27)

### Bug Fixes

- **gatsby-theme-minimal-blog:** Re-Add lazy loading ([#171](https://github.com/LekoArts/gatsby-themes/issues/171)) ([f5e3147](https://github.com/LekoArts/gatsby-themes/commit/f5e3147d0fb3f9681718d1015d097bf3f62a3386))

## [1.1.1](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@1.1.0...@lekoarts/gatsby-theme-minimal-blog@1.1.1) (2019-11-26)

### Bug Fixes

- **gatsby-theme-minimal-blog:** Revert lazy loading ([#169](https://github.com/LekoArts/gatsby-themes/issues/169)) ([cfb9c68](https://github.com/LekoArts/gatsby-themes/commit/cfb9c6898e217c2483a6d6f150e0437da611717a))

# [1.1.0](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@1.0.3...@lekoarts/gatsby-theme-minimal-blog@1.1.0) (2019-11-25)

### Bug Fixes

- **deps:** update dependency @emotion/core to ^10.0.22 ([#156](https://github.com/LekoArts/gatsby-themes/issues/156)) ([d9cf433](https://github.com/LekoArts/gatsby-themes/commit/d9cf43326549091cec0e291a816d0f0f0fb48d37))
- **deps:** update gatsby ([#166](https://github.com/LekoArts/gatsby-themes/issues/166)) ([8b5cd32](https://github.com/LekoArts/gatsby-themes/commit/8b5cd32222495e1433b6c508697b1853ba99b939))
- **deps:** update theme ui ([#158](https://github.com/LekoArts/gatsby-themes/issues/158)) ([ef07342](https://github.com/LekoArts/gatsby-themes/commit/ef07342deed95faf403f3ce07fe5b2a8f9996ef0))

### Features

- **gatsby-theme-minimal-blog:** Lazy load code component ([#167](https://github.com/LekoArts/gatsby-themes/issues/167)) ([fbfedee](https://github.com/LekoArts/gatsby-themes/commit/fbfedee5988636d2e4a3a2ea817e8bdf8628d4f5)), closes [#161](https://github.com/LekoArts/gatsby-themes/issues/161) [#163](https://github.com/LekoArts/gatsby-themes/issues/163) [#164](https://github.com/LekoArts/gatsby-themes/issues/164) [#165](https://github.com/LekoArts/gatsby-themes/issues/165) [#166](https://github.com/LekoArts/gatsby-themes/issues/166)

## [1.0.3](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@1.0.2...@lekoarts/gatsby-theme-minimal-blog@1.0.3) (2019-11-16)

### Bug Fixes

- **gatsby-theme-minimal-blog:** Font size on code blocks ([06bd968](https://github.com/LekoArts/gatsby-themes/commit/06bd968))
- **gatsby-theme-minimal-blog:** Theme toggle on mobile safari ([7b2aefb](https://github.com/LekoArts/gatsby-themes/commit/7b2aefb))

## [1.0.2](https://github.com/LekoArts/gatsby-themes/compare/@lekoarts/gatsby-theme-minimal-blog@1.0.1...@lekoarts/gatsby-theme-minimal-blog@1.0.2) (2019-11-16)

**Note:** Version bump only for package @lekoarts/gatsby-theme-minimal-blog

## 1.0.1 (2019-11-16)

### Features

- Add gatsby-theme-minimal-blog ([#151](https://github.com/LekoArts/gatsby-themes/issues/151)) ([344a52c](https://github.com/LekoArts/gatsby-themes/commit/344a52c))
