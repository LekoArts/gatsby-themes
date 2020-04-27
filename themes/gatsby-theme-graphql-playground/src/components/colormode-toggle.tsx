/** @jsx jsx */
import { jsx } from "theme-ui"

type Props = {
  isDark: boolean
  toggle: (e: any) => void
}

// Adapted from: https://codepen.io/aaroniker/pen/KGpXZo and https://github.com/narative/gatsby-theme-novela/blob/714b6209c5bd61b220370e8a7ad84c0b1407946a/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx

const ColorModeToggle = ({ isDark, toggle }: Props) => (
  <button
    onClick={toggle}
    type="button"
    aria-label={isDark ? `Activate Light mode` : `Activate Dark mode`}
    title={isDark ? `Activate Light mode` : `Activate Dark mode`}
    sx={{
      border: `none`,
      width: `100%`,
      mb: 3,
      px: 3,
      py: 2,
      textAlign: `left`,
      color: `background`,
      backgroundColor: `text`,
      fontSize: 1,
      "&:hover": {
        cursor: `pointer`,
      },
    }}
  >
    Toggle Color Mode
  </button>
)

export default ColorModeToggle
