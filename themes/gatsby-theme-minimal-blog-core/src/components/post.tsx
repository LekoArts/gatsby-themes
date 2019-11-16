import React from "react"

export default ({ data, pageContext }: { data: any; pageContext: any }) => (
  <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    <pre>{JSON.stringify(pageContext, null, 2)}</pre>
  </div>
)
