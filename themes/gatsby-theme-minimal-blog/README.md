<p align="center">
  <a href="https://themes.lekoarts.de">
    <img alt="Gatsby Theme" src="https://img.lekoarts.de/gatsby/gatsby-themes-illustration.png" />
  </a>
</p>
<h1 align="center">
  @lekoarts/gatsby-theme-minimal-blog
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@lekoarts/gatsby-theme-minimal-blog is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/@lekoarts/gatsby-theme-minimal-blog">
    <img src="https://img.shields.io/npm/v/@lekoarts/gatsby-theme-minimal-blog.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-minimal-blog?minimal=true">
    <img src="https://img.shields.io/npm/dm/@lekoarts/gatsby-theme-minimal-blog.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-minimal-blog?minimal=true">
    <img src="https://img.shields.io/npm/dt/@lekoarts/gatsby-theme-minimal-blog.svg" alt="Total downloads on npm." />
  </a>
  <a href="https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme">
    <img alt="Website" src="https://img.shields.io/badge/-website-blue">
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
    <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
  </a>
</p>

Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.

[![Live Preview](https://img.lekoarts.de/gatsby/preview.svg)](https://minimal-blog.lekoarts.de) [![View Design on Figma](https://img.lekoarts.de/gatsby/view_design.svg)](https://www.figma.com/file/sq2VwMy8579ioDTXjUdlYr/gatsby-theme-minimal-blog?node-id=0%3A1)

Read the [Source Code](https://github.com/LekoArts/gatsby-starter-minimal-blog).

Also be sure to check out other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de) and my [Personal Website](https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme).

## Features

- MDX
- Theme UI-based theming
- Light Mode / Dark Mode
- Typography driven, minimal style
- Tags/Categories support
- Code highlighting with [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer). Also allows adding line numbers, line highlighting, language tabs, and file titles.
- RSS Feed for blog posts

## Installation

```sh
npm install @lekoarts/gatsby-theme-minimal-blog
```

### Install as a starter

This will generate a new site that pre-configures the theme including example content and additional plugins.

```sh
npx gatsby new gatsby-starter-minimal-blog https://github.com/LekoArts/gatsby-starter-minimal-blog
```

[**View the starter's code**](https://github.com/LekoArts/gatsby-starter-minimal-blog)

## Usage

### Theme options

| Key               | Default Value   | Description                                                                                                    |
| ----------------- | --------------- | -------------------------------------------------------------------------------------------------------------- |
| `basePath`        | `/`             | Root url for the theme                                                                                         |
| `blogPath`        | `/blog`         | url for the blog post overview page                                                                            |
| `tagsPath`        | `/tags`         | url for the tags overview page and prefix for tags (e.g. `/tags/my-tag`)                                       |
| `postsPath`       | `content/posts` | Location of posts                                                                                              |
| `postsPrefix`     | `/`             | Prefix for all individual blog posts                                                                           |
| `pagesPath`       | `content/pages` | Location of additional pages (optional)                                                                        |
| `mdx`             | `true`          | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off)      |
| `sharp`           | `true`          | Configure `gatsby-plugin-sharp` (if your website already is using the plugin pass `false` to turn this off)    |
| `formatString`    | `DD.MM.YYYY`    | Configure the date format for Date fields                                                                      |
| `showLineNumbers` | `false`         | Show line numbers in code blocks. This can also be enabled on a block-by-block basis (see "Code Highlighting") |
| `showCopyButton`  | `true`          | Show copy button in code blocks                                                                                |
| `navigation`      | `[]`            | Add links to your internal sites to the left part of the header                                                |
| `externalLinks`   | `[]`            | Add links to your external sites to the right part of the header                                               |

#### Example usage

```js
// gatsby-config.mjs
const config = {
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        showLineNumbers: true,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/lekoarts_de`,
          },
          {
            name: `Homepage`,
            url: `https://www.lekoarts.de`,
          },
        ],
      },
    },
  ],
};

export default config;
```

#### Additional configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.mjs`

```js
// gatsby-config.mjs
const config = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Lupin`,
    // Default title of the page
    siteTitleAlt: `Minimal Blog - @lekoarts/gatsby-theme-minimal-blog`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Minimal Blog - Gatsby Theme from @lekoarts`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://minimal-blog.lekoarts.de`,
    // Used for SEO
    siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
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

If you want to add additional items to the navigation or external links (left and right side of header), add objects in the shape shown above to the arrays.

### Code Highlighting

Since this theme ships with [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) certain additional features were added to code blocks. You can find an overview / usage example in the [example repository](https://github.com/LekoArts/gatsby-themes/tree/main/examples/minimal-blog/content/posts/code-block-examples/index.mdx)! If you want to change certain code styles or add additional language tabs, you need to shadow the file `src/@lekoarts/gatsby-theme-minimal-blog/styles/code.js`.

**Language tabs:**

When you add a language (such as e.g. `js` or `javascript`) to the code block, a little tab will appear at the top left corner.

````
```js
// code goes here
```
````

**Code titles:**

You can display a title (e.g. the file path) above the code block.

````
```jsx title=your-title
// code goes here
```
````

Or without a specific language:

````
```none title=your-title
// code goes here
```
````

**Line highlighting:**

You can highlight single or multiple (or both) lines in a code block. You need to add a language.

````
```js highlight=2,4-5
const test = 3
const foo = 'bar'
const harry = 'potter'
const hermione = 'granger'
const ron = 'weasley'
```
````

**Show line numbers:**

If you want to show line numbers you can either globally enable them (see theme options) or on a block-by-block basis. You can also combine that with the other attributes.

````
```js withLineNumbers
// code goes here
```
````

### Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/) to understand how to customize the theme! Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-minimal-blog/` to shadow/override files.

### Adding content

#### Adding a new blog post

New blog posts will be shown on the index page (the three most recent ones) of this theme and on the blog overview page. They can be added by creating MDX files inside `content/posts`. General setup:

1. Create a new folder inside `content/posts`
1. Create a new `index.mdx` file, and add the frontmatter
1. Add images to the created folder (from step 1) you want to reference in your blog post
1. Reference an image as your `banner` in the frontmatter
1. Write your content below the frontmatter
1. Add a `slug` to the frontmatter to use a custom slug, e.g. `slug: "/my-slug"` (Optional)
1. Use `defer` to opt-in into Deferred Static Generation (DSG) (optional)

**Frontmatter reference:**

```md
---
title: Introduction to "Defence against the Dark Arts"
date: 2019-11-07
description: Defence Against the Dark Arts (abbreviated as DADA) is a subject taught at Hogwarts School of Witchcraft and Wizardry and Ilvermorny School of Witchcraft and Wizardry.
defer: false
tags:
  - Tutorial
  - Dark Arts
banner: ./defence-against-the-dark-arts.jpg
canonicalUrl: https://random-blog-about-curses.com/curses-counter-curses-and-more
---
```

**The fields `description`, `banner`, `defer` and `canonicalUrl` are optional!** If no description is provided, an excerpt of the blog post will be used. If no banner is provided, the default `siteImage` (from `siteMetadata`) is used. If no `canonicalUrl` is provided, it will not be included in the header.

The `date` field has to be written in the format `YYYY-MM-DD`!

#### Adding a new page

Additional pages can be created by placing MDX files inside `contents/pages`, e.g. an "About" or "Contact" page. You'll manually need to link to those pages, for example by adding them to the navigation (in `siteMetadata`). General instructions:

1. Create a new folder inside `content/pages`
1. Create a new `index.mdx` file, and add the frontmatter
1. Write your content below the frontmatter
1. Optionally add files/images to the folder you want to reference from the page
1. Use `defer` to opt-in into Deferred Static Generation (DSG) (optional)

**Frontmatter reference:**

```md
---
title: About
slug: "/about"
defer: false
---
```

### Changing the "Hero" text

To edit the hero text ("Hi, I'm Lupin...), create a file at `src/@lekoarts/gatsby-theme-minimal-blog/texts/hero.mdx` to edit the text.

### Changing the "Projects" part

To edit the projects part below "Latest posts", create a file at `src/@lekoarts/gatsby-theme-minimal-blog/texts/bottom.mdx` to edit the contents.

### Extending the footer of the post

Inside the [`<Post />` component](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/src/components/post.tsx) there's also a `<PostFooter />` component that you can shadow to display elements between the end of the post and the global footer. By default it returns `null`. Create a file at `src/@lekoarts/gatsby-theme-minimal-blog/components/post-footer.jsx` to edit this section. The `<PostFooter />` component receives the complete `post` prop that `<Post />` also receives.

## Changelog

You can find the extensive [changelog of changes on GitHub](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/CHANGELOG.md). You'll be able to see each patch, minor, and major changes and what pull requests contributed to them.

## Questions?

If you have general questions or need help with Gatsby, please go to one of the [support platforms](https://www.gatsbyjs.com/contributing/community/#where-to-get-support) mentioned in Gatsby's documentation. If you have a specific question about this theme, you can head to the [GitHub Discussions](https://github.com/LekoArts/gatsby-themes/discussions) of the repository.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [Patreon](https://www.patreon.com/lekoarts) or [GitHub Sponsor](https://github.com/sponsors/LekoArts)!
