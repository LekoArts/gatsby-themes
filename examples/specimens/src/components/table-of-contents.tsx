import { Themed } from "@theme-ui/mdx"
import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"

interface ITableOfContents {
	file: {
		childMdx: {
			tableOfContents: {
				items: {
					items: {
						items: {
							title: string
							url: string
						}[]
					}[]
				}[]
			}
		}
	}
}

function TableOfContents() {
	const result = useStaticQuery<ITableOfContents>(graphql`
    query {
      file(name: { eq: "index" }) {
        childMdx {
          tableOfContents
        }
      }
    }
  `)

	const toc = result.file.childMdx.tableOfContents.items[0].items[2].items || false

	return (
		<ul>
			{toc
			&& toc.map(entry => (
				<li key={entry.url}>
					<Themed.a href={entry.url}>{entry.title}</Themed.a>
				</li>
			))}
		</ul>
	)
}

export default TableOfContents
