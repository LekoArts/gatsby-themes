<p align="center">
  <a href="https://themes.lekoarts.de">
    <img alt="Gatsby Theme" src="https://img.lekoarts.de/gatsby/gatsby-themes-illustration.png" />
  </a>
</p>
<h1 align="center">
  @lekoarts/gatsby-theme-emilia-core
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@lekoarts/gatsby-theme-emilia-core is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/@lekoarts/gatsby-theme-emilia-core">
    <img src="https://img.shields.io/npm/v/@lekoarts/gatsby-theme-emilia-core.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-emilia-core?minimal=true">
    <img src="https://img.shields.io/npm/dm/@lekoarts/gatsby-theme-emilia-core.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-emilia-core?minimal=true">
    <img src="https://img.shields.io/npm/dt/@lekoarts/gatsby-theme-emilia-core.svg" alt="Total downloads on npm." />
  </a>
  <a href="https://www.lekoarts.de?utm_source=emilia&utm_medium=Theme">
    <img alt="Website" src="https://img.shields.io/badge/-website-blue">
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
    <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
  </a>
</p>

Core Theme for [`@lekoarts/gatsby-theme-emilia`](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-emilia). This theme implements the `Project` node interface and exports templates (+ queries) which you can shadow.

Also be sure to check out other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de) and my [Personal Website](https://www.lekoarts.de?utm_source=emilia&utm_medium=Theme).

## Installation

```sh
npm install @lekoarts/gatsby-theme-emilia-core
```

## Usage

### Theme options

| Key               | Default Value                                                                                                               | Description                                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `basePath`        | `/`                                                                                                                         | Root url for the theme                                                                                                                            |
| `projectsPath`    | `content/projects`                                                                                                          | Location of projects                                                                                                                              |
| `assetsPath`      | `content/assets`                                                                                                            | Location of assets (such as the avatar in the header)                                                                                             |
| `mdx`             | `true`                                                                                                                      | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off)                                         |
| `sharp`           | `true`                                                                                                                      | Configure `gatsby-plugin-sharp` (if your website already is using the plugin pass `false` to turn this off)                                       |
| `name`            | `LekoArts`                                                                                                                  | The name displayed as the title on the homepage, and the link to the homepage (top left corner)                                                   |
| `location`        | `Germany`                                                                                                                   | Shown below the title                                                                                                                             |
| `socialMedia`     | ``[{ title: `Twitter`, href: `https://twitter.com/lekoarts_de` }, { title: `Homepage`, href: `https://www.lekoarts.de` }]`` | An array of objects (with the keys "title" and "href" display on the homepage. Can of course hold any kind of links (not limited to social media) |
| `showThemeAuthor` | `true`                                                                                                                      | Show the "Theme by LekoArts" in the footer                                                                                                        |
| `formatString`    | `DD.MM.YYYY`                                                                                                                | Configure the date format for Date fields                                                                                                         |

### Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/) to understand how to customize the theme! You can also have a look at [`@lekoarts/gatsby-theme-emilia`](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-emilia) to see it in action. Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-emilia-core/` to shadow/override files.

## Changelog

You can find the extensive [changelog of changes on GitHub](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-emilia-core/CHANGELOG.md). You'll be able to see each patch, minor, and major changes and what pull requests contributed to them.

## Questions?

If you have general questions or need help with Gatsby, please go to one of the [support platforms](https://www.gatsbyjs.com/contributing/community/#where-to-get-support) mentioned in Gatsby's documentation. If you have a specific question about this theme, you can head to the [GitHub Discussions](https://github.com/LekoArts/gatsby-themes/discussions) of the repository.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [GitHub Sponsors](https://github.com/sponsors/LekoArts)!
