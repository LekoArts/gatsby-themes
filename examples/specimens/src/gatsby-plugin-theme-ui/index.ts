import system from "@theme-ui/preset-system"

const theme = {
  ...system,
  styles: {
    ...system.styles,
    root: {
      ...system.styles.root,
      WebkitTextSizeAdjust: `100%`,
      "h1, h2, h3, h4, h5, h6": {
        marginTop: `2rem !important`,
        marginBottom: `1rem !important`,
      },
      h3: { marginTop: `4rem !important` },
      ".sizes-table": {
        "> div:not(:first-of-type)": {
          paddingTop: `0.5rem !important`,
          paddingBottom: `0.5rem !important`,
        },
      },
      pre: {
        padding: `0.75rem`,
        borderRadius: `0.25rem`,
        overflow: `auto`,
      },
      code: {
        padding: `0.25rem 0.5rem`,
        borderRadius: `0.25rem`,
        marginLeft: `0.25rem`,
        marginRight: `0.25rem`,
      },
    },
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
