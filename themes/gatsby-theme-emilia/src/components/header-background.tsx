/** @jsx jsx */
import React from "react"
import { jsx, useColorMode } from "theme-ui"
import BGPattern from "../assets/bg-pattern"

const HeaderBackground = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`

  return (
    <React.Fragment>
      <div
        sx={{
          position: `absolute`,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: `100%`,
          height: `100%`,
          color: `backgroundPattern`,
          svg: {
            height: `100%`,
            width: `100%`,
          },
        }}
      >
        <BGPattern />
      </div>
      <div
        sx={{
          position: `absolute`,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 34.99%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, ${
            isDark ? `0.35` : `0.15`
          }) 100%)`,
        }}
      />
    </React.Fragment>
  )
}

export default HeaderBackground
