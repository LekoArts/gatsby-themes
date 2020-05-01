import React from "react"

export default function Tags({ data }: { data: any }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
