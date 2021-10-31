---
"@lekoarts/gatsby-theme-minimal-blog": minor
---

**Feature:** The `<Post />` component now has a `<PostFooter />` component at the bottom of the page (between the end of the post content and the global footer). You can shadow this to e.g. display a comment section below a post. The component receives its data through the `post` prop which holds the same data as what `<Post />` receives.

Fixes https://github.com/LekoArts/gatsby-themes/discussions/698.
