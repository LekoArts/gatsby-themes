---
"@lekoarts/gatsby-theme-jodie-core": minor
"@lekoarts/gatsby-theme-jodie": minor
---

feat(gatsby-theme-jodie): Add customization options for homepage

The PR https://github.com/LekoArts/gatsby-themes/pull/557 added some new possiblities to customize the homepage of `gatsby-theme-jodie`. This was requested in: https://github.com/LekoArts/gatsby-themes/issues/547

More specifically, this adds two new theme options and one special file to shadow:

1. `homepagePageLimit`
2. `homepageProjectLimit`
3. Shadowing [`modify-grid.ts`](https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-jodie/src/utils/modify-grid.ts)

The options 1) and 2) are explained in the theme options of the README -- they limit the number of projects and pages that will randomly be distributed on the page.

Option 3) is a really powerful one! The `modifyGrid` function is wrapping the entire array of projects & pages before passing it to the `render` function of the React component. Or in other words: As the name suggests you can modify the items that are passed to the grid on the homepage.

You don't need to update any code on your end, however, if you want to modify your homepage, see the instructions in the [README](https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-jodie/README.md#customizing-the-homepage).
