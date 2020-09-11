import React from "react"
import Tag from "../../../components/tag"

type Props = {
  data: {
    allPost: any
    [key: string]: any
  }
  pageContext: {
    isCreatedByStatefulCreatePages: boolean
    slug: string
    name: string
    [key: string]: any
  }
  [key: string]: any
}

export default function MinimalBlogCoreTag({ ...props }: Props) {
  const {
    data: { allPost },
  } = props

  return <Tag posts={allPost.nodes} {...props} />
}
