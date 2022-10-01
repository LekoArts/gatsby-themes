<p align="center">
  <a href="https://minimal-blog.lekoarts.de">
    <img alt="LekoArts" src="https://img.lekoarts.de/gatsby/gatsby-site-illustration.png" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter: Minimal Blog
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-starter-minimal-blog/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-0BSD-blue.svg" alt="Minimal Blog is released under the 0BSD license." />
  </a>
  <a href="https://github.com/sponsors/LekoArts">
    <img alt="GitHub Sponsors" src="https://img.shields.io/github/sponsors/LekoArts">
  </a>
  <a href="https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Starter">
    <img alt="Website" src="https://img.shields.io/badge/-website-blue">
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
    <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
  </a>
</p>

Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting. Using the Gatsby Theme [`@lekoarts/gatsby-theme-minimal-blog`](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog).

[**Demo Website**](https://minimal-blog.lekoarts.de)

Also be sure to check out other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de) and my [Personal Website](https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Starter).

## ✨ Features

- MDX
- Fully customizable through the usage of Gatsby Themes (and Theme UI)
- Light Mode / Dark Mode
- Typography driven, minimal style
- Tags/Categories support
- Code highlighting with [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer). Also allows adding line numbers, line highlighting, language tabs, and file titles.
- RSS Feed for blog posts
- SEO (Sitemap, OpenGraph tags, Twitter tags)
- WebApp Manifest

## 🚀 Getting Started

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/LekoArts/gatsby-starter-minimal-blog)

### 1. **Create a Gatsby site.**

Use the Gatsby CLI to clone the site and install dependencies:

```sh
npx gatsby new gatsby-starter-minimal-blog https://github.com/LekoArts/gatsby-starter-minimal-blog
```

### 2. **Navigate to your new project.**

```sh
cd gatsby-starter-minimal-blog
```

### 3. **Open the code and start customizing!**

Start the site by running `npm run develop`.

Your site is now running at `http://localhost:8000`!

If you want to learn more about how you can use a Gatsby starter that is configured with a Gatsby theme, you can check out this [shorter](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/using-a-gatsby-theme/) or [longer](https://www.gatsbyjs.com/tutorial/using-a-theme/) tutorial. The tutorials don't exactly apply to this starter however the concepts are the same.

## 📝 Using and modifying this starter

**Important Note:** Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/) to understand how to customize the underlying theme!

This starter creates a new Gatsby site that installs and configures the theme [`@lekoarts/gatsby-theme-minimal-blog`](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog).

Have a look at the theme's README and files to see what options are available and how you can shadow the various components including Theme UI. Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-minimal-blog/` to shadow/override files. The Theme UI config can be configured by shadowing its files in `src/gatsby-plugin-theme-ui/`.

### Code Highlighting

Since the underlying theme ships with [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) certain additional features were added to code blocks. You can find an overview / usage example in the [example repository](https://github.com/LekoArts/gatsby-themes/tree/main/examples/minimal-blog/content/posts/fantastic-beasts-and-where-to-find-them/index.mdx)! If you want to change certain code styles or add additional language tabs, you need to shadow the file `src/@lekoarts/gatsby-theme-minimal-blog/styles/code.js`.

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

### Change your `static` folder

The `static` folder contains the icons, social media images and `robots.txt`. Don't forget to change these files, too! You can use [Real Favicon Generator](https://realfavicongenerator.net/) to generate the image files inside `static`.

## 🤔 Questions or problems?

If you have general questions or need help with Gatsby, please go to one of the [support platforms](https://www.gatsbyjs.com/contributing/community/#where-to-get-support) mentioned in Gatsby's documentation. If you have a specific question about this project, you can head to the [GitHub Discussions](https://github.com/LekoArts/gatsby-themes/discussions) of the repository.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on Gatsby's website](https://www.gatsbyjs.com/).

### Themes

To learn more about Gatsby themes specifically, I recommend checking out the [theme docs](https://www.gatsbyjs.com/docs/themes/).

### General

- **For most developers, I recommend starting with the [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/docs/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to Gatsby's documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _How-to Guides_ and _Reference_ items in the primary navigation.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [Patreon](https://www.patreon.com/lekoarts) or [GitHub Sponsor](https://github.com/sponsors/LekoArts)!
