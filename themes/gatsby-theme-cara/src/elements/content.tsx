import React from "react"
import { css } from "theme-ui"
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

type ContentProps = {
  speed: number
  offset: number
  children?: React.ReactNode
}

const Content: React.FC<ContentProps> = ({ speed, offset, children, className }) => (
  <ParallaxLayer
    className={className}
    css={css({
      padding: [4, 6, 8, 12],
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      zIndex: 50,
    })}
    speed={speed}
    offset={offset}
  >
    {children}
  </ParallaxLayer>
)

export default Content
