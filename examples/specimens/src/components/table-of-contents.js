import * as React from "react"
import { Themed } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

const TableOfContents = () => {
  const result = useStaticQuery(graphql`
    query {
      mdx(fileAbsolutePath: { regex: "/index.mdx/" }) {
        tableOfContents
      }
    }
  `)

  const toc = result.mdx.tableOfContents.items[0].items[2].items || false

  return (
    <ul>
      {toc &&
        toc.map((entry) => (
          <li key={entry.url}>
            <Themed.a href={entry.url}>{entry.title}</Themed.a>
          </li>
        ))}
    </ul>
  )
}

export default TableOfContents
