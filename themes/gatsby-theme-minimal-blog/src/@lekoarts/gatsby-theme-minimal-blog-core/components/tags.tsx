import React from "react"
import Tags from "../../../components/tags"

type Props = {
  data: {
    allPost: {
      group: {
        fieldValue: string
        totalCount: number
      }[]
    }
  }
}

export default function MinimalBlogCoreTags({ data }: Props) {
  const { allPost } = data

  return <Tags list={allPost.group} />
}
