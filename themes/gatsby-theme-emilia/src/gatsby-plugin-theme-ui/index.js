import { tailwind } from "@theme-ui/presets"

export default {
  ...tailwind,
  initialColorMode: `light`,
  useCustomProperties: true,
  colors: {
    ...tailwind.colors,
    text: tailwind.colors.gray[8],
    primary: tailwind.colors.blue[6],
    background: tailwind.colors.gray[1],
    backgroundPattern: `#F1F4F7`,
    modes: {
      dark: {
        primary: tailwind.colors.blue[4],
        text: tailwind.colors.gray[4],
        background: tailwind.colors.gray[9],
        backgroundPattern: `#1D2330`,
      },
    },
  },
  styles: {
    ...tailwind.styles,
    root: {
      ...tailwind.styles.root,
      color: `text`,
      backgroundColor: `background`,
    },
    Footer: {
      display: `block`,
      color: `text`,
    },
    a: {
      ...tailwind.styles.a,
      color: `primary`,
    },
    Main: {
      ...tailwind.styles.Main,
      position: `relative`,
    },
    Header: {
      ...tailwind.styles.Header,
      position: `relative`,
      overflow: `hidden`,
      justifyContent: `center`,
    },
    Container: {
      px: [3, 4],
      py: [2, 3],
      maxWidth: `1600px`,
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
    },
    h1: {
      ...tailwind.styles.h1,
      fontSize: [4, 5],
      mt: 2,
    },
    h2: {
      ...tailwind.styles.h2,
      fontSize: [3, 4],
      mt: 2,
    },
    h3: {
      ...tailwind.styles.h3,
      fontSize: [2, 3],
      mt: 3,
    },
    h4: {
      ...tailwind.styles.h4,
      fontSize: [1, 2],
    },
    h5: {
      ...tailwind.styles.h5,
      fontSize: 1,
    },
    h6: {
      ...tailwind.styles.h6,
      fontSize: 1,
      mb: 2,
    },
  },
}
