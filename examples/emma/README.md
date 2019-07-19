<p align="center">
  <a href="https://emma.lekoarts.de">
    <img alt="LekoArts" src="https://img.lekoarts.de/gatsby/gatsby-site-illustration.png" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter Portfolio: Emma
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-starter-portfolio-emma/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Gatsby Starter Portfolio: Emma is released under the MIT license." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
    <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
  </a>
  <a href="https://app.netlify.com/sites/portfolio-emma/deploys">
      <img src="https://api.netlify.com/api/v1/badges/5a4f3e8c-82cb-411d-89f1-fcfde2d3cf80/deploy-status" alt="Netlify Status" />
    </a>
</p>

Minimalistic portfolio with full-width grid, page transitions, support for additional MDX pages, and a focus on large images. Using the Gatsby Theme [`@lekoarts/gatsby-theme-emma`](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emma).

[**Demo Website**](https://emma.lekoarts.de)

Also be sure to checkout other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de)

## ✨ Features

- MDX
- react-spring page animations
- Optional MDX pages which automatically get added to the navigation
- Fully customizable through the usage of Gatsby Themes (and Theme UI)
- Light Mode / Dark Mode
- Google Analytics Support
- SEO (Sitemap, OpenGraph tags, Twitter tags)
- Offline Support & WebApp Manifest

## 🚀 Getting Started

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/LekoArts/gatsby-starter-portfolio-emma) [![Edit gatsby-starter-portfolio-emma](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/LekoArts/gatsby-starter-portfolio-emma/tree/master/)

1. **Create a Gatsby site.**

Use the Gatsby CLI to create a new site, specifying this project

```sh
gatsby new project-name https://github.com/LekoArts/gatsby-starter-portfolio-emma
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

This starter creates a new Gatsby site that installs and configures the theme [`@lekoarts/gatsby-theme-emma`](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emma).

Please have a look at the theme's README and files to see what options are available and how you can shadow the various components including Theme UI.

### Adding a new project

1. Create a new folder inside `content/projects`
1. Create a new `index.mdx` file, and add the frontmatter (have a look at the already existing files for reference)
1. Add an image to the created folder (from step 1)
1. Reference this image as your `cover` in the frontmatter
1. Write your content below the frontmatter

### Adding a new page

1. Create a new folder inside `content/pages`
1. Create a new `index.mdx` file, and add the frontmatter
1. Add an image to the created folder (from step 1)
1. Reference this image as your `cover` in the frontmatter
1. Write your content below the frontmatter

### Change your `static` folder

The `static` folder contains the icons, social media images and robots.txt. Don't forget to change these files, too!

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on Gatsby's website](https://www.gatsbyjs.org/).

### Themes

- To learn more about Gatsby themes specifically, we recommend checking out the [theme docs](https://www.gatsbyjs.org/docs/themes/).

### General

- **For most developers, I recommend starting with the [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to Gatsby's documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Reference Guides_ and _Gatsby API_ sections in the sidebar.
