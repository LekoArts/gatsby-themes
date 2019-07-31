import React from "react"
import ProjectCard from "../components/project-card"

export default {
  ProjectCard: props => (
    <ProjectCard link={props.link} title={props.title} bg={props.bg}>
      {props.children}
    </ProjectCard>
  ),
}
