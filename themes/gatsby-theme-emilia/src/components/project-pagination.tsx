/** @jsx jsx */
import { jsx } from "theme-ui"
import Card from "./card"

const ProjectPagination = ({ prev, next }) => (
  <div>
    project pagination goes here
    <div>
      abc
    </div>
    <div>{JSON.stringify(prev, null, 2)}</div>
    <div>{JSON.stringify(next, null, 2)}</div>
  </div>
)

export default ProjectPagination
