---
"@lekoarts/themes-utils": patch
---

Fix a subtle bug in `preToCodeBlock`. The `preToCodeBlock` was checking for a `type` that could never occur. So the syntax highlighting was broken for sites using `preToCodeBlock`. The check was changed now to see if `preProps?.children?.props` exists.
