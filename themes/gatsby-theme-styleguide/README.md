<p align="center">
  <a href="https://themes.lekoarts.de">
    <img alt="Gatsby Theme" src="https://img.lekoarts.de/gatsby/gatsby-themes-illustration.png" />
  </a>
</p>
<h1 align="center">
  @lekoarts/gatsby-theme-styleguide
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/main/LICENSE">
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
  <a href="https://www.lekoarts.de?utm_source=styleguide&utm_medium=Theme">
    <img alt="Website" src="https://img.shields.io/badge/-website-blue">
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
      <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
    </a>
</p>

Instantly create a styleguide page based on your Theme UI configuration. Zero-config — just install the theme and see your Theme UI config displayed in a beautiful manner.

[![Live Preview](https://img.lekoarts.de/gatsby/preview.svg)](https://theme-ui-styleguide.netlify.app)

Read the [Source Code](https://github.com/LekoArts/gatsby-starter-styleguide).

Also be sure to check out other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de) and my [Personal Website](https://www.lekoarts.de?utm_source=styleguide&utm_medium=Theme).

## Features

- Automatic styleguide based on your Theme UI configuration
- Displays colors (individual and palettes), typography (font family, weights, sizes, headings), and a spacing scale
- Uses [`@lekoarts/gatsby-theme-specimens`](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-specimens) under the hood. You can use components from it to extend your styleguide page

## Installation

```sh
npm install @lekoarts/gatsby-theme-styleguide theme-ui
```

This theme has `theme-ui` defined as a `peerDependency` so make sure to also install it if you don't use it already.

### Install as a starter

This will generate a new site that pre-configures the theme including example content and additional plugins.

```sh
npx gatsby new gatsby-starter-styleguide https://github.com/LekoArts/gatsby-starter-styleguide
```

[**View the starter's code**](https://github.com/LekoArts/gatsby-starter-styleguide)

## Usage

### Theme options

| Key        | Default Value  | Description            |
| ---------- | -------------- | ---------------------- |
| `basePath` | `/style-guide` | Root url for the theme |

#### Example usage

```js
// gatsby-config.mjs
const config = {
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-styleguide`,
      options: {
          basePath: `/`,
        }
      }
    }
  ]
}

export default config
```

### Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/) to understand how to customize the theme! Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-styleguide/` to shadow/override files.

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

## Changelog

You can find the extensive [changelog of changes on GitHub](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-styleguide/CHANGELOG.md). You'll be able to see each patch, minor, and major changes and what pull requests contributed to them.

## Questions?

If you have general questions or need help with Gatsby, please go to one of the [support platforms](https://www.gatsbyjs.com/contributing/community/#where-to-get-support) mentioned in Gatsby's documentation. If you have a specific question about this theme, you can head to the [GitHub Discussions](https://github.com/LekoArts/gatsby-themes/discussions) of the repository.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [GitHub Sponsors](https://github.com/sponsors/LekoArts)!
