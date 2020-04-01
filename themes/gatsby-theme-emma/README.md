<p align="center">
  <a href="https://themes.lekoarts.de">
    <img alt="Gatsby Theme" src="https://img.lekoarts.de/gatsby/gatsby-themes-illustration.png" />
  </a>
</p>
<h1 align="center">
  @lekoarts/gatsby-theme-emma
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@lekoarts/gatsby-theme-emma is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/@lekoarts/gatsby-theme-emma">
    <img src="https://img.shields.io/npm/v/@lekoarts/gatsby-theme-emma.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-emma?minimal=true">
    <img src="https://img.shields.io/npm/dm/@lekoarts/gatsby-theme-emma.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-emma?minimal=true">
    <img src="https://img.shields.io/npm/dt/@lekoarts/gatsby-theme-emma.svg" alt="Total downloads on npm." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
      <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
    </a>
</p>

Minimalistic portfolio with full-width grid, page transitions, support for additional MDX pages, and a focus on large images. Especially designers and/or photographers will love this theme! Built with [MDX](https://mdxjs.com/) and [Theme UI](https://theme-ui.com/).

[![Live Preview](https://img.lekoarts.de/gatsby/preview.svg)](https://emma.lekoarts.de)

Read the [Source Code](https://github.com/LekoArts/gatsby-starter-portfolio-emma).

Also be sure to checkout other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de)

## Features

- MDX
- Theme UI-based theming
- react-spring page animations
- Optional MDX pages which automatically get added to the navigation

## Installation

```sh
npm install @lekoarts/gatsby-theme-emma
```

### Install as a starter

This will generate a new site (with the folder name "emma") that pre-configures use of the theme including example content.

```sh
gatsby new emma LekoArts/gatsby-starter-portfolio-emma
```

[**View the starter's code**](https://github.com/LekoArts/gatsby-starter-portfolio-emma)

## Usage

### Theme options

| Key            | Default Value      | Description                                                                                               |
| -------------- | ------------------ | --------------------------------------------------------------------------------------------------------- |
| `basePath`     | `/`                | Root url for the theme                                                                                    |
| `projectsPath` | `content/projects` | Location of projects                                                                                      |
| `pagesPath`    | `content/pages`    | Location of additional pages (optional)                                                                   |
| `mdx`          | `true`             | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off) |
| `formatString` | `DD.MM.YYYY`       | Configure the date format for Date fields                                                                 |

The usage of `content/pages` is optional. If no page/MDX file is found the navigation will be hidden.

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emma`,
      options: {
        // basePath defaults to `/`
        basePath: `/sideproject`,
        // projectsPath defaults to `content/projects`
        projectsPath: `content/cool-projects`,
      },
    },
  ],
};
```

#### Additional configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Emma`,
    // Default title of the page
    siteTitleAlt: `Emma - @lekoarts/gatsby-theme-emma`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Emma - Gatsby Theme from @lekoarts`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://emma.lekoarts.de`,
    // Used for SEO
    siteDescription: `Minimalistic portfolio with full-width grid, page transitions, support for additional MDX pages, and a focus on large images`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@lekoarts_de`,
  },
};
```

### Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) to understand how to customize the this theme! Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-emma/` to shadow/override files. The Theme UI config can be configured by shadowing its files in `src/gatsby-plugin-theme-ui/`.

### Adding content

#### Adding a new project

New projects will be shown on the index page of this theme and can be added by creating MDX files inside `content/projects`. General setup:

1. Create a new folder inside `content/projects`
1. Create a new `index.mdx` file, and add the frontmatter
1. Add an image to the created folder (from step 1)
1. Reference this image as your `cover` in the frontmatter
1. Write your content below the frontmatter
1. Add a `slug` to the frontmatter to use a custom slug, e.g. `slug: "/my-slug"` (Optional)

**Frontmatter reference:**

```md
---
client: "LekoArts"
title: "Theme"
cover: "./image.jpg"
date: "2019-06-10"
service: "Theme"
color: "#8e9d31"
---
```

#### Adding a new page

Additional pages will be shown in the navigation (left side) and allow you to display content other than projects, e.g. a "Contact" or "About Me" page. General setup:

1. Create a new folder inside `content/pages`
1. Create a new `index.mdx` file, and add the frontmatter
1. Add an image to the created folder (from step 1)
1. Reference this image as your `cover` in the frontmatter
1. Write your content below the frontmatter

**Frontmatter reference:**

```md
---
title: "Name"
slug: "/name"
cover: "./name.jpg"
---
```

#### Project Info

You can shadow `src/@lekoarts/gatsby-theme-emma/components/project-info.tsx` to edit the three informational items below the title on the `project` template.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [Patreon](https://www.patreon.com/lekoarts) or [GitHub Sponsor](https://github.com/sponsors/LekoArts)!
