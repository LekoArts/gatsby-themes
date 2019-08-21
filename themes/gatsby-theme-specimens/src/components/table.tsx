/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Badge from "./badge"

type TableProps = {
  className?: string
  columns: string | string[]
  titles: string[]
  children: React.ReactNode
}

const Table = ({ className, columns, titles, children }: TableProps) => (
  <div
    sx={{
      div: { alignSelf: `center` },
      "> div": { display: `grid`, gridTemplateColumns: columns, p: [2, 3] },
      "> div:nth-of-type(even)": { backgroundColor: `gray.1`, borderRadius: `default` },
      "> div:not(:first-of-type)": { py: 3 },
      variant: `table.specimens`,
    }}
    className={className}
  >
    <div
      data-testid="table-header"
      sx={{
        p: 2,
        backgroundColor: `indigo.1`,
        borderRadius: `default`,
        mb: 3,
        "[data-name='badge']": { backgroundColor: `indigo.2`, color: `indigo.9`, fontWeight: `medium` },
      }}
    >
      {titles.map(title => (
        <div key={title}>
          <Badge>{title}</Badge>
        </div>
      ))}
    </div>
    {children}
  </div>
)

export default Table
