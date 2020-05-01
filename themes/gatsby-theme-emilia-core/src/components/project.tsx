import React from "react"

export default function Project({ data }: { data: any }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
