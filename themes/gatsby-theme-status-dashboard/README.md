<p align="center">
  <a href="https://themes.lekoarts.de">
    <img alt="Gatsby Theme" src="https://img.lekoarts.de/gatsby/gatsby-themes-illustration.png" />
  </a>
</p>
<h1 align="center">
  @lekoarts/gatsby-theme-status-dashboard
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@lekoarts/gatsby-theme-status-dashboard is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/@lekoarts/gatsby-theme-status-dashboard">
    <img src="https://img.shields.io/npm/v/@lekoarts/gatsby-theme-status-dashboard.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-status-dashboard?minimal=true">
    <img src="https://img.shields.io/npm/dm/@lekoarts/gatsby-theme-status-dashboard.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-status-dashboard?minimal=true">
    <img src="https://img.shields.io/npm/dt/@lekoarts/gatsby-theme-status-dashboard.svg" alt="Total downloads on npm." />
  </a>
  <a href="https://www.lekoarts.de?utm_source=status-dashboard&utm_medium=Theme">
    <img alt="Website" src="https://img.shields.io/badge/-website-blue">
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
    <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
  </a>
</p>

Show the live statuses of your Netlify and CircleCI builds on your website! Easily integrate the customizable components into your site and adapt them to your theme (utilizing Theme UI).

[![Live Preview](https://img.lekoarts.de/gatsby/preview.svg)](https://status.lekoarts.de)

Read the [Source Code](https://github.com/LekoArts/gatsby-status-dashboard).

Also be sure to check out other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de) and my [Personal Website](https://www.lekoarts.de?utm_source=status-dashboard&utm_medium=Theme).

## Features

- Use the theme's components `<Info />` and `<Grid />` to display:
  - The number of Netlify sites and CircleCI projects you have
  - All public Netlify sites you have in a grid including statuses of CircleCI if configured in the repository
- Theme UI-based theming
- Uses the status badges meaning the statuses are live and don't need a re-build

## Installation

```sh
npm install @lekoarts/gatsby-theme-status-dashboard
```

### Install as a starter

This will generate a new site that pre-configures the theme including example content and additional plugins.

```sh
npx gatsby new gatsby-status-dashboard https://github.com/LekoArts/gatsby-status-dashboard
```

[**View the starter's code**](https://github.com/LekoArts/gatsby-status-dashboard)

## Usage

### Theme options

| Key              | Default Value | Description                                                                                                                           |
| ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `netlifyOptions` | `{}`          | Pass options to `gatsby-source-netlify` ([Read the plugin's documentation](https://github.com/LekoArts/gatsby-source-netlify#options) |

#### Example usage

```js
// gatsby-config.mjs
const config = {
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-status-dashboard`,
      options: {
        // netlifyOptions defaults to `{}`
        netlifyOptions: {
          userAgent: `netlify/js-client`,
        },
      },
    },
  ],
};

export default config;
```

### Environment variables

You **must** have two environment variables configured in your project as the theme relies on them: `NETLIFY_ACCESS_KEY` and `CIRCLECI_KEY`. Otherwise, the theme can't access information from the source plugins.

You can read [`gatsby-source-netlify`'s documentation](https://github.com/LekoArts/gatsby-source-netlify#prerequisites) and [`gatsby-source-circleci`'s documentation](https://github.com/LekoArts/gatsby-source-circleci#prerequisites) to learn how to obtain your API keys.

Gatsby also has [official documentation](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/) on environment variables.

Lastly you should have a look at the [example site](https://github.com/LekoArts/gatsby-themes/tree/main/examples/status-dashboard) if you need further help.

### Components

This theme doesn't set up an individual page but rather exposes two React components:

- `Info`: Displays the number of Netlify websites and CircleCI projects (e.g. "18 Websites" and "7 CircleCI Projects")

- `Grid`: Displays the sites in a card grid (using CSS Grid). The individual cards contain the name of the site, links to GitHub and CircleCI, and displays the Netlify deploy status & optionally the CircleCI status

#### Usage

Import the components into your file and use them like normal React components (see [example](https://github.com/LekoArts/gatsby-themes/tree/main/examples/status-dashboard/src/pages/index.jsx)):

```jsx
import * as React from "react";

import { Grid, Info } from "@lekoarts/gatsby-theme-status-dashboard";

const Index = () => {
  return (
    <main>
      <Info />
      <Grid />
    </main>
  );
};

export default Index;
```

### Formatters

The Netlify API doesn't update the paths to GitHub when you e.g. change your username (it'll keep the one from the time you created the Netlify project). As the theme will use the GitHub URLs from Netlify projects to check against CircleCI (to see if it can find CircleCI projects with the same GitHub URL), they need to be the same.

Hence, this theme allows to shadow a `formatters` file. It'll be used to replace words in the URL, e.g. replace `LeKoArts` with `LekoArts`. You can find the file in `src/utils`.

### Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/) to understand how to customize the theme! Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-status-dashboard/` to shadow/override files. The Theme UI config can be configured by shadowing its files in `src/gatsby-plugin-theme-ui/`.

## Changelog

You can find the extensive [changelog of changes on GitHub](https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-status-dashboard/CHANGELOG.md). You'll be able to see each patch, minor, and major changes and what pull requests contributed to them.

## Questions?

If you have general questions or need help with Gatsby, please go to one of the [support platforms](https://www.gatsbyjs.com/contributing/community/#where-to-get-support) mentioned in Gatsby's documentation. If you have a specific question about this theme, you can head to the [GitHub Discussions](https://github.com/LekoArts/gatsby-themes/discussions) of the repository.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [GitHub Sponsors](https://github.com/sponsors/LekoArts)!
