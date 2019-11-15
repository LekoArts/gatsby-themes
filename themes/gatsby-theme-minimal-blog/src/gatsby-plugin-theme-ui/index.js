import { tailwind } from "@theme-ui/presets"

const headingStyles = {
  h1: {
    ...tailwind.styles.h1,
    color: `heading`,
    fontSize: [5, 6, 7],
    mt: 2,
  },
  h2: {
    ...tailwind.styles.h2,
    color: `heading`,
    fontSize: [4, 5, 6],
    mt: 2,
  },
  h3: {
    ...tailwind.styles.h3,
    color: `heading`,
    fontSize: [3, 4, 5],
    mt: 3,
  },
  h4: {
    ...tailwind.styles.h4,
    color: `heading`,
    fontSize: [2, 3, 4],
  },
  h5: {
    ...tailwind.styles.h5,
    color: `heading`,
    fontSize: [1, 2, 3],
  },
  h6: {
    ...tailwind.styles.h6,
    color: `heading`,
    fontSize: 1,
    mb: 2,
  },
}

export default {
  ...tailwind,
  initialColorMode: `light`,
  useCustomProperties: true,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.purple[7],
    secondary: `#5f6c80`,
    toggleIcon: tailwind.colors.gray[8],
    heading: tailwind.colors.black,
    divide: tailwind.colors.gray[4],
    modes: {
      dark: {
        text: tailwind.colors.gray[4],
        primary: tailwind.colors.purple[5],
        secondary: `#7f8ea3`,
        toggleIcon: tailwind.colors.gray[4],
        background: `#1A202C`,
        heading: tailwind.colors.white,
        divide: tailwind.colors.gray[8],
      },
    },
  },
  fonts: {
    ...tailwind.fonts,
    body: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  },
  styles: {
    ...tailwind.styles,
    root: {
      ...tailwind.styles.root,
      color: `text`,
      backgroundColor: `background`,
    },
    p: {
      fontSize: [1, 1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
    },
    ...headingStyles,
    Container: {
      padding: [3, 4],
    },
    blockquote: {
      borderLeftColor: `primary`,
      borderLeftStyle: `solid`,
      borderLeftWidth: `6px`,
      mx: 0,
      pl: 4,
      p: {
        fontStyle: `italic`,
      },
    },
  },
  text: {
    ...headingStyles,
    heading: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`,
      color: `heading`,
    },
  },
  dividers: {
    bottom: {
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `divide`,
      pb: 3,
    },
    top: {
      borderTopStyle: `solid`,
      borderTopWidth: `1px`,
      borderTopColor: `divide`,
      pt: 3,
    },
  },
  links: {
    secondary: {
      color: `secondary`,
      textDecoration: `none`,
      ":hover": {
        color: `heading`,
        textDecoration: `underline`,
      },
      ":focus": {
        color: `heading`,
      },
    },
    listItem: {
      fontSize: [1, 2, 3],
      color: `text`,
    },
  },
}
