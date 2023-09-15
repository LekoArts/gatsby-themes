<p align="center">
  <a href="https://themes.lekoarts.de">
    <img alt="Gatsby Theme" src="https://img.lekoarts.de/gatsby/gatsby-themes-illustration.png" />
  </a>
</p>
<h1 align="center">
  @lekoarts/gatsby-theme-jodie-core
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@lekoarts/gatsby-theme-jodie-core is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/@lekoarts/gatsby-theme-jodie-core">
    <img src="https://img.shields.io/npm/v/@lekoarts/gatsby-theme-jodie-core.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-jodie-core?minimal=true">
    <img src="https://img.shields.io/npm/dm/@lekoarts/gatsby-theme-jodie-core.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-jodie-core?minimal=true">
    <img src="https://img.shields.io/npm/dt/@lekoarts/gatsby-theme-jodie-core.svg" alt="Total downloads on npm." />
  </a>
  <a href="https://www.lekoarts.de?utm_source=jodie&utm_medium=Theme">
    <img alt="Website" src="https://img.shields.io/badge/-website-blue">
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
    <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
  </a>
</p>

Core Theme for [`@lekoarts/gatsby-theme-jodie`](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-jodie). This theme implements the `Project` and `Page` node interfaces and exports templates (+ queries) which you can shadow.

Also, be sure to check out other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de) and my [Personal Website](https://www.lekoarts.de?utm_source=jodie&utm_medium=Theme).

## Installation

```sh
npm install @lekoarts/gatsby-theme-jodie-core
```

## Usage

### Theme options

| Key                    | Default Value      | Description                                                                                                 |
| ---------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------- |
| `basePath`             | `/`                | Root url for the theme                                                                                      |
| `projectsPath`         | `content/projects` | Location of projects                                                                                        |
| `projectsUrl`          | `/projects`        | url for the projects overview                                                                               |
| `projectsPrefix`       | `/`                | Prefix for all individual projects                                                                          |
| `pagesPath`            | `content/pages`    | Location of pages                                                                                           |
| `formatString`         | `DD.MM.YYYY`       | Configure the date format for Date fields                                                                   |
| `homepagePageLimit`    | `9999`             | Configure how many pages (defined in `pagesPath` should be shown on the homepage (`/`)                      |
| `homepageProjectLimit` | `3`                | Configure how many projects (defined in `projectsPath` should be shown on the homepage (`/`)                |
| `mdx`                  | `true`             | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off)   |
| `sharp`                | `true`             | Configure `gatsby-plugin-sharp` (if your website already is using the plugin pass `false` to turn this off) |

### Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/themes/shadowing/) to understand how to customize this theme! You can also have a look at [`@lekoarts/gatsby-theme-jodie`](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-jodie) to see it in action. Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-jodie-core/` to shadow/override files.

## Changelog

You can find the extensive [changelog of changes on GitHub](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie-core/CHANGELOG.md). You'll be able to see each patch, minor, and major changes and what pull requests contributed to them.

## Questions?

If you have general questions or need help with Gatsby, please go to one of the [support platforms](https://www.gatsbyjs.com/contributing/community/#where-to-get-support) mentioned in Gatsby's documentation. If you have a specific question about this theme, you can head to the [GitHub Discussions](https://github.com/LekoArts/gatsby-themes/discussions) of the repository.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [GitHub Sponsors](https://github.com/sponsors/LekoArts)!
