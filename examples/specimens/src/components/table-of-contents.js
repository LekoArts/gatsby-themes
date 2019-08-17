import React from "react"
import { Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

const TableOfContents = () => {
  const result = useStaticQuery(graphql`
    query {
      mdx {
        tableOfContents
      }
    }
  `)

  const toc = result.mdx.tableOfContents.items[0].items

  console.log(toc)

  return (
    <React.Fragment>
      <b>Table of contents:</b>
      <ul>
        {toc.map(entry => (
          <li key={entry.url}>
            <Styled.a href={entry.url}>{entry.title}</Styled.a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default TableOfContents
