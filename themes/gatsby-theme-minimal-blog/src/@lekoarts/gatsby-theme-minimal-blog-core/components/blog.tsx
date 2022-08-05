import * as React from "react"
import Blog, { Head } from "../../../components/blog"

type Props = {
  data: {
    allPost: any
    [key: string]: string
  }
  [key: string]: any
}

export default function MinimalBlogCoreBlog({ ...props }: Props) {
  const {
    data: { allPost },
  } = props

  return <Blog posts={allPost.nodes} {...props} />
}

export { Head }
