# Change Log

## 1.1.0

### Minor Changes

- [`2e2b6de`](https://github.com/LekoArts/gatsby-themes/commit/2e2b6de1b4b35ca614143907a4366a91d1aa2b7e) [#557](https://github.com/LekoArts/gatsby-themes/pull/557) Thanks [@LekoArts](https://github.com/LekoArts)! - feat(gatsby-theme-jodie): Add customization options for homepage

  The PR https://github.com/LekoArts/gatsby-themes/pull/557 added some new possiblities to customize the homepage of `gatsby-theme-jodie`. This was requested in: https://github.com/LekoArts/gatsby-themes/issues/547

  More specifically, this adds two new theme options and one special file to shadow:

  1. `homepagePageLimit`
  2. `homepageProjectLimit`
  3. Shadowing [`modify-grid.ts`](https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-jodie/src/utils/modify-grid.ts)

  The options 1) and 2) are explained in the theme options of the README -- they limit the number of projects and pages that will randomly be distributed on the page.

  Option 3) is a really powerful one! The `modifyGrid` function is wrapping the entire array of projects & pages before passing it to the `render` function of the React component. Or in other words: As the name suggests you can modify the items that are passed to the grid on the homepage.

  You don't need to update any code on your end, however, if you want to modify your homepage, see the instructions in the [README](https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-jodie/README.md#customizing-the-homepage).

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
