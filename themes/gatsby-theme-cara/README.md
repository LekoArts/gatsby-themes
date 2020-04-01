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

[![Live Preview](https://img.lekoarts.de/gatsby/preview.svg)](https://cara.lekoarts.de)

Read the [Source Code](https://github.com/LekoArts/gatsby-starter-portfolio-cara).

Also be sure to checkout other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de)

## Features

- Theme UI-based theming
- react-spring parallax effect
- CSS Animations on Shapes
- Light/Dark mode

## Installation

```sh
npm install @lekoarts/gatsby-theme-cara
```

### Install as a starter

This will generate a new site (with the folder name "cara") that pre-configures use of the theme including example content and additional plugins.

```sh
gatsby new cara LekoArts/gatsby-starter-portfolio-cara
```

[**View the starter's code**](https://github.com/LekoArts/gatsby-starter-portfolio-cara)

## Usage

### Theme options

| Key        | Default Value | Description                                                                                             |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| `basePath` | `/`           | Root url for the theme                                                                                  |
| `mdx`      | `true`        | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass false to turn this off) |

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
    author: `@lekoarts_de`,
  },
};
```

### Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) to understand how to customize the this theme! Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-cara/` to shadow/override files. The Theme UI config can be configured by shadowing its files in `src/gatsby-plugin-theme-ui/`.

### Editing the content

The content of the page is managed by `.mdx` files inside the theme's `sections` folder. You can edit the files by shadowing them in your site.

These files are available: `intro.mdx`, `projects.mdx`, `about.mdx`, `contact.mdx`

See the [example](https://github.com/LekoArts/gatsby-themes/tree/master/examples/cara/src/@lekoarts/gatsby-theme-cara/sections) that shadows via `src/@lekoarts/gatsby-theme-cara/sections/intro.mdx`:

```md
# Hi, I'm Jane Doe

I'm creating noice web experiences for the next generation of consumer-facing companies
```

> The other headings should be `<h2>` headings!

You also have access to the `<ProjectCard />` component/shortcode which is used in the `projects.mdx` section. The component takes the props `title` (string), `link` (string), `bg` (string) and `children` (React.ReactNode). You would use it like that:

```md
## Projects

<ProjectCard title="Freiheit" link="https://www.behance.net/gallery/58937147/Freiheit" bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)">
This project is my entry to Adobe's #ChallengeYourPerspective contest.
</ProjectCard>
```

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [Patreon](https://www.patreon.com/lekoarts) or [GitHub Sponsor](https://github.com/sponsors/LekoArts)!
