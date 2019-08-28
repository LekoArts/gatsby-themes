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
  <a href="https://circleci.com/gh/LekoArts/gatsby-themes">
    <img src="https://circleci.com/gh/LekoArts/gatsby-themes.svg?style=svg" alt="CircleCI Status" />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
    <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
  </a>
</p>

Get **high-quality** and **customizable** Gatsby themes to quickly bootstrap your website! Choose from many professionally created and impressive designs with a wide variety of features and customization options. Use Gatsby Themes to take your project to the next level and let you and your customers take advantage of the many benefits Gatsby has to offer.

## 💼 Contents

This repository is a collection of my Gatsby themes, managed as a [monorepo](https://trunkbaseddevelopment.com/monorepos/) with [Lerna](https://github.com/lerna/lerna) and [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/).

- `.circleci`: Contains the configuration file for CircleCI
- `cypress`: Contains the Cypress tests for `examples`
- `examples`: Contains the corresponding example sites for the `themes`. These projects can and should be used as a starter and will be copied over to their own repository. Hence they contain example data and additional Gatsby plugins (e.g. `gatsby-plugin-manifest` and `gatsby-plugin-offline`). The folder names are the contents after `gatsby-theme-*`
- `scripts`: In order to run the tests on CircleCI some utility bash scripts are needed which are located here
- `themes`: Contains the themes themselves. They should only have the bare minimum of plugins installed (as `examples` can expand them) and also use `Theme UI` for styling. The naming of the folders must be `gatsby-theme-[name-with-dashes]` and the package name under the scope of `@lekoarts`
- `www`: Contains the source code for [themes.lekoarts.de](http://themes.lekoarts.de)

## 🤝 How to Contribute

Make sure that you have `yarn` installed on your machine (as it's mandatory for `yarn workspaces`). Fork this repository, clone it and run `yarn` in the root directory.

To launch the development server of an example site, use:

```sh
yarn workspace [examples/name] develop
```

In the case of `examples/emma` this command would be `yarn workspace emma develop`. Now you can make changes to the respective theme and see them via Hot-Reloading.

Commit your changes to a feature branch of your fork and open up a PR against this repository. The PR will have checks in place (unit and end-to-end tests) which you can also run on your machine in preparation for the PR.

### Testing

#### Jest

Some parts of the codebase have unit tests written with Jest to ensure the correct functionality, e.g. custom hooks or utility functions.

You can run `yarn test` to run all tests, `yarn test:watch` to run Jest in watch mode. Feel free to improve the code base with additional tests!

#### Cypress

The Cypress tests are written in TypeScript, too, and hence need to be compiled before usage. Run the following script for development:

```sh
bash ./scripts/e2e-dev.sh "example-name"
```

In the case of `examples/emma` the "example-name" would be "emma".

The script starts `tsc` in _watch_ mode (for the files in `cypress/e2e`) and outputs them to `cypress/e2e/build` + starts `start-server-and-test` with Gatsby's development server and Cypress. Once the Cypress GUI opens select the fitting test (the others won't work, only the respective test + `smoke.js`!).

CircleCI will run the `e2e-build.sh` script — you can use it to run the tests headless.

You can skip the e2e tests if you use `docs` or `www` in your branch name, e.g. `docs/improve-readme` or `www/add-new-entry`.

## 🤩 Newsletter

If you want to receive monthly updates on my themes and all things related to Gatsby themes (relevant blog posts from me and other people) you can [subscribe to my newsletter](https://leko.io/newsletter-themes).

## 🎓 Learning Gatsby Themes

### Articles from lekoarts.de

- [How I used Theme UI to build my Gatsby Themes library](https://www.lekoarts.de/en/blog/how-i-used-theme-ui-to-build-my-gatsby-themes-library)
- [Setting up a Gatsby Themes workspace with TypeScript, ESLint & Cypress](https://www.lekoarts.de/en/blog/setting-up-a-gatsby-themes-workspace-with-typescript-eslint-and-cypress)

### Official resources

- [Gatsbyjs.org - Gatsby Themes](https://www.gatsbyjs.org/docs/themes/)
- [Building a Theme](https://www.gatsbyjs.org/tutorial/building-a-theme)
- [Free egghead.io "Gatsby Theme Authoring" course](https://egghead.io/courses/gatsby-theme-authoring)
