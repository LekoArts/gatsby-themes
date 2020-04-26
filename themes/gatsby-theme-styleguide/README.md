<p align="center">
  <a href="https://themes.lekoarts.de">
    <img alt="Gatsby Theme" src="https://img.lekoarts.de/gatsby/gatsby-themes-illustration.png" />
  </a>
</p>
<h1 align="center">
  @lekoarts/gatsby-theme-styleguide
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@lekoarts/gatsby-theme-styleguide is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/@lekoarts/gatsby-theme-styleguide">
    <img src="https://img.shields.io/npm/v/@lekoarts/gatsby-theme-styleguide.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-styleguide?minimal=true">
    <img src="https://img.shields.io/npm/dm/@lekoarts/gatsby-theme-styleguide.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-styleguide?minimal=true">
    <img src="https://img.shields.io/npm/dt/@lekoarts/gatsby-theme-styleguide.svg" alt="Total downloads on npm." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
      <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
    </a>
</p>

Instantly create a styleguide page based on your Theme UI configuration. Zero-config — just install the theme and see your Theme UI config displayed in a beautiful manner.

[![Live Preview](https://img.lekoarts.de/gatsby/preview.svg)](https://theme-ui-styleguide.netlify.com)

Read the [Source Code](https://github.com/LekoArts/gatsby-starter-styleguide).

Also be sure to checkout other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de)

## Features

- Automatic styleguide based on your Theme UI configuration
- Displays colors (individual and palettes), typography (font family, weights, sizes, headings), and a spacing scale
- Uses [`@lekoarts/gatsby-theme-specimens`](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-specimens) under the hood. You can use components from it to extend your styleguide page

## Installation

```sh
npm install @lekoarts/gatsby-theme-styleguide theme-ui
```

This theme has `theme-ui` defined as a `peerDependency` so make sure to also install it if you don't use it already.

### Install as a starter

This will generate a new site that pre-configures use of the theme.

```sh
gatsby new styleguide LekoArts/gatsby-starter-styleguide
```

[**View the starter's code**](https://github.com/LekoArts/gatsby-starter-styleguide)

## Usage

### Theme options

| Key        | Default Value  | Description            |
| ---------- | -------------- | ---------------------- |
| `basePath` | `/style-guide` | Root url for the theme |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-styleguide`,
      options: {
          basePath: `/`,
        }
      }
    }
  ]
};
```

### Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) to understand how to customize the this theme! Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-styleguide/` to shadow/override files.

#### Examples

| Component            | Description                                                      |
| -------------------- | ---------------------------------------------------------------- |
| `src/template.tsx`   | Used by `createPage` function and holds all following components |
| `src/layout.tsx`     | Wrapper for adding a page layout (e.g. max-width)                |
| `src/header.tsx`     | Header for the top of the page ("Style Guide")                   |
| `src/colors.tsx`     | Section for colors                                               |
| `src/typography.tsx` | Section for typography styles                                    |
| `src/space.tsx`      | Section for space                                                |
| `src/footer.tsx`     | Footer section (holding the theme notice)                        |

Please keep in mind that you can shadow `.tsx` files also with `.js`/`.jsx` files.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [Patreon](https://www.patreon.com/lekoarts) or [GitHub Sponsor](https://github.com/sponsors/LekoArts)!
