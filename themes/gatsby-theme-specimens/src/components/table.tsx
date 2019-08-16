/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Badge from "./badge"

type TableProps = {
  className?: string
  columns: number
  titles: string[]
  children: React.ReactNode
  hideColumnMobile?: number
}

const Table = ({ className, columns, titles, children, hideColumnMobile }: TableProps) => {
  const hideStyle = `&:nth-of-type(3n+${hideColumnMobile})`

  return (
    <div
      sx={{
        display: `inline-grid`,
        gridTemplateColumns: hideColumnMobile
          ? [`repeat(${columns - 1}, auto)`, `repeat(${columns}, auto)`]
          : `repeat(${columns}, auto)`,
        gridGap: [3, 4],
        "> div": {
          alignSelf: `flex-start`,
          [hideStyle]: {
            display: [`none`, `block`],
          },
        },
      }}
      className={className}
    >
      {titles.map(title => (
        <div key={title}>
          <Badge>{title}</Badge>
        </div>
      ))}
      {children}
    </div>
  )
}

export default Table
