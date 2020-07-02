/** @jsx jsx */
import React from "react"
import { jsx, useColorMode, useThemeUI } from "theme-ui"
import { rgba } from "polished"

type BGImageProps = { children: React.ReactNode; color?: string; slim: boolean }

const BGImage = ({ children, color = ``, slim }: BGImageProps) => {
  const [colorMode] = useColorMode()
  const { theme } = useThemeUI()

  const bg = colorMode === `light` ? theme!.colors!.background : theme!.colors!.modes!.dark.background
  const shade = rgba(bg, 0.4)

  return (
    <div
      sx={{
        width: `100%`,
        height: slim ? [`400px`, `500px`] : [`500px`, `600px`, `700px`, `40vw`],
        maxHeight: `1200px`,
        zIndex: 1,
        ".gatsby-image-wrapper": {
          position: `static !important`,
          filter: `grayscale(100%)`,
          "> div": {
            paddingBottom: `0 !important`,
            height: slim
              ? [`400px !important`, `500px !important`]
              : [`500px !important`, `600px !important`, `700px !important`, `40vw !important`],
            maxHeight: `1200px`,
          },
        },
        "&:before": {
          content: `""`,
          height: `100%`,
          left: 0,
          top: 0,
          position: `absolute`,
          width: `100%`,
          mixBlendMode: colorMode === `light` ? `overlay` : `soft-light`,
          zIndex: 2,
          background: color ? `linear-gradient(to top, rgba(0, 0, 0, 0) 0%, ${rgba(color!, 1)} 100%)` : null,
        },
        "&:after": {
          backfaceVisibility: `hidden`,
          content: `""`,
          height: `100%`,
          left: 0,
          top: 0,
          position: `absolute`,
          width: `100%`,
          background: `linear-gradient(to bottom, ${shade} 0%, ${bg} 100%),
      linear-gradient(135deg, ${shade} 40%, ${bg} 100%), linear-gradient(-135deg, ${shade} 40%, ${bg} 100%)`,
        },
      }}
    >
      {children}
    </div>
  )
}

export default BGImage
