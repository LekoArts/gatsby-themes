import { tailwind } from "@theme-ui/presets"

export default {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.pink[6],
    secondary: tailwind.colors.indigo[6],
  },
}
