import React from "react"
import Tag from "../../../components/tag"

type Props = {
  data: {
    allPost: any
    [key: string]: any
  }
}

export default ({ data }: Props) => {
  const { allPost } = data

  return <Tag data={{ ...data, allPost }} />
}
