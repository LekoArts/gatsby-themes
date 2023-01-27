import type { ThemeUICSSObject } from "theme-ui"
import { visuallyHidden } from "./utils"

const code: ThemeUICSSObject = {
  ".prism-code": {
    fontSize: [1, 1, 2],
    webkitOverflowScrolling: `touch`,
    backgroundColor: `transparent`,
    minWidth: `100%`,
    mb: 0,
    mt: 0,
    overflow: `auto`,
    '&[data-linenumber="false"]': {
      ".token-line": {
        pl: 3,
      },
    },
  },
  ".gatsby-highlight[data-language='none'], .gatsby-highlight[data-language='']": {
    ".code-content": {
      pt: `1rem`,
    },
  },
  ".code-content": {
    padding: `2rem 1rem 1rem 1rem`,
    color: `plain-color`,
    backgroundColor: `plain-backgroundColor`,
  },
  ".token": {
    display: `inline-block`,
  },
  "p > code, li > code": {
    bg: `muted`,
    color: `heading`,
    px: 2,
    py: 1,
    borderRadius: `4px`,
    fontSize: `0.95em`,
  },
  ".gatsby-highlight": {
    fontSize: [1, 1, 2],
    position: `relative`,
    webkitOverflowScrolling: `touch`,
    borderRadius: `4px`,
    overflow: `hidden`,
    mx: [0, 0, 0, -3],
    ".token-line": {
      mx: -3,
      minWidth: `100%`,
    },
    "pre code": {
      float: `left`,
      minWidth: `100%`,
    },
    'pre[class*="language-"]:before': {
      bg: `white`,
      borderRadius: `0 0 4px 4px`,
      color: `black`,
      fontSize: `12px`,
      letterSpacing: `0.035rem`,
      padding: `0.1rem 0.5rem`,
      position: `absolute`,
      left: `1rem`,
      textAlign: `right`,
      textTransform: `uppercase`,
      fontFamily: `body`,
      fontWeight: 600,
    },
    'pre[class~="language-golang"]:before, pre[class~="language-go"]:before': {
      content: `"go"`,
      background: `#79d4fd`,
      color: `black`,
    },
    'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before': {
      content: `"js"`,
      background: `#f7df1e`,
      color: `black`,
    },
    'pre[class~="language-jsx"]:before': {
      content: `"jsx"`,
      background: `#61dafb`,
      color: `black`,
    },
    'pre[class~="language-ts"]:before': {
      content: `"ts"`,
      background: `#61dafb`,
      color: `black`,
    },
    'pre[class~="language-tsx"]:before': {
      content: `"tsx"`,
      background: `#61dafb`,
      color: `black`,
    },
    'pre[class~="language-html"]:before': {
      content: `"html"`,
      background: `#005a9c`,
      color: `white`,
    },
    'pre[class~="language-xml"]:before': {
      content: `"xml"`,
      background: `#005a9c`,
      color: `white`,
    },
    'pre[class~="language-svg"]:before': {
      content: `"svg"`,
      background: `#005a9c`,
      color: `white`,
    },
    'pre[class~="language-graphql"]:before': {
      content: `"GraphQL"`,
      background: `#E10098`,
    },
    'pre[class~="language-css"]:before': {
      content: `"css"`,
      background: `#ff9800`,
      color: `black`,
    },
    'pre[class~="language-mdx"]:before': {
      content: `"mdx"`,
      background: `#f9ac00`,
      color: `black`,
    },
    'pre[class~="language-php"]:before': {
      content: `"php"`,
      background: `#777bb3`,
      color: `black`,
    },
    'pre[class~="language-py"]:before, pre[class~="language-python"]:before': {
      content: `"py"`,
      background: `#306998`,
      color: `white`,
    },
    'pre[class~="language-text"]:before': {
      content: `"text"`,
    },
    "pre[class~='language-shell']:before": {
      content: `'shell'`,
    },
    "pre[class~='language-sh']:before": {
      content: `'sh'`,
    },
    "pre[class~='language-bash']:before": {
      content: `'bash'`,
    },
    "pre[class~='language-yaml']:before": {
      content: `'yaml'`,
      background: `#ffa8df`,
    },
    "pre[class~='language-yml']:before": {
      content: `'yml'`,
      background: `#ffa8df`,
    },
    "pre[class~='language-markdown']:before": {
      content: `'md'`,
    },
    "pre[class~='language-json']:before, pre[class~='language-json5']:before": {
      content: `'json'`,
      background: `linen`,
    },
    "pre[class~='language-diff']:before": {
      content: `'diff'`,
      background: `#e6ffed`,
    },
  },
  '.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]': {
    wordSpacing: `normal`,
    wordBreak: `normal`,
    overflowWrap: `normal`,
    lineHeight: 1.5,
    tabSize: 4,
    hyphens: `none`,
  },
  ".gatsby-highlight pre::-webkit-scrollbar": {
    width: 2,
    height: 2,
  },
  ".gatsby-highlight pre::-webkit-scrollbar-thumb": {
    backgroundColor: `primary`,
  },
  ".gatsby-highlight pre::-webkit-scrollbar-track": {
    background: `muted`,
  },
  ".line-number-style": {
    display: `inline-block`,
    width: `3em`,
    userSelect: `none`,
    opacity: 0.3,
    textAlign: `center`,
    position: `relative`,
  },
  ".code-title": {
    backgroundColor: `muted`,
    color: `text`,
    fontSize: 1,
    px: 3,
    py: 2,
    fontFamily: `body`,
  },
  ".token-line": {
    pr: 3,
  },
  ".highlight-line": {
    borderLeft: `4px solid rgb(2, 155, 206)`,
    ".line-number-style": {
      width: `calc(3em - 4px)`,
      opacity: 0.5,
      left: `-2px`,
    },
  },
  ".footnotes": {
    borderTopStyle: `solid`,
    borderTopWidth: `1px`,
    borderTopColor: `divide`,
    pt: 2,
    mt: 5,
    overflow: `auto`,
    ".sr-only": visuallyHidden,
  },
}

export default code
