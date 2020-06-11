import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"

export default merge(tailwind, {
  initialColorModeName: `light`,
  useCustomProperties: true,
  colors: {
    primary: tailwind.colors.pink[7],
    secondary: tailwind.colors.indigo[6],
    modes: {
      dark: {
        text: tailwind.colors.white,
        primary: tailwind.colors.pink[4],
        background: tailwind.colors.gray[8],
        textMuted: tailwind.colors.gray[5],
      },
    },
  },
  layout: {
    footer: {
      textAlign: `center`,
      display: `block`,
      color: `textMuted`,
      px: [2, 3],
      py: [3, 4],
    },
    header: {
      px: [3, 4],
      py: [2, 3],
      fontSize: 2,
      display: `flex`,
      alignItems: `center`,
      flexWrap: `wrap`,
    },
    main: {
      position: `relative`,
    },
    container: {
      maxWidth: `5xl`,
      padding: 4,
    },
  },
  styles: {
    root: {
      color: `text`,
      backgroundColor: `background`,
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
    },
    h1: {
      fontSize: [5, 6],
      mt: 2,
    },
    h2: {
      fontSize: [4, 5],
      mt: 2,
    },
    h3: {
      fontSize: [3, 4],
      mt: 3,
    },
    h4: {
      fontSize: [2, 3],
    },
    h5: {
      fontSize: [1, 2],
    },
    h6: {
      fontSize: 1,
      mb: 2,
    },
  },
  buttons: {
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
  },
})
