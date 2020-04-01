<p align="center">
  <a href="https://themes.lekoarts.de">
    <img alt="Gatsby Theme" src="https://img.lekoarts.de/gatsby/gatsby-themes-illustration.png" />
  </a>
</p>
<h1 align="center">
  @lekoarts/gatsby-theme-emilia
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@lekoarts/gatsby-theme-emilia is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/@lekoarts/gatsby-theme-emilia">
    <img src="https://img.shields.io/npm/v/@lekoarts/gatsby-theme-emilia.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-emilia?minimal=true">
    <img src="https://img.shields.io/npm/dm/@lekoarts/gatsby-theme-emilia.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-emilia?minimal=true">
    <img src="https://img.shields.io/npm/dt/@lekoarts/gatsby-theme-emilia.svg" alt="Total downloads on npm." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
      <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
    </a>
</p>

Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI. Includes Light/Dark mode.

[![Live Preview](https://img.lekoarts.de/gatsby/preview.svg)](https://emilia.lekoarts.de) [![View Design on Figma](https://img.lekoarts.de/gatsby/view_design.svg)](https://www.figma.com/file/DITKhFGWrMOADOPLSA9uzn/gatsby-theme-emilia?node-id=0%3A1)

Read the [Source Code](https://github.com/LekoArts/gatsby-starter-portfolio-emilia).

Also be sure to checkout other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de)

## Features

- MDX
- Theme UI-based theming
- react-spring page animations
- Light Mode / Dark Mode
- Masonry grid

## Installation

```sh
npm install @lekoarts/gatsby-theme-emilia
```

### Install as a starter

This will generate a new site that pre-configures use of the theme.

```sh
gatsby new emilia LekoArts/gatsby-starter-portfolio-emilia
```

[**View the starter's code**](https://github.com/LekoArts/gatsby-starter-portfolio-emilia)

## Usage

### Theme options

| Key               | Default Value                                                                                                                                 | Description                                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `basePath`        | `/`                                                                                                                                           | Root url for the theme                                                                                                                            |
| `projectsPath`    | `content/projects`                                                                                                                            | Location of projects                                                                                                                              |
| `assetsPath`      | `content/assets`                                                                                                                              | Location of assets (such as the avatar in the header)                                                                                             |
| `mdx`             | `true`                                                                                                                                        | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off)                                         |
| `name`            | `LekoArts`                                                                                                                                    | The name displayed as the title on the homepage, and the link to the homepage (top left corner)                                                   |
| `location`        | `Germany`                                                                                                                                     | Shown below the title                                                                                                                             |
| `socialMedia`     | `` [{ title: `Twitter`, href: `https://twitter.com/lekoarts_de` }, { title: `Instagram`, href: `https://www.instagram.com/lekoarts.de/` }] `` | An array of objects (with the keys "title" and "href" display on the homepage. Can of course hold any kind of links (not limited to social media) |
| `showThemeAuthor` | `true`                                                                                                                                        | Show the "Theme by LekoArts" in the footer                                                                                                        |
| `formatString`    | `DD.MM.YYYY`                                                                                                                                  | Configure the date format for Date fields                                                                                                         |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
          name: `Emilia`,
          socialMedia: [
            {
              title: `Instagram`,
              href: `https://www.instagram.com/lekoarts.de`
            }
          ]
        }
      }
    }
  ]
};
```

#### Additional configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Emilia`,
    // Default title of the page
    siteTitleAlt: `Emilia - @lekoarts/gatsby-theme-emilia`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Emilia - Gatsby Theme from @lekoarts`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://emilia.lekoarts.de`,
    // Used for SEO
    siteDescription: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI. Includes Light/Dark mode.`,
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

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) to understand how to customize the this theme! Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-emilia/` to shadow/override files. The Theme UI config can be configured by shadowing its files in `src/gatsby-plugin-theme-ui/`.

### Adding content

#### Adding a new project

New projects will be shown on the index page of this theme and can be added by creating MDX files inside `content/projects`. General setup:

1. Create a new folder inside `content/projects`
1. Create a new `index.mdx` file, and add the frontmatter
1. Add images to the created folder (from step 1)
1. Reference your desired images as your `cover` in the frontmatter
1. Write your content below the frontmatter (optional)
1. Add a `slug` to the frontmatter to use a custom slug, e.g. `slug: "/my-slug"` (Optional)

**Frontmatter reference:**

```md
---
cover: "./sean-foley-0JD7kvxAq0Y-unsplash.jpg"
date: "2019-09-10"
title: "Emilia"
areas:
  - Neon
  - Lights
---
```

The frontmatter alone is enough, if you'd like to add additional content you can do so by writing your content (as usual with MDX) below the frontmatter. It'll be displayed in the header of the project below the date and areas.

#### Changing the "About Me" text

Create a file at `src/@lekoarts/gatsby-theme-emilia/texts/about-me.mdx` to edit the text.

#### Changing the avatar

Place an image with the name `avatar` inside the folder `content/assets` (or your custom `assetsPath` which you defined for the theme).

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [Patreon](https://www.patreon.com/lekoarts) or [GitHub Sponsor](https://github.com/sponsors/LekoArts)!
