import { tailwind } from "@theme-ui/presets"

export default {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.indigo[6],
    secondary: tailwind.colors.orange[6],
    success: tailwind.colors.green[3],
    info: tailwind.colors.blue[4],
    warning: tailwind.colors.yellow[3],
    danger: tailwind.colors.red[3],
    elementBG: tailwind.colors.gray[1],
  },
}
