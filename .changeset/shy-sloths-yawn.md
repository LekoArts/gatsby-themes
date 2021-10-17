---
"@lekoarts/gatsby-theme-jodie": major
"@lekoarts/gatsby-theme-jodie-core": major
---

Compatibility with **Gatsby 4**. Upgrade your theme to be able to use the new Gatsby release.

All Gatsby related packages were also upgraded to their latest new major version.

[See Gatsby 4 Migration Guide](#TODO)

**BREAKING CHANGES:**

- Minimum required Node.js version: `>=14.15.0`
- Minimum required `gatsby` version: `^4.0.0`
- Upgraded Theme UI (packages) from `^0.9.0` to `^0.11.0`

**Bug Fixes:**

- The `slug` key on projects now correctly respects the `projectsPrefix` option. This means that the URL now also contains the `projectsPrefix` option (which is potentially breaking if you rely on this being different).
- The `slug` key on pages now correctly respects the `basePath` option. This means that the URL now also contains the `basePath` option (which is potentially breaking if you rely on this being different).
- The items in the `navigation` option are now prefixed with the `basePath` in the `navigation.tsx` component. If you've shadowed the file you'll need to update your component.
- The logo link (in the `sidebar.tsx` component) now goes to `basePath` and not `/` (this way the link correctly works with `basePath` option). If you've shadowed the file you'll need to update your component.
