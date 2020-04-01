<p align="center">
  <a href="https://themes.lekoarts.de">
    <img alt="Gatsby Theme" src="https://img.lekoarts.de/gatsby/gatsby-themes-illustration.png" />
  </a>
</p>
<h1 align="center">
  @lekoarts/gatsby-theme-status-dashboard
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/master/LICENSE">
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
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
      <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
    </a>
</p>

Show the live statuses of your Netlify and CircleCI builds on your website! Easily integrate the customizable components into your site and adapt them to your theme (utilizing Theme UI).

[![Live Preview](https://img.lekoarts.de/gatsby/preview.svg)](https://status.lekoarts.de)

Read the [Source Code](https://github.com/LekoArts/gatsby-status-dashboard).

Also be sure to checkout other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de)

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

This will generate a new site that pre-configures use of the theme. Perfect for a single-page usage (e.g. `https://status.your-domain.tld`).

```sh
gatsby new status-dashboard LekoArts/gatsby-status-dashboard
```

[**View the starter's code**](https://github.com/LekoArts/gatsby-status-dashboard)

## Usage

### Theme options

| Key              | Default Value | Description                                                                                                                           |
| ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `netlifyOptions` | `{}`          | Pass options to `gatsby-source-netlify` ([Read the plugin's documentation](https://github.com/LekoArts/gatsby-source-netlify#options) |

#### Example usage

```js
// gatsby-config.js
module.exports = {
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
```

### Environment variables

You **must** have two environment variables configured in your project as the theme relies on them: `NETLIFY_ACCESS_KEY` and `CIRCLECI_KEY`. Otherwise the theme can't access information from the source plugins.

You can read [`gatsby-source-netlify`'s documentation](https://github.com/LekoArts/gatsby-source-netlify#prerequisites) and [`gatsby-source-circleci`'s documentation](https://github.com/LekoArts/gatsby-source-circleci#prerequisites) to learn how to obtain your API keys.

Gatsby also has [official documentation](https://www.gatsbyjs.org/docs/environment-variables/) on environment variables.

Lastly you should have a look at the [example site](https://github.com/LekoArts/gatsby-themes/tree/master/examples/status-dashboard) if you need further help.

### Components

This theme doesn't setup an individual page but rather exposes two React components:

- `Info`: Displays the number of Netlify websites and CircleCI projects (e.g. "18 Websites" and "7 CircleCI Projects")

- `Grid`: Displays the sites in a card grid (using CSS Grid). The individual cards contain the name of the site, links to GitHub and CircleCI, and displays the Netlify deploy status & optionally the CircleCI status

#### Usage

Import the components into your file and use them like normal React components (see [example](https://github.com/LekoArts/gatsby-themes/tree/master/examples/status-dashboard/src/pages/index.jsx)):

```jsx
import React from "react";

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

Hence this theme allows to shadow a `formatters` file. It'll be used to replace words in the URL, e.g. replace `LeKoArts` with `LekoArts`. You can find the file in `src/utils`.

### Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) to understand how to customize the this theme! Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-status-dashboard/` to shadow/override files. The Theme UI config can be configured by shadowing its files in `src/gatsby-plugin-theme-ui/`.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [Patreon](https://www.patreon.com/lekoarts) or [GitHub Sponsor](https://github.com/sponsors/LekoArts)!
