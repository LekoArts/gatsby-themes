import React from "react"

export default ({ data }: { data: any }) => <pre>{JSON.stringify(data, null, 2)}</pre>
