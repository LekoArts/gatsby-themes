import { system } from "@theme-ui/presets"

const theme = {
  ...system,
  styles: {
    ...system.styles,
    pre: {
      ...system.styles.pre,
      padding: `0.75rem`,
      borderRadius: `0.25rem`,
      fontSize: `1rem`,
      overflow: `auto`,
    },
    code: {
      ...system.styles.code,
      backgroundColor: system.colors.muted,
      color: system.colors.secondary,
      padding: `0.25rem 0.5rem`,
      borderRadius: `0.25rem`,
      fontSize: `1rem`,
      marginLeft: `0.25rem`,
      marginRight: `0.25rem`,
    },
  },
}

export default theme
