import { tailwind } from "@theme-ui/presets"

export default {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.indigo[6],
    secondary: tailwind.colors.orange[6],
  },
  styles: {
    ...tailwind.styles,
    root: {
      ...tailwind.styles.root,
      color: `text`,
      backgroundColor: `background`,
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
      fontSize: [5, 6],
      mt: 2,
    },
    h2: {
      ...tailwind.styles.h2,
      fontSize: [4, 5],
      mt: 2,
    },
    h3: {
      ...tailwind.styles.h3,
      fontSize: [3, 4],
      mt: 3,
    },
    h4: {
      ...tailwind.styles.h4,
      fontSize: [2, 3],
    },
    h5: {
      ...tailwind.styles.h5,
      fontSize: [1, 2],
    },
    h6: {
      ...tailwind.styles.h6,
      fontSize: 1,
      mb: 2,
    },
  },
}
