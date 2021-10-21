---
"@lekoarts/gatsby-theme-jodie": major
"@lekoarts/gatsby-theme-jodie-core": major
---

Compatibility with **Gatsby 4**. Upgrade your theme to be able to use the new Gatsby release. Leverage Deferred Static Generation (DSG), Server-Side Rendering (SSR) and Parallel Query Running (PQR) with this new release. [Learn more about Gatsby 4](https://www.gatsbyjs.com/gatsby-4/).

All Gatsby related packages were also upgraded to their latest new major version.

[See Gatsby 4 Migration Guide](https://gatsbyjs.com/docs/reference/release-notes/migrating-from-v3-to-v4/)

**BREAKING CHANGES:**

- Minimum required Node.js version: `>=14.15.0`
- Minimum required `gatsby` version: `^4.0.0`
- Upgraded Theme UI (packages) from `^0.9.0` to `^0.11.0`

**Features:**

- You can now use `defer: true` in the frontmatter of your page/post to mark the page as deferred (for Deferred Static Generation)

**Bug Fixes:**

- The `slug` key on projects now correctly respects the `projectsPrefix` option. This means that the URL now also contains the `projectsPrefix` option (which is potentially breaking if you rely on this being different).
- The `slug` key on pages now correctly respects the `basePath` option. This means that the URL now also contains the `basePath` option (which is potentially breaking if you rely on this being different).
- The items in the `navigation` option are now prefixed with the `basePath` in the `navigation.tsx` component. If you've shadowed the file you'll need to update your component.
- The logo link (in the `sidebar.tsx` component) now goes to `basePath` and not `/` (this way the link correctly works with `basePath` option). If you've shadowed the file you'll need to update your component.

**Migration:**

- If you relied on `slug` both for posts or pages you'll need to check if your URLs are still as expected
- If you used Theme UI in custom components, check the [Theme UI changelog](https://github.com/system-ui/theme-ui/blob/develop/CHANGELOG.md)
- Update CI/local environment to account for the new Node.js requirement
