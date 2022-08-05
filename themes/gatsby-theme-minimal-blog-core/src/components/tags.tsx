import * as React from "react"

export default function Tags({ data }: { data: any }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export const Head = () => <title>Tags</title>
