<p align="center">
  <a href="https://themes.lekoarts.de">
    <img alt="Gatsby Theme" src="https://img.lekoarts.de/gatsby/gatsby-themes-illustration.png" />
  </a>
</p>
<h1 align="center">
  @lekoarts/gatsby-theme-minimal-blog-core
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@lekoarts/gatsby-theme-minimal-blog-core is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/@lekoarts/gatsby-theme-minimal-blog-core">
    <img src="https://img.shields.io/npm/v/@lekoarts/gatsby-theme-minimal-blog-core.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-minimal-blog-core?minimal=true">
    <img src="https://img.shields.io/npm/dm/@lekoarts/gatsby-theme-minimal-blog-core.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-minimal-blog-core?minimal=true">
    <img src="https://img.shields.io/npm/dt/@lekoarts/gatsby-theme-minimal-blog-core.svg" alt="Total downloads on npm." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
      <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
    </a>
</p>

Core Theme for [`@lekoarts/gatsby-theme-minimal-blog`](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog). This theme implements the `Post` and `Page` node interfaces and exports templates (+ queries) which you can shadow.

Also be sure to checkout other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de)

## Installation

```sh
npm install @lekoarts/gatsby-theme-minimal-blog-core
```

## Usage

### Theme options

| Key            | Default Value   | Description                                                                                               |
| -------------- | --------------- | --------------------------------------------------------------------------------------------------------- |
| `basePath`     | `/`             | Root url for the theme                                                                                    |
| `blogPath`     | `/blog`         | url for the blog post overview page                                                                       |
| `tagsPath`     | `/tags`         | url for the tags overview page and prefix for tags (e.g. `/tags/my-tag`)                                  |
| `postsPath`    | `content/posts` | Location of posts                                                                                         |
| `postsPrefix`  | `/`             | Prefix for all individual blog posts                                                                      |
| `pagesPath`    | `content/pages` | Location of additional pages (optional)                                                                   |
| `mdx`          | `true`          | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off) |
| `formatString` | `DD.MM.YYYY`    | Configure the date format for Date fields                                                                 |

The usage of `content/pages` is optional.

### Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) to understand how to customize the this theme! You can also have a look at [`@lekoarts/gatsby-theme-minimal-blog`](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog) to see it in action. Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-minimal-blog-core/` to shadow/override files.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [Patreon](https://www.patreon.com/lekoarts) or [GitHub Sponsor](https://github.com/sponsors/LekoArts)!
