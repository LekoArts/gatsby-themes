import * as React from "react"

export default function Projects({ data }: { data: any }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export const Head = () => <title>Projects</title>
