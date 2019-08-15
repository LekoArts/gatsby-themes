/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Badge from "./badge"

type TableProps = {
  className?: string
  columns: number
  titles: string[]
  children: React.ReactNode
}

const Table = ({ className, columns, titles, children }: TableProps) => (
  <div
    sx={{
      display: `inline-grid`,
      gridTemplateColumns: `repeat(${columns}, auto)`,
      gridGap: [3, 4],
      div: { alignSelf: `flex-start` },
    }}
    className={className}
  >
    {titles.map(title => (
      <div>
        <Badge>{title}</Badge>
      </div>
    ))}
    {children}
  </div>
)

export default Table
