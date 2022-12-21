---
"@lekoarts/gatsby-theme-cara": patch
"@lekoarts/gatsby-theme-emilia": patch
"@lekoarts/gatsby-theme-emma": patch
"@lekoarts/gatsby-theme-graphql-playground": patch
"@lekoarts/gatsby-theme-jodie": patch
"@lekoarts/gatsby-theme-minimal-blog": patch
---

fix: Remove `useColorSchemeMediaQuery` entry from Theme UI configuration since the "system" setting overwrote the preference of a user. We'd need to wait for Theme UI to implement a proper "system" color mode, see https://github.com/system-ui/theme-ui/discussions/2264. If you want to have the old behavior, define your own Theme UI configuration as shown in the docs.
