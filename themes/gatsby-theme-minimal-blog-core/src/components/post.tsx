import * as React from "react"

export default function Post({ data, pageContext, children }: { data: any; pageContext: any; children: any }) {
  return (
    <main>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
      {children}
    </main>
  )
}

export const Head = () => <title>Post</title>
