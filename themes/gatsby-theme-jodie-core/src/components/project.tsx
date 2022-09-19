import * as React from "react"

export default function Project({ data, children }: { data: any; children: any }) {
  return (
    <main>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {children}
    </main>
  )
}

export const Head = () => <title>Project</title>
