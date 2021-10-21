---
"@lekoarts/gatsby-theme-status-dashboard": major
---

Compatibility with **Gatsby 4**. Upgrade your theme to be able to use the new Gatsby release. Leverage Deferred Static Generation (DSG), Server-Side Rendering (SSR) and Parallel Query Running (PQR) with this new release. [Learn more about Gatsby 4](https://www.gatsbyjs.com/gatsby-4/).

All Gatsby related packages were also upgraded to their latest new major version.

[See Gatsby 4 Migration Guide](https://gatsbyjs.com/docs/reference/release-notes/migrating-from-v3-to-v4/)

**BREAKING CHANGES:**

- Minimum required Node.js version: `>=14.15.0`
- Minimum required `gatsby` version: `^4.0.0`
- Upgraded Theme UI (packages) from `^0.9.0` to `^0.11.0`

Moreover, the `<Grid>` and `<Card>` components and their props had breaking changes.

The Card component now takes these props:

```ts
type Props = {
  name: string;
  netlify_id?: string;
  website?: string;
  repo: string;
  netlify?: boolean;
  circleci?: boolean;
  circleci_id?: string;
};
```

The Grid component now normalized the entries from Netlify and CircleCI and merges them together. Current behavior is that a card will render when the site is on Netlify and then optionally the CircleCI information is added. New behavior is that also entries are shown that are only on CircleCI.

**Migration:**

- If you used Theme UI in custom components, check the [Theme UI changelog](https://github.com/system-ui/theme-ui/blob/develop/CHANGELOG.md)
- Update CI/local environment to account for the new Node.js requirement
