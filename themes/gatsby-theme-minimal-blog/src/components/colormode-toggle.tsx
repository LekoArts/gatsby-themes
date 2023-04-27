/** @jsx jsx */
import * as React from "react"
import { jsx, get, useColorMode, Theme } from "theme-ui"

// CSS Styles adapted from: https://codepen.io/aaroniker/pen/KGpXZo

const iconBaseStyles = {
  position: `relative`,
  width: `24px`,
  height: `24px`,
  borderRadius: `50%`,
  transition: `all 0.45s ease`,
  "&:before": {
    content: `""`,
    position: `absolute`,
    right: `-9px`,
    top: `-9px`,
    height: `24px`,
    width: `24px`,
    transition: `transform 0.45s ease`,
    borderRadius: `50%`,
  },
  "&:after": {
    content: `""`,
    width: `8px`,
    height: `8px`,
    borderRadius: `50%`,
    margin: `-4px 0 0 -4px`,
    position: `absolute`,
    top: `50%`,
    left: `50%`,
    transition: `all 0.35s ease`,
    boxShadow: (t: Theme) =>
      `0 -23px 0 ${get(t, `colors.toggleIcon`)}, 0 23px 0 ${get(t, `colors.toggleIcon`)}, 23px 0 0 ${get(
        t,
        `colors.toggleIcon`
      )}, -23px 0 0 ${get(t, `colors.toggleIcon`)}, 15px 15px 0 ${get(t, `colors.toggleIcon`)}, -15px 15px 0 ${get(
        t,
        `colors.toggleIcon`
      )}, 15px -15px 0 ${get(t, `colors.toggleIcon`)}, -15px -15px 0 ${get(t, `colors.toggleIcon`)}`,
  },
} as const

const buttonBaseStyles = {
  opacity: 0.65,
  position: `relative`,
  borderRadius: `4px`,
  width: `40px`,
  height: `25px`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  transition: `opacity 0.3s ease`,
  border: `none`,
  outline: `none`,
  background: `none`,
  cursor: `pointer`,
  padding: 0,
  appearance: `none`,
  "&:hover, &:focus": { opacity: 1 },
} as const

const FallbackIcon = () => (
  <button type="button" sx={buttonBaseStyles}>
    <div
      sx={{
        ...iconBaseStyles,
        transform: `scale(0.55)`,
        "&:before": {
          ...iconBaseStyles[`&:before`],
          opacity: 0,
        },
        "&:after": {
          ...iconBaseStyles[`&:after`],
          transform: `scale(0)`,
        },
      }}
    />
  </button>
)

interface ITogglePrimitiveProps {
  fallback?: React.ReactNode
}

const TogglePrimitive: React.FC<React.PropsWithChildren<ITogglePrimitiveProps>> = ({
  children,
  fallback = undefined,
}) => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    if (!fallback) {
      return null
    }
    return <React.Fragment>{fallback}</React.Fragment>
  }

  return <React.Fragment>{children}</React.Fragment>
}

const ColorModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode<"light" | "dark">()
  const isDark = colorMode === `dark`

  return (
    <TogglePrimitive fallback={<FallbackIcon />}>
      <button
        onClick={() => {
          const next = isDark ? `light` : `dark`
          setColorMode(next)
          document.documentElement.classList.value = `theme-ui-${next}`
        }}
        type="button"
        aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
        title={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
        sx={buttonBaseStyles}
      >
        <div
          sx={{
            ...iconBaseStyles,
            border: (t) => (isDark ? `4px solid ${get(t, `colors.toggleIcon`)}` : `none`),
            backgroundColor: isDark ? `toggleIcon` : `transparent`,
            transform: isDark ? `scale(0.55)` : `scale(1)`,
            overflow: isDark ? `visible` : `hidden`,
            boxShadow: (t) => (isDark ? `none` : `inset 8px -8px 0px 0px ${get(t, `colors.toggleIcon`)}`),
            "&:before": {
              ...iconBaseStyles[`&:before`],
              border: (t) => (isDark ? `2px solid ${get(t, `colors.toggleIcon`)}` : `none`),
              transform: isDark ? `translate(14px, -14px)` : `translate(0, 0)`,
              opacity: isDark ? 0 : 1,
            },
            "&:after": {
              ...iconBaseStyles[`&:after`],
              transform: isDark ? `scale(1)` : `scale(0)`,
            },
          }}
        />
      </button>
    </TogglePrimitive>
  )
}

export default ColorModeToggle
