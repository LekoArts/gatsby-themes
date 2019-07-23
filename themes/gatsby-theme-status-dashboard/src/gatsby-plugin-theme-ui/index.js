import { tailwind } from "@theme-ui/presets"

export default {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.blue[6],
    secondary: tailwind.colors.orange[6],
    muted: tailwind.colors.gray[5],
  },
  styles: {
    ...tailwind.styles,
    a: {
      color: `grayDark`,
      textDecoration: `none`,
      "&:hover": {
        color: `primary`,
      },
    },
  },
}
