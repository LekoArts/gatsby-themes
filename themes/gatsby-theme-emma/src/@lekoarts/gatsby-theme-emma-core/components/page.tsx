import React from "react"
import Page from "../../../components/page"

type Props = {
  data: {
    page: any
    [key: string]: any
  }
  [key: string]: any
}

export default function EmmaCorePage({ ...props }: Props) {
  return <Page {...props} />
}
