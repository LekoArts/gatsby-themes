/** @jsx jsx */
import { jsx } from "theme-ui"
import { Heading } from "@theme-ui/components"
import Layout from "./layout"

type PostsProps = {
  list: {
    fieldValue: string
    totalCount: number
  }[]
}

const Tags = ({ list }: PostsProps) => (
  <Layout>
    <Heading variant="h2" as="h2">
      Categories
    </Heading>
  </Layout>
)

export default Tags
