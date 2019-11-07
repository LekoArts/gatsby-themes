import React from "react"
import Post from "../../../components/post"

type Props = {
  data: {
    project: any
    [key: string]: any
  }
}

export default ({ data }: Props) => {
  const { post } = data

  return <Post data={{ ...data, post }} />
}
