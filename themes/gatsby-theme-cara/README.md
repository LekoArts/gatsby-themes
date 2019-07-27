<p align="center">
  <a href="https://themes.lekoarts.de">
    <img alt="Gatsby Theme" src="https://img.lekoarts.de/gatsby/gatsby-themes-illustration.png" />
  </a>
</p>
<h1 align="center">
  @lekoarts/gatsby-theme-cara
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@lekoarts/gatsby-theme-cara is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/@lekoarts/gatsby-theme-cara">
    <img src="https://img.shields.io/npm/v/@lekoarts/gatsby-theme-cara.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-cara?minimal=true">
    <img src="https://img.shields.io/npm/dm/@lekoarts/gatsby-theme-cara.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-cara?minimal=true">
    <img src="https://img.shields.io/npm/dt/@lekoarts/gatsby-theme-cara.svg" alt="Total downloads on npm." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
      <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
    </a>
</p>

Playful and Colorful One-Page portfolio featuring Parallax effects and animations. Especially designers and/or photographers will love this theme! Built with [MDX](https://mdxjs.com/) and [Theme UI](https://theme-ui.com/).

[**Demo Website**](https://cara.lekoarts.de)

Also be sure to checkout other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de)

## Features

- Theme UI-based theming
- react-spring parallax effect
- CSS Animations on Shapes

## Installation

```sh
npm install @lekoarts/gatsby-theme-cara
```

### Install as a starter

This will generate a new site (with the folder name "cara") that pre-configures use of the theme including example content and additional plugins.

```sh
gatsby new cara LekoArts/gatsby-starter-portfolio-cara
```

## Usage

### Theme options

| Key            | Default Value      | Description                                                                                               |
| -------------- | ------------------ | --------------------------------------------------------------------------------------------------------- |
| `basePath`     | `/`                | Root url for the theme                                                                                    |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {
        // basePath defaults to `/`
        basePath: `/sideproject`,
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
    siteTitle: `Cara`,
    // Default title of the page
    siteTitleAlt: `Cara - @lekoarts/gatsby-theme-cara`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Cara - Gatsby Theme from @lekoarts`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://cara.lekoarts.de`,
    // Used for SEO
    siteDescription: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@lekoarts_de`
  }
};
```
