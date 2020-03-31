/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import useEmiliaConfig from "../hooks/use-emilia-config"

const SocialMediaList = () => {
  const { socialMedia } = useEmiliaConfig()

  return (
    <React.Fragment>
      {socialMedia.map((entry) => (
        <Styled.a key={entry.title} href={entry.href}>
          {entry.title}
        </Styled.a>
      ))}
    </React.Fragment>
  )
}

export default SocialMediaList
