import React from "react"

export default function Page({ data, pageContext }: { data: any; pageContext: any }) {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </div>
  )
}
