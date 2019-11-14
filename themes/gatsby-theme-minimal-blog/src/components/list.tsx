/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type ListProps = {
  children: React.ReactNode
}

const List = ({ children }: ListProps) => (
  <section
    sx={{
      mb: [5, 5, 6],
      ul: { margin: 0, padding: 0 },
      li: { listStyle: `none`, mb: 3 },
      a: { fontSize: [1, 2, 3], color: `text` },
    }}
  >
    {children}
  </section>
)

export default List
