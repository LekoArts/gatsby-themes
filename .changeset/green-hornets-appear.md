---
"@lekoarts/gatsby-theme-status-dashboard": major
---

Compatibility with **Gatsby 4**. Upgrade your theme to be able to use the new Gatsby release.

All Gatsby related packages were also upgraded to their latest new major version.

[See Gatsby 4 Migration Guide](#TODO)

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
