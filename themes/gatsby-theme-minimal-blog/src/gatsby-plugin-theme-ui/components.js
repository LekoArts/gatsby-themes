import React from "react"
import { Text } from "@theme-ui/components"

export default {
  Text: ({ children, ...props }) => <Text {...props}>{children}</Text>,
}
