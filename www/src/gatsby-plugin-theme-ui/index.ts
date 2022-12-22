import { merge, Theme, get } from "theme-ui"
import tailwind from "@theme-ui/preset-tailwind"

const sharedButtonStyles = {
  border: `none`,
  color: `white`,
  cursor: `pointer`,
  fontFamily: `body`,
  fontWeight: `medium`,
  transition: `all 0.3s ease-in-out`,
  outline: `none`,
}

const sharedHeadingStyles = {
  color: `heading`,
}

interface GradientsTheme {
  blue: {
    backgroundImage: (t: Theme) => string
  }
  orange: {
    backgroundImage: (t: Theme) => string
  }
  pink: {
    backgroundImage: (t: Theme) => string
  }
  purple: {
    backgroundImage: (t: Theme) => string
  }
  gray: {
    backgroundImage: (t: Theme) => string
  }
  black: {
    backgroundImage: (t: Theme) => string
  }
  red: {
    backgroundImage: (t: Theme) => string
  }
  yellow: {
    backgroundImage: (t: Theme) => string
  }
  green: {
    backgroundImage: (t: Theme) => string
  }
  indigo: {
    backgroundImage: (t: Theme) => string
  }
  teal: {
    backgroundImage: (t: Theme) => string
  }
  darkIndigo: {
    backgroundImage: (t: Theme) => string
  }
  strangerThings: {
    backgroundImage: string
  }
}

interface CustomTheme extends Theme {
  gradients: GradientsTheme
}

const customTheme: CustomTheme = {
  config: {
    initialColorModeName: `light`,
  },
  colors: {
    primary: tailwind.colors.indigo[5],
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
    starsCount: tailwind.colors.gray[7],
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
        dark: tailwind.colors.gray[4],
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
        starsCount: tailwind.colors.gray[8],
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
    xl: `1rem`,
  },
  layout: {
    footer: {
      textAlign: `center`,
      display: `block`,
      color: `textMuted`,
      px: [2, 3],
      py: [4, 5],
    },
    container: {
      maxWidth: `1200px`,
      padding: 4,
    },
  },
  styles: {
    root: {
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      fontSize: `18px`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
      color: `text`,
      backgroundColor: `background`,
      fontFamily: `body`,
      lineHeight: `body`,
      fontWeight: `body`,
    },
    p: {
      fontSize: [`default`, `xl`],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
    },
    h1: {
      ...sharedHeadingStyles,
      fontSize: [`4xl`, `5xl`],
      mt: 2,
    },
    h2: {
      ...sharedHeadingStyles,
      fontSize: [`3xl`, `4xl`],
      mt: 2,
    },
    h3: {
      ...sharedHeadingStyles,
      fontSize: [`2xl`, `3xl`],
      mt: 3,
    },
    h4: {
      ...sharedHeadingStyles,
      fontSize: [`xl`, `2xl`],
    },
    h5: {
      ...sharedHeadingStyles,
      fontSize: [`default`, `xl`],
    },
    h6: {
      ...sharedHeadingStyles,
      fontSize: `default`,
      mb: 2,
    },
  },
  buttons: {
    primary: {
      ...sharedButtonStyles,
      borderRadius: `full`,
      backgroundImage: (t) => `linear-gradient(45deg, ${get(t, `colors.indigo.5`)}, ${get(t, `colors.indigo.3`)})`,
      fontSize: [`default`, `xl`],
      px: 4,
      py: `0.6rem`,
      boxShadow: (t) => `0px 10px 15px ${get(t, `colors.shadow`)}`,
      "&:hover": {
        transform: `translateY(-2px)`,
        boxShadow: (t) => `0px 20px 25px ${get(t, `colors.shadow`)}`,
      },
    },
    secondary: {
      ...sharedButtonStyles,
      borderRadius: `full`,
      backgroundImage: (t) => `linear-gradient(45deg, ${get(t, `colors.gray.6`)}, ${get(t, `colors.gray.4`)})`,
      fontSize: `default`,
      px: 4,
      py: 1,
      boxShadow: `default`,
      "&:hover": {
        transform: `translateY(-1px)`,
      },
    },
    heroStars: {
      ...sharedButtonStyles,
      fontSize: `default`,
      boxShadow: `default`,
      borderRadius: `default`,
      "&:hover,&:focus": {
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
      fontSize: `default`,
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
      fontSize: `default`,
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
        boxShadow: `outline`,
        cursor: `pointer`,
      },
    },
  },
  gradients: {
    blue: {
      backgroundImage: (t) => `linear-gradient(45deg, ${get(t, `colors.indigo.3`)}, ${get(t, `colors.indigo.5`)})`,
    },
    orange: {
      backgroundImage: (t) => `linear-gradient(225deg, ${get(t, `colors.orange.3`)}, ${get(t, `colors.orange.5`)})`,
    },
    pink: {
      backgroundImage: (t) => `linear-gradient(135deg, ${get(t, `colors.pink.4`)}, ${get(t, `colors.pink.6`)})`,
    },
    purple: {
      backgroundImage: (t) => `linear-gradient(135deg, ${get(t, `colors.purple.6`)}, ${get(t, `colors.purple.3`)})`,
    },
    gray: {
      backgroundImage: (t) => `linear-gradient(135deg, ${get(t, `colors.gray.5`)}, ${get(t, `colors.gray.7`)})`,
    },
    black: {
      backgroundImage: (t) => `linear-gradient(135deg, ${get(t, `colors.gray.7`)}, ${get(t, `colors.gray.9`)})`,
    },
    red: {
      backgroundImage: (t) => `linear-gradient(225deg, ${get(t, `colors.red.6`)}, ${get(t, `colors.red.3`)})`,
    },
    yellow: {
      backgroundImage: (t) => `linear-gradient(180deg, ${get(t, `colors.yellow.5`)}, ${get(t, `colors.yellow.6`)})`,
    },
    green: {
      backgroundImage: (t) => `linear-gradient(225deg, ${get(t, `colors.green.3`)}, ${get(t, `colors.green.5`)})`,
    },
    indigo: {
      backgroundImage: (t) => `linear-gradient(72deg, ${get(t, `colors.indigo.7`)}, ${get(t, `colors.indigo.5`)})`,
    },
    teal: {
      backgroundImage: (t) => `linear-gradient(72deg, ${get(t, `colors.teal.7`)}, ${get(t, `colors.teal.5`)})`,
    },
    darkIndigo: {
      backgroundImage: (t) => `linear-gradient(135deg, ${get(t, `colors.indigo.8`)}, ${get(t, `colors.indigo.6`)})`,
    },
    strangerThings: {
      backgroundImage: `radial-gradient(#BA230D, #520506)`,
    },
  },
}

const theme = merge(tailwind, customTheme)

export default theme
