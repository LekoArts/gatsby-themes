---
"@lekoarts/gatsby-theme-emilia": major
"@lekoarts/gatsby-theme-emilia-core": major
---

### Breaking Changes

1. Using `lessBabel` option for `gatsby-plugin-mdx`
1. Updating `react-spring` from v8 to v9
1. Updating `theme-ui` from v0.3 to v0.9 and thus also `emotion` from v10 to v11
1. Removed `@emotion/styled`
1. Updating all Gatsby related packages to latest
1. Migrated from `gatsby-image` to `gatsby-plugin-image`
1. Removed `gatsby-plugin-typescript` & `gatsby-plugin-emotion`
1. Removed the `colorThief` node field
1. Normal CSS grid layout (instead of Masonry layout)

#### Migrating

1. The `lessBabel` option might break your setup in some edge cases. If it doesn't work, turn on the `mdx` option and choose your own config for `gatsby-plugin-mdx`
1. You can find the migration guide for `react-spring` here: https://react-spring.io/changelog#v900. The most notable change is the import that was used inside the components. From `import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"` to `import { ParallaxLayer } from "@react-spring/parallax"`
1. The changelog/migration guide for `theme-ui` is here: https://theme-ui.com/migrating and for `emotion` here: https://emotion.sh/docs/emotion-11
1. If you still want to use `@emotion/styled` you'll need to install it separately now
1. Gatsby v3 migration guide: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/
1. The theme itself is completely migrated to the new image plugin, but if you shadowed components and relied on the old structure, you'll need to migrate to `gatsby-plugin-image`: https://www.gatsbyjs.com/docs/reference/release-notes/image-migration-guide/
1. The TypeScript plugin isn't necessary anymore with Gatsby v3 -- if you want to continue to use `@emotion/styled` you'll need to add `gatsby-plugin-emotion` yourself
1. The `gatsby-plugin-image` now exposes the dominant color via the `placeholder` itself
1. The Masonry layout was a bit hacky, so I switched it to a normal CSS grid layout. You could shadow the `card` component to try something on your own. Once the CSS spec itself has a native masonry layout I'll add it back

### Improvements

- You can use the `sharp` theme option to be able to configure `gatsby-plugin-sharp` on your own (helpful for defaults for `gatsby-plugin-image`)
- Performance improvements from `react-spring` and `theme-ui` upgrades
- Eagerly load the first image in the grid (better lighthouse score)

### Updates to Starter

If you only cloned the starter (https://github.com/LekoArts/gatsby-starter-portfolio-emilia) and didn't change anything else this section will be more relevant to you.

- Conditionally add `gatsby-plugin-google-analytics`
- Add `FAST_DEV` flag
- Update to all latest Gatsby (+ plugins) versions
- Add 404 page
