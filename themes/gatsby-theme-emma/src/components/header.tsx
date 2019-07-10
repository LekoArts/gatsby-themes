/** @jsx jsx */
import React from "react"
import { Header as ThemeHeader, css, jsx, useColorMode } from "theme-ui"
import Navigation from "./navigation"
import SocialLinks from "./social-links"

type MetaType = {
  meta: {
    [key: string]: string
  }
  nav: {
    title: string
    slug: string
  }[]
}

const Header = ({ meta, nav }: MetaType) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <ThemeHeader>
      <Navigation nav={nav} />
      <div
        css={css({
          fontWeight: `bold`,
          fontSize: 4,
          display: `flex`,
          flex: [`1 0 100%`, 1],
          justifyContent: `center`,
          order: [1, 2],
        })}
      >
        {meta.siteTitle}
      </div>
      <div
        css={css({
          a: {
            fontSize: 4,
            color: `text`,
            display: `flex`,
            alignItems: `center`,
            "&:hover": {
              color: `primary`,
            },
            "&:not(:first-of-type)": {
              marginLeft: 2,
            },
          },
          justifyContent: `flex-end`,
          flex: 1,
          display: `flex`,
          order: 3,
        })}
      >
        <SocialLinks />
        <button
          sx={{ variant: `buttons.toggle`, fontWeight: `semibold` }}
          onClick={toggleColorMode}
          type="button"
          aria-label="Toggle dark mode"
        >
          {isDark ? `Light` : `Dark`}
        </button>
      </div>
    </ThemeHeader>
  )
}

export default Header
