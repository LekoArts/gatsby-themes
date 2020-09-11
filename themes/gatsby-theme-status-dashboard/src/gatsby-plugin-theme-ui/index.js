import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"

export default merge(tailwind, {
  colors: {
    primary: tailwind.colors.blue[6],
    secondary: tailwind.colors.orange[6],
    muted: tailwind.colors.gray[6],
    textMuted: `#69778c`,
  },
  styles: {
    a: {
      color: `textMuted`,
      textDecoration: `none`,
      transition: `all 0.3s ease-in-out`,
      "&:hover": {
        color: `primary`,
      },
    },
  },
  cards: {
    dashboard: {
      background: `white`,
      borderRadius: `lg`,
      boxShadow: `default`,
      p: 3,
      svg: {
        color: `muted`,
        transition: `all 0.3s ease-in-out`,
        "&:hover": { color: `primary` },
      },
      a: {
        textTransform: `uppercase`,
        fontWeight: `semibold`,
        fontSize: 0,
        letterSpacing: `wide`,
      },
    },
    icon: {
      svg: {
        width: 8,
        borderRadius: `full`,
        p: 2,
        background: `white`,
        ".primary": {
          fill: `currentColor`,
          color: `primary`,
        },
        ".secondary": {
          fill: `currentColor`,
          color: `blue.8`,
        },
      },
    },
    label: {
      boxShadow: `default`,
      background: `white`,
      px: 3,
      py: 2,
      borderRadius: `lg`,
      ml: 2,
      fontSize: 0,
      fontWeight: `semibold`,
    },
  },
  grids: {
    dashboard: {
      display: `grid`,
      gridTemplateColumns: [`1fr`, `1fr`, `1fr 1fr`],
      gridGap: [3, 3, 4],
    },
  },
})
