import React from "react"
import { Styled } from "theme-ui"
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
    <React.Fragment>
      <ul>
        {toc &&
          toc.map(entry => (
            <li key={entry.url}>
              <Styled.a href={entry.url}>{entry.title}</Styled.a>
            </li>
          ))}
      </ul>
    </React.Fragment>
  )
}

export default TableOfContents
