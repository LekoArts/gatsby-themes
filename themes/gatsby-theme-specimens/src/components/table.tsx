/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Badge from "./badge"

type TableProps = {
  className?: string
  columns: string | string[]
  titles: string[]
  children: React.ReactNode
  hideColumnMobile?: number
}

const Table = ({ className, columns, titles, children }: TableProps) => (
  <div
    sx={{
      div: { alignSelf: `center` },
      "> div": { display: `grid`, gridTemplateColumns: columns, p: 2 },
      "> div:nth-of-type(even)": { backgroundColor: `gray.1`, borderRadius: `default` },
      "> div:not(:first-child)": { py: 3 },
      variant: `table.specimens`,
    }}
    className={className}
  >
    <div
      sx={{
        p: 2,
        backgroundColor: `indigo.1`,
        borderRadius: `default`,
        mb: 3,
        "[data-name='badge']": { backgroundColor: `indigo.6`, color: `white` },
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
