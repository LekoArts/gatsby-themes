import * as React from "react"
import ProjectCard from "./project-card"

const MdxComponents = {
  ProjectCard: ({ link, title, bg, children, ...props }: any) => (
    <ProjectCard {...props} link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
}

export default MdxComponents
