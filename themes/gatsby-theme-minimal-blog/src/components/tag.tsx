import React from "react"

const Tag = ({ data: { allPost } }) => (
  <React.Fragment>
    <div>{JSON.stringify(allPost, null, 2)}</div>
  </React.Fragment>
)

export default Tag
