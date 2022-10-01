// Based on https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
// and https://tailwindcss.com/components

export const borderWidths = {
  px: `1px`,
  0: `0`,
  2: `2px`,
  4: `4px`,
  8: `8px`,
}

export const breakpoints = [`640px`, `758px`, `1024px`, `1280px`]

export const baseColors = {
  transparent: `transparent`,
  black: `#000`,
  white: `#fff`,
  gray: {
    50: `#f9fafb`,
    100: `#f3f4f6`,
    200: `#e5e7eb`,
    300: `#d1d5db`,
    400: `#9ca3af`,
    500: `#6b7280`,
    600: `#4b5563`,
    700: `#374151`,
    800: `#1f2937`,
    900: `#111827`,
  },
  red: {
    50: `#fef2f2`,
    100: `#fee2e2`,
    200: `#fecaca`,
    300: `#fca5a5`,
    400: `#f87171`,
    500: `#ef4444`,
    600: `#dc2626`,
    700: `#b91c1c`,
    800: `#991b1b`,
    900: `#7f1d1d`,
  },
  orange: {
    50: `#fff7ed`,
    100: `#ffedd5`,
    200: `#fed7aa`,
    300: `#fdba74`,
    400: `#fb923c`,
    500: `#f97316`,
    600: `#ea580c`,
    700: `#c2410c`,
    800: `#9a3412`,
    900: `#7c2d12`,
  },
  green: {
    50: `#f0fdf4`,
    100: `#dcfce7`,
    200: `#bbf7d0`,
    300: `#86efac`,
    400: `#4ade80`,
    500: `#22c55e`,
    600: `#16a34a`,
    700: `#15803d`,
    800: `#166534`,
    900: `#14532d`,
  },
  blue: {
    50: `#eff6ff`,
    100: `#dbeafe`,
    200: `#bfdbfe`,
    300: `#93c5fd`,
    400: `#60a5fa`,
    500: `#3b82f6`,
    600: `#2563eb`,
    700: `#1d4ed8`,
    800: `#1e40af`,
    900: `#1e3a8a`,
  },
  indigo: [
    `#eef2ff`,
    `#e0e7ff`,
    `#c7d2fe`,
    `#a5b4fc`,
    `#818cf8`,
    `#6366f1`,
    `#4f46e5`,
    `#4338ca`,
    `#3730a3`,
    `#312e81`,
  ],
}

const commonButtonStyles = {
  py: 2,
  px: 3,
  cursor: `pointer`,
  fontSize: `100%`,
  lineHeight: `inherit`,
}

export const buttons = {
  simple: {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    border: `none`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `default`,
    "&:hover": {
      backgroundColor: `primaryHover`,
    },
  },
  pill: {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    border: `none`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `full`,
    "&:hover": {
      backgroundColor: `primaryHover`,
    },
  },
  outline: {
    ...commonButtonStyles,
    backgroundColor: `transparent`,
    borderWidth: `1px`,
    borderStyle: `solid`,
    borderColor: `primary`,
    color: `primary`,
    fontWeight: `semibold`,
    borderRadius: `default`,
    "&:hover": {
      backgroundColor: `primary`,
      color: `white`,
      borderColor: `transparent`,
    },
  },
  bordered: {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    borderWidth: `1px`,
    borderStyle: `solid`,
    borderColor: `primaryHover`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `default`,
    "&:hover": {
      backgroundColor: `primaryHover`,
    },
  },
  disabled: {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    border: `none`,
    opacity: 0.5,
    cursor: `not-allowed`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `default`,
  },
  "3D": {
    ...commonButtonStyles,
    backgroundColor: `primary`,
    border: `none`,
    borderBottomWidth: `4px`,
    borderBottomStyle: `solid`,
    borderBottomColor: `primaryHover`,
    color: `white`,
    fontWeight: `bold`,
    borderRadius: `default`,
    transition: `transform 0.3s ease-in-out`,
    "&:hover": {
      transform: `translateY(-1px)`,
    },
  },
  elevated: {
    ...commonButtonStyles,
    backgroundColor: `white`,
    borderWidth: `1px`,
    borderStyle: `solid`,
    borderColor: `gray.4`,
    color: `text`,
    fontWeight: `bold`,
    borderRadius: `default`,
    boxShadow: `default`,
    "&:hover": {
      backgroundColor: `gray.1`,
    },
  },
}

export const colors = {
  ...baseColors,
  grayDark: baseColors.gray[800],
  text: baseColors.gray[800],
  background: baseColors.white,
  primary: baseColors.blue[700],
  primaryHover: baseColors.blue[800],
  secondary: baseColors.gray[600],
  muted: baseColors.gray[300],
  success: baseColors.green[300],
  info: baseColors.blue[400],
  warning: baseColors.orange[300],
  danger: baseColors.red[300],
  light: baseColors.gray[100],
  dark: baseColors.gray[800],
  textMuted: baseColors.gray[600],
}

export const baseFonts = {
  sans: `-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  serif: `Georgia, Cambria, "Times New Roman", Times, serif`,
  mono: `Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
}

export const fonts = {
  ...baseFonts,
  body: baseFonts.sans,
  heading: `inherit`,
  monospace: baseFonts.mono,
}

export const fontSizes = [`0.875rem`, `1rem`, `1.25rem`, `1.5rem`, `1.875rem`, `2.25rem`, `3rem`, `4rem`, `4.5rem`]

export const baseFontWeights = {
  hairline: `100`,
  thin: `200`,
  light: `300`,
  normal: `400`,
  medium: `500`,
  semibold: `600`,
  bold: `700`,
  extrabold: `800`,
  black: `900`,
}

export const fontWeights = {
  ...baseFontWeights,
  body: baseFontWeights.normal,
  heading: baseFontWeights.bold,
}

const commonInputStyles = {
  py: 2,
  px: 3,
  fontSize: `100%`,
  borderRadius: `default`,
  appearance: `none`,
  lineHeight: `tight`,
}

export const inputs = {
  shadow: {
    ...commonInputStyles,
    border: `none`,
    color: `gray.7`,
    boxShadow: `default`,
    "&:focus": {
      outline: `none`,
      boxShadow: `outline`,
    },
  },
  inline: {
    ...commonInputStyles,
    backgroundColor: `gray.2`,
    borderWidth: `2px`,
    borderStyle: `solid`,
    borderColor: `gray.2`,
    color: `gray.7`,
    "&:focus": {
      outline: `none`,
      borderColor: `primary`,
      backgroundColor: `white`,
    },
  },
  underline: {
    ...commonInputStyles,
    backgroundColor: `transparent`,
    border: `none`,
    borderBottomWidth: `2px`,
    borderBottomStyle: `solid`,
    borderBottomColor: `primary`,
    borderRadius: `0px`,
    color: `gray.7`,
    "&:focus": {
      outline: `none`,
      borderColor: `primary`,
      backgroundColor: `white`,
    },
  },
}

export const letterSpacings = {
  tighter: `-0.05em`,
  tight: `-0.025em`,
  normal: `0`,
  wide: `0.025em`,
  wider: `0.05em`,
  widest: `0.1em`,
}

export const baseLineHeights = {
  none: `1`,
  tight: `1.25`,
  snug: `1.375`,
  normal: `1.5`,
  relaxed: `1.625`,
  loose: `2`,
}

export const lineHeights = {
  ...baseLineHeights,
  body: baseLineHeights.relaxed,
  heading: baseLineHeights.tight,
}

export const radii = {
  none: `0`,
  sm: `0.125rem`,
  default: `0.25rem`,
  lg: `0.5rem`,
  full: `9999px`,
}

export const sizes = {
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
  40: `10rem`,
  48: `12rem`,
  56: `14rem`,
  64: `16rem`,
  xs: `20rem`,
  sm: `24rem`,
  md: `28rem`,
  lg: `32rem`,
  xl: `36rem`,
  "2xl": `42rem`,
  "3xl": `48rem`,
  "4xl": `56rem`,
  "5xl": `64rem`,
  "6xl": `72rem`,
  full: `100%`,
  screenHeight: `100vh`,
  screenWidth: `100vw`,
}

export const shadows = {
  default: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`,
  md: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
  lg: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
  xl: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
  "2xl": `0 25px 50px -12px rgba(0, 0, 0, 0.25)`,
  inner: `inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)`,
  outline: `0 0 0 3px rgba(66, 153, 225, 0.5)`,
  none: `none`,
}

export const space = [0, `0.25rem`, `0.5rem`, `1rem`, `2rem`, `4rem`, `8rem`, `16rem`, `32rem`]

export const zIndices = {
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

export const styles = {
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

export const theme = {
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
  buttons,
  inputs,
}

export default theme
