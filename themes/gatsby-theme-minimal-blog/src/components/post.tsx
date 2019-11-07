import React from "react"

const Post = ({ data }: { data: any }) => (
  <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    <div>test123</div>
  </div>
)

export default Post
