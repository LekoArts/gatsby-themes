import { tailwind } from "@theme-ui/presets"

const sharedButtonStyles = {
  border: `none`,
  color: `white`,
  cursor: `pointer`,
  fontFamily: `body`,
  fontWeight: `medium`,
  transition: `all 0.3s ease-in-out`,
}

const sharedHeadingStyles = {
  color: `heading`,
}

export default {
  ...tailwind,
  initialColorMode: `light`,
  useCustomProperties: true,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.indigo[6],
    shadow: tailwind.colors.indigo[2],
    secondary: tailwind.colors.orange[5],
    background: tailwind.colors.gray[1],
    backgroundThemes: tailwind.colors.white,
    textMuted: `#667488`,
    text: tailwind.colors.gray[8],
    grayDark: tailwind.colors.gray[9],
    heading: tailwind.colors.gray[9],
    dark: tailwind.colors.gray[7],
    muted: tailwind.colors.gray[5],
    light: tailwind.colors.gray[3],
    model: {
      one: tailwind.colors.gray[2],
      two: tailwind.colors.gray[3],
      three: tailwind.colors.gray[4],
      four: tailwind.colors.gray[5],
    },
    modes: {
      dark: {
        primary: tailwind.colors.indigo[5],
        shadow: tailwind.colors.indigo[8],
        background: tailwind.colors.gray[9],
        backgroundThemes: tailwind.colors.gray[8],
        textMuted: `#7a889c`,
        text: tailwind.colors.gray[3],
        grayDark: tailwind.colors.gray[1],
        heading: tailwind.colors.gray[2],
        dark: tailwind.colors.gray[5],
        light: tailwind.colors.gray[7],
        model: {
          one: tailwind.colors.gray[8],
          two: tailwind.colors.gray[7],
          three: tailwind.colors.gray[6],
          four: tailwind.colors.gray[5],
        },
      },
      strangerThings: {
        primary: `#E7251D`,
        background: `#000114`,
        shadow: `#3d1023`,
        textMuted: `#94a3b7`,
        backgroundThemes: `transparent`,
        text: `white`,
        dark: tailwind.colors.gray[4],
        heading: `#000114`,
        light: `#842626`,
        model: {
          one: `#000114`,
          two: `#000114`,
          three: `#04041b`,
          four: `#000`,
        },
      },
    },
  },
  fonts: {
    body: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
    heading: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  },
  breakpoints: [`600px`, `900px`, `1200px`, `1800px`],
  radii: {
    ...tailwind.radii,
    xl: `1rem`,
  },
  styles: {
    ...tailwind.styles,
    Footer: {
      textAlign: `center`,
      display: `block`,
      color: `textMuted`,
      px: [2, 3],
      py: [4, 5],
    },
    Container: {
      maxWidth: `1200px`,
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
      ...sharedHeadingStyles,
      fontSize: [5, 6],
      mt: 2,
    },
    h2: {
      ...tailwind.styles.h2,
      ...sharedHeadingStyles,
      fontSize: [4, 5],
      mt: 2,
    },
    h3: {
      ...tailwind.styles.h3,
      ...sharedHeadingStyles,
      fontSize: [3, 4],
      mt: 3,
    },
    h4: {
      ...tailwind.styles.h4,
      ...sharedHeadingStyles,
      fontSize: [2, 3],
    },
    h5: {
      ...tailwind.styles.h5,
      ...sharedHeadingStyles,
      fontSize: [1, 2],
    },
    h6: {
      ...tailwind.styles.h6,
      ...sharedHeadingStyles,
      fontSize: 1,
      mb: 2,
    },
  },
  buttons: {
    primary: {
      ...sharedButtonStyles,
      borderRadius: `full`,
      backgroundImage: t => `linear-gradient(45deg, ${t.colors.indigo[6]}, ${t.colors.indigo[4]})`,
      fontSize: [1, 2],
      px: 4,
      py: `0.6rem`,
      boxShadow: t => `0px 10px 15px ${t.colors.shadow}`,
      "&:hover": {
        transform: `translateY(-2px)`,
        boxShadow: t => `0px 20px 25px ${t.colors.shadow}`,
      },
    },
    secondary: {
      ...sharedButtonStyles,
      borderRadius: `full`,
      backgroundImage: t => `linear-gradient(45deg, ${t.colors.gray[7]}, ${t.colors.gray[5]})`,
      fontSize: 1,
      px: 4,
      py: 1,
      boxShadow: `default`,
      "&:hover": {
        transform: `translateY(-1px)`,
      },
    },
    newsletter: {
      ...sharedButtonStyles,
      borderRadius: `default`,
      px: `1.25rem`,
      py: `0.6rem`,
      backgroundColor: `primary`,
      fontSize: 1,
      boxShadow: `default`,
      "&:hover": {
        transform: `translateY(-1px)`,
      },
    },
    outline: {
      ...sharedButtonStyles,
      backgroundColor: `transparent`,
      borderWidth: 2,
      borderColor: `white`,
      borderStyle: `solid`,
      borderRadius: `full`,
      textAlign: `center`,
      fontSize: 1,
      fontWeight: `semibold`,
      px: 4,
      py: `0.7rem`,
      "&:hover": {
        backgroundColor: `white`,
        color: `primary`,
      },
    },
    white: {
      ...sharedButtonStyles,
      borderRadius: `full`,
      fontSize: 1,
      fontWeight: `semibold`,
      px: 4,
      py: `0.75rem`,
      backgroundColor: `white`,
      color: `primary`,
      "&:hover": {
        transform: `translateY(-1px)`,
      },
    },
    transparent: {
      color: `inherit`,
      bg: `transparent`,
      transition: `all 0.3s ease-in-out`,
      border: `none`,
      "&:hover, &:focus": {
        color: `primary`,
        outline: `none`,
        boxShadow: `0 0 0 2px`,
        cursor: `pointer`,
      },
    },
  },
  inputs: {
    primary: {
      px: 3,
      py: `0.6rem`,
      fontSize: 1,
      borderRadius: `default`,
      boxShadow: `default`,
      border: `none`,
      outline: `none`,
      "&:focus": {
        boxShadow: `outline`,
      },
    },
  },
  gradients: {
    blue: {
      backgroundImage: t => `linear-gradient(45deg, ${t.colors.indigo[3]}, ${t.colors.indigo[5]})`,
    },
    orange: {
      backgroundImage: t => `linear-gradient(225deg, ${t.colors.orange[3]}, ${t.colors.orange[5]})`,
    },
    pink: {
      backgroundImage: t => `linear-gradient(135deg, ${t.colors.pink[4]}, ${t.colors.pink[6]})`,
    },
    purple: {
      backgroundImage: t => `linear-gradient(135deg, ${t.colors.purple[6]}, ${t.colors.purple[3]})`,
    },
    gray: {
      backgroundImage: t => `linear-gradient(135deg, ${t.colors.gray[5]}, ${t.colors.gray[7]})`,
    },
    black: {
      backgroundImage: t => `linear-gradient(135deg, ${t.colors.gray[7]}, ${t.colors.gray[9]})`,
    },
    red: {
      backgroundImage: t => `linear-gradient(225deg, ${t.colors.red[6]}, ${t.colors.red[3]})`,
    },
    yellow: {
      backgroundImage: t => `linear-gradient(180deg, ${t.colors.yellow[5]}, ${t.colors.yellow[6]})`,
    },
    green: {
      backgroundImage: t => `linear-gradient(225deg, ${t.colors.green[3]}, ${t.colors.green[5]})`,
    },
    indigo: {
      backgroundImage: t => `linear-gradient(72deg, ${t.colors.indigo[7]}, ${t.colors.indigo[5]})`,
    },
    teal: {
      backgroundImage: t => `linear-gradient(72deg, ${t.colors.teal[7]}, ${t.colors.teal[5]})`,
    },
    darkIndigo: {
      backgroundImage: t => `linear-gradient(135deg, ${t.colors.indigo[8]}, ${t.colors.indigo[6]})`,
    },
    strangerThings: {
      backgroundImage: `radial-gradient(#BA230D, #520506)`,
    },
  },
}
