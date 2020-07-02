/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Badge from "./badge"
import theme from "../theme"

type TableProps = {
  className?: string
  columns: string | string[]
  titles: string[]
  children: React.ReactNode
}

const Table = ({ className = ``, columns, titles, children }: TableProps) => (
  <div
    sx={{
      div: { alignSelf: `center` },
      color: theme.colors.text,
      "> div": {
        display: `grid`,
        gridTemplateColumns: columns,
        p: [theme.space[2], theme.space[3]],
        gridColumnGap: 1,
        backgroundColor: theme.colors.white,
        borderRadius: theme.radii.default,
      },
      "> div:nth-of-type(even)": { backgroundColor: theme.colors.gray[1], borderRadius: theme.radii.default },
      "> div:not(:first-of-type)": { py: theme.space[3] },
      ...theme.tables.specimens,
    }}
    className={className}
  >
    <div
      data-testid="table-header"
      sx={{
        p: theme.space[2],
        backgroundColor: theme.colors.indigo[1],
        borderRadius: theme.radii.default,
        mb: theme.space[3],
        "[data-name='badge']": {
          backgroundColor: theme.colors.indigo[2],
          color: theme.colors.indigo[9],
          fontWeight: theme.fontWeights.medium,
        },
      }}
    >
      {titles.map((title) => (
        <div key={title}>
          <Badge>{title}</Badge>
        </div>
      ))}
    </div>
    {children}
  </div>
)

export default Table
