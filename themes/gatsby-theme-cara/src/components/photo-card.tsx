/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Image } from 'theme-ui'

type PhotoCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const PhotoCard = ({ link, title, children, bg }: PhotoCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      // width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      overflow: `hidden`,
      // lineHeight: `0px`,
      marginTop: `5%`,

      // px: 4,
      // py: [4, 5],
      color: `white`,
      // background: bg || `none`,
      background: `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
    {children ? <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>:null}
    {title? <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      {title}
    </div>:null}
    <div
      sx={{ maxHeight: `800px`, overflowY: `auto`}}
      onScroll={e => e.stopPropagation()}
    >
      <Image src={link} alt="" width="100%" />
    </div>
  </a>
)

export default PhotoCard
