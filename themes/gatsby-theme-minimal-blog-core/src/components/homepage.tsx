import * as React from "react"

export default function Homepage({ data }: { data: any }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export const Head = () => <title>Homepage</title>
