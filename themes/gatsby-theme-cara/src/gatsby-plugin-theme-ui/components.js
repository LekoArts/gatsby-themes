import React from "react"
import ProjectCard from "../components/project-card"
import PhotoCard from "../components/photo-card"
import VideoCard from "../components/video-card"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children }) => (
    <ProjectCard link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  PhotoCard: ({ link, title, bg, children }) => (
    <PhotoCard link={link} title={title} bg={bg}>
      {children}
    </PhotoCard>
  ),
  VideoCard: ({ link, title, bg, children }) => (
    <VideoCard link={link} title={title} bg={bg}>
      {children}
    </VideoCard>
  ),
}

export default components
