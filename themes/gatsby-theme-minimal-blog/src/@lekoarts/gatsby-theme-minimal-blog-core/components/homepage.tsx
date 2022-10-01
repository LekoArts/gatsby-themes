import * as React from "react"
import Homepage, { Head } from "../../../components/homepage"

type Props = {
  data: {
    allPost: any
    [key: string]: string
  }
  [key: string]: any
}

export default function MinimalBlogCoreHomepage({ ...props }: Props) {
  const {
    data: { allPost },
  } = props

  return <Homepage posts={allPost.nodes} {...props} />
}

export { Head }
