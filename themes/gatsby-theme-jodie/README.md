<p align="center">
  <a href="https://themes.lekoarts.de">
    <img alt="Gatsby Theme" src="https://img.lekoarts.de/gatsby/gatsby-themes-illustration.png" />
  </a>
</p>
<h1 align="center">
  @lekoarts/gatsby-theme-jodie
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@lekoarts/gatsby-theme-jodie is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/@lekoarts/gatsby-theme-jodie">
    <img src="https://img.shields.io/npm/v/@lekoarts/gatsby-theme-jodie.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-jodie?minimal=true">
    <img src="https://img.shields.io/npm/dm/@lekoarts/gatsby-theme-jodie.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-jodie?minimal=true">
    <img src="https://img.shields.io/npm/dt/@lekoarts/gatsby-theme-jodie.svg" alt="Total downloads on npm." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
      <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
    </a>
</p>

Image-heavy photography portfolio with colorful accents & customizable pages. Includes adaptive image grids powered by CSS grid and automatic image integration into projects.

[![Live Preview](https://img.lekoarts.de/gatsby/preview.svg)](https://jodie.lekoarts.de)

Read the [Source Code](https://github.com/LekoArts/gatsby-starter-portfolio-jodie).

Also, be sure to checkout other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de)

## Features

- MDX
- Theme UI-based theming
- Create a project by creating an MDX file and dropping the images into the same folder
- Extensible custom pages
- Define colors for each page and the sidebar & content will adapt while maintaining WCAG 2 AA contrast ratios

## Installation

```sh
npm install @lekoarts/gatsby-theme-jodie
```

### Install as a starter

This will generate a new site that pre-configures use of the theme.

```sh
gatsby new jodie LekoArts/gatsby-starter-portfolio-jodie
```

[**View the starter's code**](https://github.com/LekoArts/gatsby-starter-portfolio-jodie)

## Usage

### Theme options

| Key                    | Default Value      | Description                                                                                  |
| ---------------------- | ------------------ | -------------------------------------------------------------------------------------------- |
| `basePath`             | `/`                | Root url for the theme                                                                       |
| `projectsPath`         | `content/projects` | Location of projects                                                                         |
| `projectsUrl`          | `/projects`        | url for the projects overview                                                                |
| `projectsPrefix`       | `/`                | Prefix for all individual projects                                                           |
| `pagesPath`            | `content/pages`    | Location of pages                                                                            |
| `formatString`         | `DD.MM.YYYY`       | Configure the date format for Date fields                                                    |
| `navigation`           | `[]`               | Add links to your internal sites to the sidebar                                              |
| `homepagePageLimit`    | `9999`             | Configure how many pages (defined in `pagesPath` should be shown on the homepage (`/`)       |
| `homepageProjectLimit` | `3`                | Configure how many projects (defined in `projectsPath` should be shown on the homepage (`/`) |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      options: {
          navigation: [
            { name: `Projects`, slug: `/projects` },
            { name: `Instagram`, slug: `/instagram` },
            { name: `About`, slug: `/about` },
          ],
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
    siteTitle: `Jodie`,
    // Default title of the page
    siteTitleAlt: `Jodie - @lekoarts/gatsby-theme-jodie`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Jodie - Gatsby Theme from @lekoarts`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://jodie.lekoarts.de`,
    // Used for SEO
    siteDescription: `Image-heavy photography portfolio with colorful accents & customizable pages. Includes adaptive image grids powered by CSS grid and automatic image integration into projects.`,
    // Will be set on the html tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@lekoarts_de`,
  },
};
```

### Customizing the homepage

Both your projects and pages are displayed on the homepage (located at `/` in the live project and [`src/components/homepage.tsx`](https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-jodie/src/components/homepage.tsx) in the theme itself). Of course, you can always [shadow](#shadowing) this and other files to customize the theme to your liking.

However, before completely overriding the homepage you should consider the three available options:

1. `homepagePageLimit`
2. `homepageProjectLimit`
3. Shadowing [`modify-grid.ts`](https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-jodie/src/utils/modify-grid.ts)

The options 1) and 2) are explained in the [theme options](#theme-options) -- they limit the number of projects and pages that will randomly be distributed on the page.

Option 3) is a really powerful one! The `modifyGrid` function is wrapping the entire array of projects & pages before passing it to the `render` function of the React component. Or in other words: As the name suggests you can modify the items that are passed to the grid on the homepage.

You can achieve this by shadowing [`modify-grid.ts`](https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-jodie/src/utils/modify-grid.ts): Create a file at `src/@lekoarts/gatsby-theme-jodie/utils/modify-grid.js` and define a default export for `modifyGrid`.

#### `modifyGrid` examples

_All code snippets are placed inside `src/@lekoarts/gatsby-theme-jodie/utils/modify-grid.js`_

**Default behavior:**

```js
const modifyGrid = (data) => data;

export default modifyGrid;
```

I've also created some resolver templates that you can use. They are exported in [`resolver-templates.ts`](https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-jodie/src/utils/resolver-templates.ts). They cover the most common use cases and can give you an idea on what to do with the resolver.

**Only pages / Only projects:**

```js
import {
  onlyPages,
  onlyProjects,
} from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

const modifyGrid = (data) => onlyPages(data);
// const modifyGrid = data => onlyProjects(data)

export default modifyGrid;
```

**Filter by slug:**

```js
import { filterBySlug } from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

const modifyGrid = (data) => filterBySlug(data, ["/about"]);

export default modifyGrid;
```

**Shuffle:**

```js
import { shuffle } from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

const modifyGrid = (data) => shuffle(data);

export default modifyGrid;
```

### Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/themes/shadowing/) to understand how to customize this theme! Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-jodie/` to shadow/override files.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [Patreon](https://www.patreon.com/lekoarts) or [GitHub Sponsor](https://github.com/sponsors/LekoArts)!
