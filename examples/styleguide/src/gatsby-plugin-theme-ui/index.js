// Based on https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
// and https://tailwindcss.com/components

const borderWidths = {
  px: `1px`,
  0: `0`,
  2: `2px`,
  4: `4px`,
  8: `8px`,
}

const breakpoints = [`640px`, `768px`, `1024px`, `1280px`]

const baseColors = {
  black: `#000`,
  white: `#fff`,
  gray: [null, `#f7fafc`, `#edf2f7`, `#e2e8f0`, `#cbd5e0`, `#a0aec0`, `#718096`, `#4a5568`, `#2d3748`, `#1a202c`],
  red: [null, `#fff5f5`, `#fed7d7`, `#feb2b2`, `#fc8181`, `#f56565`, `#e53e3e`, `#c53030`, `#9b2c2c`, `#742a2a`],
  blue: [null, `#ebf8ff`, `#bee3f8`, `#90cdf4`, `#63b3ed`, `#4299e1`, `#3182ce`, `#2b6cb0`, `#2c5282`, `#2a4365`],
}

const colors = {
  ...baseColors,
  text: baseColors.gray[8],
  background: baseColors.white,
  primary: baseColors.blue[7],
  secondary: baseColors.gray[6],
  muted: baseColors.gray[3],
  info: baseColors.blue[4],
  danger: baseColors.red[3],
}

const baseFonts = {
  sans: `-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  serif: `Georgia, Cambria, "Times New Roman", Times, serif`,
  mono: `Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
}

const fonts = {
  ...baseFonts,
  body: baseFonts.sans,
  heading: `inherit`,
  monospace: baseFonts.mono,
}

const fontSizes = [`0.875rem`, `1rem`, `1.25rem`, `1.5rem`, `1.875rem`, `2.25rem`, `3rem`]

const baseFontWeights = {
  light: `300`,
  normal: `400`,
  medium: `500`,
  bold: `700`,
  black: `900`,
}

const fontWeights = {
  ...baseFontWeights,
  body: baseFontWeights.normal,
  heading: baseFontWeights.bold,
}

const letterSpacings = {
  tighter: `-0.05em`,
  tight: `-0.025em`,
  normal: `0`,
  wide: `0.025em`,
  wider: `0.05em`,
  widest: `0.1em`,
}

const baseLineHeights = {
  none: `1`,
  tight: `1.25`,
  snug: `1.375`,
  normal: `1.5`,
  relaxed: `1.625`,
  loose: `2`,
}

const lineHeights = {
  ...baseLineHeights,
  body: baseLineHeights.relaxed,
  heading: baseLineHeights.tight,
}

const radii = {
  none: `0`,
  sm: `0.125rem`,
  default: `0.25rem`,
  lg: `0.5rem`,
  full: `9999px`,
}

const sizes = {
  px: `1px`,
  0: `0`,
  1: `0.25rem`,
  2: `0.5rem`,
  3: `0.75rem`,
  4: `1rem`,
  5: `1.25rem`,
  6: `1.5rem`,
  8: `2rem`,
  10: `2.5rem`,
  12: `3rem`,
  16: `4rem`,
  20: `5rem`,
  24: `6rem`,
  32: `8rem`,
  full: `100%`,
  screenHeight: `100vh`,
  screenWidth: `100vw`,
}

const shadows = {
  default: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`,
  md: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
  lg: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
  xl: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
  "2xl": `0 25px 50px -12px rgba(0, 0, 0, 0.25)`,
  inner: `inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)`,
  outline: `0 0 0 3px rgba(66, 153, 225, 0.5)`,
  none: `none`,
}

const space = [0, `0.25rem`, `0.5rem`, `1rem`, `2rem`, `4rem`, `8rem`, `16rem`]

const zIndices = {
  auto: `auto`,
  0: `0`,
  10: `10`,
  20: `20`,
  30: `30`,
  40: `40`,
  50: `50`,
}

const heading = {
  fontFamily: `heading`,
  fontWeight: `heading`,
  lineHeight: `heading`,
  m: 0,
  mb: 1,
}

const styles = {
  root: {
    fontFamily: `body`,
    lineHeight: `body`,
    fontWeight: `body`,
  },
  a: {
    color: `primary`,
    textDecoration: `none`,
    ":hover": {
      textDecoration: `underline`,
    },
  },
  h1: {
    ...heading,
    fontSize: 6,
    mt: 2,
  },
  h2: {
    ...heading,
    fontSize: 5,
    mt: 2,
  },
  h3: {
    ...heading,
    fontSize: 4,
    mt: 3,
  },
  h4: {
    ...heading,
    fontSize: 3,
  },
  code: {},
  pre: {},
  hr: {
    bg: `muted`,
    border: 0,
    height: `1px`,
    m: 3,
  },
}

const tailwind = {
  borderWidths,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  sizes,
  shadows,
  space,
  radii,
  zIndices,
  styles,
}

export default tailwind
