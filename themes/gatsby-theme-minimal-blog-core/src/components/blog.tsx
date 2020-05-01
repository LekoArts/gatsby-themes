import React from "react"

export default function Blog({ data }: { data: any }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
