/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import BGImage from "./bg-image"

type HeroProps = {
  children: React.ReactNode
  color?: string
  slim?: boolean
  image: {
    aspectRatio: number
    src: string
    srcSet: string
    sizes: string
    base64: string
    tracedSVG: string
    srcWebp: string
    srcSetWebp: string
  }
}

const Hero = ({ children, color = ``, image, slim = false }: HeroProps) => (
  <section
    sx={{
      position: `relative`,
      height: slim ? [`400px`, `500px`] : [`500px`, `600px`, `700px`, `40vw`],
      maxHeight: `1200px`,
      width: `100%`,
      overflow: `hidden`,
    }}
  >
    <BGImage color={color} slim={slim}>
      <Img fluid={image} />
    </BGImage>
    {children}
  </section>
)

export default Hero
