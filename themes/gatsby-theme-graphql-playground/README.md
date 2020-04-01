<p align="center">
  <a href="https://themes.lekoarts.de">
    <img alt="Gatsby Theme" src="https://img.lekoarts.de/gatsby/gatsby-themes-illustration.png" />
  </a>
</p>
<h1 align="center">
  @lekoarts/gatsby-theme-graphql-playground
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@lekoarts/gatsby-theme-graphql-playground is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/@lekoarts/gatsby-theme-graphql-playground">
    <img src="https://img.shields.io/npm/v/@lekoarts/gatsby-theme-graphql-playground.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-graphql-playground?minimal=true">
    <img src="https://img.shields.io/npm/dm/@lekoarts/gatsby-theme-graphql-playground.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-graphql-playground?minimal=true">
    <img src="https://img.shields.io/npm/dt/@lekoarts/gatsby-theme-graphql-playground.svg" alt="Total downloads on npm." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
      <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
    </a>
</p>

GraphQL Playground to showcase the power of GraphQL. Write your queries and documentation with [MDX](https://mdxjs.com/) and display queries in an interactive GraphiQL window. It can source from your localhost or a remote URL (e.g. Codesandbox).

[![Live Preview](https://img.lekoarts.de/gatsby/preview.svg)](https://gatsby-theme-graphql-playground.netlify.com/)

Read the [Source Code](https://github.com/LekoArts/gatsby-starter-graphql-playground).

Also be sure to checkout other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de)

## Features

- MDX for the navigation and content
- Automatically converts GraphQL code blocks with the meta field `preview` to live previews in a GraphiQL iframe
- Theme UI-based theming
- Light Mode / Dark Mode

## Installation

```sh
npm install @lekoarts/gatsby-theme-graphql-playground
```

### Install as a starter

This will generate a new site that pre-configures use of the theme.

```sh
gatsby new graphql-playground LekoArts/gatsby-starter-graphql-playground
```

[**View the starter's code**](https://github.com/LekoArts/gatsby-starter-graphql-playground)

## Usage

### Theme options

| Key        | Default Value | Description                                                                                             |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| `basePath` | `/`           | Root url for the theme                                                                                  |
| `docsPath` | `docs`        | Location of the individual doc pages                                                                    |
| `mdx`      | `true`        | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass false to turn this off) |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-graphql-playground`,
      options: {
          docsPath: `playground`
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
    siteTitle: `GraphQL Playground`,
    // Default title of the page
    siteTitleAlt: `GraphQL Playground - @lekoarts/gatsby-theme-graphql-playground`,
    // Can be used for e.g. JSONLD
    siteHeadline: `GraphQL Playground - Gatsby Theme from @lekoarts`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://gatsby-theme-graphql-playground.netlify.com`,
    // Used for SEO
    siteDescription: `Stub description for graphql-playground`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@lekoarts_de`,
    // Will be the root URL for the iFrame
    graphiQLUrl: `https://711808k40x.sse.codesandbox.io/___graphql`,
  },
};
```

### Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) to understand how to customize the this theme! Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-graphql-playground/` to shadow/override files.

### Adding content

#### Changing the Navigation

Create a file at `src/@lekoarts/gatsby-theme-graphql-playground/data/navigation.mdx` to edit the navigation.

#### Adding a new doc page

First, create a new entry in your `navigation.mdx` file. If this file doesn't exist yet, see the step above.

You need to create a "classic" markdown list, like:

```markdown
- Welcome
- Basics
  - [GraphQL Introduction](/graphql-introduction)
```

You'll now see a navigation that has two sections (Welcome and Basics) of which Basics has a sub-menu.

Now, create a new file at `docs/graphql-introduction.mdx`. The filename has to be the same as the link you used in the navigation.
Add a title to the frontmatter of the MDX file and place the GraphQL query you wish to display in the GraphiQL iFrame as the **first** item.

````markdown
---
title: GraphQL Introduction
---

```graphql preview
{
  ...your
  query
  goes
  here
}
```

Normal text can go here.

## Normal markdown too
````

You need to write your query with `graphql preview` so that the theme can pick it up. You also must place it directly after the frontmatter.

#### Changing the "Welcome" text

Create a file at `src/@lekoarts/gatsby-theme-graphql-playground/data/index.mdx` to edit the text.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [Patreon](https://www.patreon.com/lekoarts) or [GitHub Sponsor](https://github.com/sponsors/LekoArts)!
