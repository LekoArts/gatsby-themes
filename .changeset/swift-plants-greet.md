---
"@lekoarts/gatsby-theme-minimal-blog": patch
---

fix(gatsby-theme-minimal-blog): Incorrect link styling in bottom section

Links were rendered at a bigger size in the `<Bottom />` section. The styles were changed to only apply this bigger `fontSize` for links inside `<li>` items.
