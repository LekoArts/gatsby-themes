/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"

const ColorModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode<"light" | "dark">()
  const isDark = colorMode === `dark`

  return (
    <button
      onClick={() => {
        const next = isDark ? `light` : `dark`
        setColorMode(next)
        document.documentElement.classList.value = `theme-ui-${next}`
      }}
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
}

export default ColorModeToggle
