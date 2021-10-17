---
"@lekoarts/gatsby-theme-minimal-blog": major
"@lekoarts/gatsby-theme-minimal-blog-core": major
---

Compatibility with **Gatsby 4**. Upgrade your theme to be able to use the new Gatsby release.

All Gatsby related packages were also upgraded to their latest new major version.

[See Gatsby 4 Migration Guide](#TODO)

**BREAKING CHANGES:**

- Minimum required Node.js version: `>=14.15.0`
- Minimum required `gatsby` version: `^4.0.0`
- Upgraded Theme UI (packages) from `^0.9.0` to `^0.11.0`

**Bug Fixes:**

- The `slug` key on posts now correctly respects the `postsPrefix` option (fixes https://github.com/LekoArts/gatsby-themes/issues/699). This means that the URL now also contains the `postsPrefix` option (which is potentially breaking if you rely on this being different).
- The `slug` key on pages now correctly respects the `basePath` option. This means that the URL now also contains the `basePath` option (which is potentially breaking if you rely on this being different).
