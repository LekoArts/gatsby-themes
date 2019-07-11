import { tailwind } from "@theme-ui/presets"

export default {
  ...tailwind,
  initialColorMode: `light`,
  useCustomProperties: true,
  colors: {
    ...tailwind.colors,
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
  styles: {
    ...tailwind.styles,
    root: {
      ...tailwind.styles.root,
      color: `text`,
      backgroundColor: `background`,
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
}
