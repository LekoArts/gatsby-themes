import { tailwind } from "@theme-ui/presets"
import nightOwl from "@theme-ui/prism/presets/night-owl"

export default {
  ...tailwind,
  initialColorMode: `light`,
  useCustomProperties: true,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.indigo[7],
    secondary: tailwind.colors.orange[6],
    codeBlockBG: tailwind.colors.gray[2],
    codeBlockText: tailwind.colors.gray[9],
    backgroundContent: tailwind.colors.gray[1],
    textHeading: tailwind.colors.black,
    modes: {
      dark: {
        text: tailwind.colors.gray[2],
        textHeading: tailwind.colors.white,
        primary: tailwind.colors.indigo[3],
        background: tailwind.colors.gray[8],
        backgroundContent: tailwind.colors.gray[9],
        textMuted: tailwind.colors.gray[5],
        codeBlockBG: tailwind.colors.gray[7],
        codeBlockText: tailwind.colors.gray[1],
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
    pre: {
      ...nightOwl,
      padding: 3,
    },
    Footer: {
      textAlign: `center`,
      display: `block`,
      color: `textMuted`,
      px: [2, 3],
      py: [3, 4],
    },
    Header: {
      px: [3, 4],
      py: [2, 3],
      fontSize: 2,
      display: `flex`,
      alignItems: `center`,
      flexWrap: `wrap`,
    },
    Main: {
      ...tailwind.styles.Main,
      position: `relative`,
    },
    Container: {
      maxWidth: `5xl`,
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      code: {
        backgroundColor: `codeBlockBG`,
        px: 2,
        py: 1,
        color: `codeBlockText`,
        borderRadius: `default`,
      },
    },
    ul: {
      code: {
        backgroundColor: `codeBlockBG`,
        px: 2,
        py: 1,
        color: `codeBlockText`,
        borderRadius: `default`,
      },
    },
    h1: {
      ...tailwind.styles.h1,
      fontSize: [5, 6],
      mt: 2,
      color: `textHeading`,
    },
    h2: {
      ...tailwind.styles.h2,
      fontSize: [4, 5],
      mt: 2,
      color: `textHeading`,
    },
    h3: {
      ...tailwind.styles.h3,
      fontSize: [3, 4],
      mt: 3,
      color: `textHeading`,
    },
    h4: {
      ...tailwind.styles.h4,
      fontSize: [2, 3],
      color: `textHeading`,
    },
    h5: {
      ...tailwind.styles.h5,
      fontSize: [1, 2],
      color: `textHeading`,
    },
    h6: {
      ...tailwind.styles.h6,
      fontSize: 1,
      mb: 2,
      color: `textHeading`,
    },
  },
}
