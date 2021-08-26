---
"@lekoarts/gatsby-theme-minimal-blog-core": minor
"@lekoarts/gatsby-theme-minimal-blog": minor
---

**feat(minimal-blog-core): Set `backgroundColor` in gatsby-remark-images to `transparent`**

By default the plugin has `white` as a `backgroundColor`. This is a problem for transparent images (PNG) that are viewed in the dark theme version of the site.
So as a sensible default I'll set this to `transparent` now. If you relied on this being white and want to restore the old behavior, set the `mdx` option to `false` for the theme, [copy/paste the existing `gatsby-plugin-mdx` config](https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-minimal-blog-core/gatsby-config.js#L22-L48) into your own site.

For example, your `gatsby-config.js` then will look like this:

```js
module.exports = {
  // + Rest of your config
  plugins: [
    // + rest of your plugins
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        mdx: false,
        // + rest of the options you want to set
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        lessBabel: true,
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
};
```
