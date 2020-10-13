/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Image,Embed } from 'theme-ui'

type VideoCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const VideoCard = ({ link }: VideoCardProps) => (
  <a
    href=""
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
      marginTop: `10%`,

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
    
      <Embed
  src={link}/>
  </a>
)

export default VideoCard
