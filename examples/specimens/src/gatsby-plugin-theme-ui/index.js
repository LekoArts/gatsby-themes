import nightOwl from "@theme-ui/prism/presets/night-owl.json"
import theme from "@lekoarts/gatsby-theme-specimens/src/gatsby-plugin-theme-ui"

export default {
  ...theme,
  styles: {
    ...theme.styles,
    p: {
      ...theme.styles.p,
      code: {
        ...nightOwl,
        px: 2,
        py: 1,
        borderRadius: `default`,
      },
    },
    pre: {
      ...nightOwl,
      p: 3,
      fontSize: 2,
      borderRadius: `default`,
    },
  },
}
