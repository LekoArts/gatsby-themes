<p align="center">
  <a href="https://themes.lekoarts.de">
    <img alt="Gatsby Theme" src="https://img.lekoarts.de/gatsby/gatsby-themes-illustration.png" />
  </a>
</p>
<h1 align="center">
  @lekoarts/gatsby-theme-jodie
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/main/LICENSE">
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
  <a href="https://www.lekoarts.de?utm_source=jodie&utm_medium=Theme">
    <img alt="Website" src="https://img.shields.io/badge/-website-blue">
  </a>
<a href="https://bsky.app/profile/lekoarts.de">
  <img src="https://img.shields.io/badge/Bluesky-0285FF?logo=bluesky&logoColor=fff" alt="Follow @lekoarts.de" />
</a>
</p>

Image-heavy photography portfolio with colorful accents & customizable pages. Includes adaptive image grids powered by CSS grid and automatic image integration into projects.

[![Live Preview](https://img.lekoarts.de/gatsby/preview.svg)](https://jodie.lekoarts.de)

Read the [Source Code](https://github.com/LekoArts/gatsby-starter-portfolio-jodie).

Also, be sure to check out other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de) and my [Personal Website](https://www.lekoarts.de?utm_source=jodie&utm_medium=Theme).

## Features

- MDX
- Theme UI-based theming
- Create a project by creating an MDX file and dropping the images into the same folder
- Extensible custom pages
- Define colors for each page, and the sidebar & content will adapt while maintaining WCAG 2 AA contrast ratios

## Installation

```sh
npm install @lekoarts/gatsby-theme-jodie
```

### Install as a starter

This will generate a new site that pre-configures the theme including example content and additional plugins.

```sh
npx gatsby new gatsby-starter-portfolio-jodie https://github.com/LekoArts/gatsby-starter-portfolio-jodie
```

[**View the starter's code**](https://github.com/LekoArts/gatsby-starter-portfolio-jodie)

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
| `navigation`           | `[]`               | Add links to your internal sites to the sidebar                                                             |
| `homepagePageLimit`    | `9999`             | Configure how many pages (defined in `pagesPath` should be shown on the homepage (`/`)                      |
| `homepageProjectLimit` | `3`                | Configure how many projects (defined in `projectsPath` should be shown on the homepage (`/`)                |
| `mdx`                  | `true`             | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off)   |
| `sharp`                | `true`             | Configure `gatsby-plugin-sharp` (if your website already is using the plugin pass `false` to turn this off) |

#### Example usage

```js
// gatsby-config.mjs
const config = {
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
}

export default config
```

#### Additional configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.mjs`

```js
// gatsby-config.mjs
const config = {
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
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Set the default "lang" attribute on "html" element
    siteLanguage: `en`,
    // Twitter Handle
    author: `@lekoarts_de`,
  },
};

export default config;
```

### Customizing the homepage

Both your projects and pages are displayed on the homepage (located at `/` in the live project and [`src/components/homepage.tsx`](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/src/components/homepage.tsx) in the theme itself). Of course, you can always [shadow](#shadowing) this and other files to customize the theme to your liking.

However, before completely overriding the homepage you should consider the three available options:

1. `homepagePageLimit`
2. `homepageProjectLimit`
3. Shadowing [`modify-grid.ts`](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/src/utils/modify-grid.ts)

The options 1) and 2) are explained in the [theme options](#theme-options) -- they limit the number of projects and pages that will randomly be distributed on the page.

Option 3) is a really powerful one! The `modifyGrid` function is wrapping the entire array of projects & pages before passing it to the `render` function of the React component. Or in other words: As the name suggests you can modify the items that are passed to the grid on the homepage.

You can achieve this by shadowing [`modify-grid.ts`](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/src/utils/modify-grid.ts): Create a file at `src/@lekoarts/gatsby-theme-jodie/utils/modify-grid.js` and define a default export for `modifyGrid`.

#### `modifyGrid` examples

_All code snippets are placed inside `src/@lekoarts/gatsby-theme-jodie/utils/modify-grid.js`_

**Default behavior:**

```js
const modifyGrid = (data) => data;

export default modifyGrid;
```

I've also created some resolver templates that you can use. They are exported in [`resolver-templates.ts`](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/src/utils/resolver-templates.ts). They cover the most common use cases and can give you an idea on what to do with the resolver.

**Only pages / Only projects:**

```js
import {
  onlyPages,
  onlyProjects,
} from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

const modifyGrid = (data) => onlyPages(data);
// const modifyGrid = (data) => onlyProjects(data)

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

## Changelog

You can find the extensive [changelog of changes on GitHub](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/CHANGELOG.md). You'll be able to see each patch, minor, and major changes and what pull requests contributed to them.

## Questions?

If you have general questions or need help with Gatsby, please go to one of the [support platforms](https://www.gatsbyjs.com/contributing/community/#where-to-get-support) mentioned in Gatsby's documentation. If you have a specific question about this theme, you can head to the [GitHub Discussions](https://github.com/LekoArts/gatsby-themes/discussions) of the repository.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Bluesky](https://bsky.app/profile/lekoarts.de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [GitHub Sponsors](https://github.com/sponsors/LekoArts)!
