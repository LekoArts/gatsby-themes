import { tailwind } from "@theme-ui/presets"

export default {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.pink[6],
    secondary: tailwind.colors.indigo[6],
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
      paddingLeft: 3,
      paddingRight: 3,
      paddingTop: 4,
      paddingBottom: 4,
    },
  },
}
