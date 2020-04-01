<p align="center">
  <a href="https://emilia.lekoarts.de">
    <img alt="LekoArts" src="https://img.lekoarts.de/gatsby/gatsby-site-illustration.png" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter Portfolio: Emilia
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-starter-portfolio-emilia/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Gatsby Starter Portfolio: Emilia is released under the MIT license." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
    <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
  </a>
</p>

Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI. Using the Gatsby Theme [`@lekoarts/gatsby-theme-emilia`](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emilia).

[**Demo Website**](https://emilia.lekoarts.de)

Also be sure to checkout other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de)

## ✨ Features

- MDX
- Fully customizable through the usage of Gatsby Themes (and Theme UI)
- Light Mode / Dark Mode
- Page Transitions
- Masonry grid and focus on big images
- Google Analytics Support
- SEO (Sitemap, OpenGraph tags, Twitter tags)
- Offline Support & WebApp Manifest

## 🚀 Getting Started

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/LekoArts/gatsby-starter-portfolio-emilia) [![Edit gatsby-starter-portfolio-emilia](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/LekoArts/gatsby-starter-portfolio-emilia/tree/master/)

1. **Create a Gatsby site.**

Use the Gatsby CLI to create a new site, specifying this project

```sh
gatsby new project-name https://github.com/LekoArts/gatsby-starter-portfolio-emilia
```

2. **Start developing.**

Navigate into your new site's directory and start it up.

```sh
cd project-name
gatsby develop
```

3. **Open the code and start customizing!**

Your site is now running at `http://localhost:8000`!

If you want to learn more about how you can use a Gatsby starter that is configured with a Gatsby theme, you can checkout this [shorter](https://www.gatsbyjs.org/docs/themes/using-a-gatsby-theme/) or [longer](https://www.gatsbyjs.org/tutorial/using-a-theme/) tutorial. The tutorials don't exactly apply to this starter however the concepts are the same.

## 📝 Using and modifying this starter

**Important Note:** Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) to understand how to customize the underlying theme!

This starter creates a new Gatsby site that installs and configures the theme [`@lekoarts/gatsby-theme-emilia`](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emilia).

Have a look at the theme's README and files to see what options are available and how you can shadow the various components including Theme UI. Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-emilia/` to shadow/override files. The Theme UI config can be configured by shadowing its files in `src/gatsby-plugin-theme-ui/`.

### Adding a new project

New projects will be shown on the index page of this theme and can be added by creating MDX files inside `content/projects`. General setup:

1. Create a new folder inside `content/projects`
1. Create a new `index.mdx` file, and add the frontmatter
1. Add images to the created folder (from step 1)
1. Reference your desired images as your `cover` in the frontmatter
1. Write your content below the frontmatter (optional)

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

### Changing the "About Me" text

Create a file at `src/@lekoarts/gatsby-theme-emilia/texts/about-me.mdx` to edit the text.

### Changing the avatar

Place an image with the name `avatar` inside the folder `content/assets` (or your custom `assetsPath` which you defined for the theme).

### Change your `static` folder

The `static` folder contains the icons, social media images and robots.txt. Don't forget to change these files, too!

## 🤔 Questions or problems?

Please open up an issue on the main repository: [LekoArts/gatsby-themes](https://github.com/LekoArts/gatsby-themes). Thanks!

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on Gatsby's website](https://www.gatsbyjs.org/).

### Themes

- To learn more about Gatsby themes specifically, we recommend checking out the [theme docs](https://www.gatsbyjs.org/docs/themes/).

### General

- **For most developers, I recommend starting with the [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to Gatsby's documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Reference Guides_ and _Gatsby API_ sections in the sidebar.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [Patreon](https://www.patreon.com/lekoarts) or [GitHub Sponsor](https://github.com/sponsors/LekoArts)!
