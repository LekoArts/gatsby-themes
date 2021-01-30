<p align="center">
  <a href="https://www.lekoarts.de/en">
    <img alt="LekoArts" src="https://img.lekoarts.de/gatsby/lekoarts-monogram.svg" width="80" />
  </a>
</p>
<h1 align="center">
  Free & Open Source Gatsby Themes by LekoArts
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@lekoarts/gatsby-themes is released under the MIT license." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-minimal-blog,@lekoarts/gatsby-theme-cara,@lekoarts/gatsby-theme-emma,@lekoarts/gatsby-theme-emilia,@lekoarts/gatsby-theme-styleguide,@lekoarts/gatsby-theme-status-dashboard,@lekoarts/gatsby-theme-specimens,@lekoarts/gatsby-theme-graphql-playground?interval=30&minimal=true">
    <img src="https://img.shields.io/badge/-npmcharts-red" alt="npmcharts.com Overview" />
  </a>
  <a href="https://circleci.com/gh/LekoArts/gatsby-themes">
    <img src="https://circleci.com/gh/LekoArts/gatsby-themes.svg?style=svg" alt="CircleCI Status" />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
    <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
  </a>
</p>

Get **high-quality** and **customizable** Gatsby themes to quickly bootstrap your website! Choose from many professionally created and impressive designs with a wide variety of features and customization options. Use Gatsby Themes to take your project to the next level and let you and your customers take advantage of the many benefits Gatsby has to offer.

## 🎨 Themes Overview

[![Themes Preview Banner](https://img.lekoarts.de/gatsby/thin_banner.jpg)](https://themes.lekoarts.de)

## 💼 Contents

This repository is a collection of my Gatsby themes, managed as a [monorepo](https://trunkbaseddevelopment.com/monorepos/) with [Lerna](https://github.com/lerna/lerna) and [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/).

- `.circleci`: Contains the configuration file for CircleCI
- `.github`: GitHub actions, templates for issues, and FUNDING file. A GitHub action will publish the `/examples` as starters to individual GitHub repositories.
- `cypress`: Contains the Cypress tests for `examples`
- `examples`: Contains the corresponding example sites for the `themes`. These projects can and should be used as a starter and will be copied over to their own repository. Hence they contain example data and additional Gatsby plugins (e.g. `gatsby-plugin-manifest` and `gatsby-plugin-offline`). The folder names are the contents after `gatsby-theme-*`
- `jest`: Primarily files for mocking functions/files in Jest tests
- `plop-templates`: Template for [plop.js](https://plopjs.com/)
- `scripts`: In order to run the tests on CircleCI some utility bash scripts are needed which are located here
- `themes`: Contains the themes themselves. They should only have the bare minimum of plugins installed (as `examples` can expand them) and also use `Theme UI` for styling. The naming of the folders must be `gatsby-theme-[name-with-dashes]` and the package name under the scope of `@lekoarts`
- `www`: Contains the source code for [themes.lekoarts.de](http://themes.lekoarts.de)

## 🤝 How to Contribute

Make sure that you have `yarn` installed on your machine (as it's mandatory for `yarn workspaces`). Fork this repository, clone it and run `yarn` in the root directory.

To launch the development server of an example site, use:

```sh
yarn workspace [examples/name] develop
```

Or for a build:

```sh
yarn workspace [examples/name] build
```

In the case of `examples/emma` this command would be `yarn workspace emma develop`. Now you can make changes to the respective theme and see them via Hot-Reloading.

Commit your changes to a feature branch of your fork and open up a PR against this repository. The PR will have checks in place (unit and end-to-end tests) which you can also run on your machine in preparation for the PR.

Have a look at the [contributing guide](CONTRIBUTING.md) to learn more.

## 🤩 Support Me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [Patreon](https://www.patreon.com/lekoarts) or [GitHub Sponsor](https://github.com/sponsors/LekoArts)!

## 🎓 Learning Gatsby Themes

### Articles from lekoarts.de

- [How I used Theme UI to build my Gatsby Themes library](https://www.lekoarts.de/en/blog/how-i-used-theme-ui-to-build-my-gatsby-themes-library)
- [Setting up a Gatsby Themes workspace with TypeScript, ESLint & Cypress](https://www.lekoarts.de/en/blog/setting-up-a-gatsby-themes-workspace-with-typescript-eslint-and-cypress)
- [Specimens for Gatsby powered Design Systems](https://www.lekoarts.de/en/blog/specimens-for-gatsby-powered-design-systems)
- [Creating your own Status Dashboard with Gatsby](https://www.lekoarts.de/en/blog/creating-your-own-status-dashboard-with-gatsby)

### Official resources

- [Gatsbyjs.com - Gatsby Themes](https://www.gatsbyjs.com/docs/themes/)
- [Building a Theme](https://www.gatsbyjs.com/tutorial/building-a-theme/)
- [Free egghead.io "Gatsby Theme Authoring" course](https://egghead.io/courses/gatsby-theme-authoring)

### Paid resources

- [Composable Gatsby Themes](https://egghead.io/courses/composable-gatsby-themes)
