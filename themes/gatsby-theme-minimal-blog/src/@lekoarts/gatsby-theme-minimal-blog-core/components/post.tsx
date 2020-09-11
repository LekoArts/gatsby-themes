import React from "react"
import Post from "../../../components/post"

type Props = {
  data: {
    post: any
    [key: string]: any
  }
  [key: string]: any
}

export default function MinimalBlogCorePost({ ...props }: Props) {
  return <Post {...props} />
}
