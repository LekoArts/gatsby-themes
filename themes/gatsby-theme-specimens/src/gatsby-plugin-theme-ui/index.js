import { tailwind } from "@theme-ui/presets"

export const commonAlertStyles = {
  p: 3,
  borderRadius: `lg`,
  borderWidth: `2px`,
  borderStyle: `solid`,
  fontWeight: `medium`,
  mb: 3,
  display: `grid`,
  gridTemplateColumns: `35px 1fr`,
  gridColumnGap: 3,
  alignItems: `center`,
  fontSize: 1,
  svg: {
    width: 8,
    height: 8,
    ".primary": {
      fill: `currentColor`,
    },
    ".secondary": {
      fill: `currentColor`,
    },
  },
}

export default {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.indigo[6],
    secondary: tailwind.colors.orange[6],
    success: tailwind.colors.green[3],
    info: tailwind.colors.blue[4],
    warning: tailwind.colors.yellow[3],
    danger: tailwind.colors.red[3],
  },
  alerts: {
    success: {
      ...commonAlertStyles,
      backgroundColor: `green.1`,
      borderColor: `green.2`,
      color: `green.8`,
      ".primary": {
        color: `green.4`,
      },
      ".secondary": {
        color: `green.8`,
      },
    },
    hint: {
      ...commonAlertStyles,
      backgroundColor: `gray.1`,
      borderColor: `gray.3`,
      color: `gray.7`,
      ".primary": {
        color: `gray.4`,
      },
      ".secondary": {
        color: `gray.8`,
      },
    },
    warning: {
      ...commonAlertStyles,
      backgroundColor: `orange.1`,
      borderColor: `orange.2`,
      color: `orange.8`,
      ".primary": {
        color: `orange.4`,
      },
      ".secondary": {
        color: `orange.8`,
      },
    },
    info: {
      ...commonAlertStyles,
      backgroundColor: `indigo.1`,
      borderColor: `indigo.2`,
      color: `indigo.7`,
      ".primary": {
        color: `indigo.3`,
      },
      ".secondary": {
        color: `indigo.7`,
      },
    },
    danger: {
      ...commonAlertStyles,
      backgroundColor: `red.1`,
      borderColor: `red.2`,
      color: `red.7`,
      ".primary": {
        color: `red.3`,
      },
      ".secondary": {
        color: `red.7`,
      },
    },
  },
  swatches: {
    default: {
      display: `inline-block`,
      flexBasis: `275px`,
      maxWidth: `275px`,
      width: `100%`,
      borderRadius: `lg`,
      overflow: `hidden`,
      boxShadow: `default`,
      mr: 3,
      mb: 3,
    },
  },
  rows: {
    default: {
      boxShadow: `default`,
      backgroundColor: `gray.1`,
      p: 3,
      mb: 3,
      borderRadius: `lg`,
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `space-between`,
      alignItems: `center`,
    },
  },
  codeStyles: {
    default: {
      "code, pre": {
        fontFamily: `Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace`,
        lineHeight: 1.375,
        direction: `ltr`,
        textAlign: `left`,
        whiteSpace: `pre`,
        wordSpacing: `normal`,
        wordBreak: `normal`,
        hyphens: `none`,
        backgroundColor: `#f5f7ff`,
        color: `#5e6687`,
        padding: 2,
        borderRadius: `default`,
        ".token.string": {
          color: `#22a2c9`,
        },
        ".token.punctuation": {
          color: `#5e6687`,
        },
        ".token.operator, .token.boolean, .token.number": {
          color: `#c76b29`,
        },
      },
    },
  },
}
