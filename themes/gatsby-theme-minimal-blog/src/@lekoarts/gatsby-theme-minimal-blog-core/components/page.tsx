import React from "react"
import Page from "../../../components/page"

type Props = {
  data: {
    project: any
    [key: string]: any
  }
}

export default ({ data }: Props) => {
  const { page } = data

  return <Page data={{ ...data, page }} />
}
