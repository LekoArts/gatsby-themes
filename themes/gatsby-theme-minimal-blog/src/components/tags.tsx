/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Box, Flex } from "@theme-ui/components"
import kebabCase from "lodash.kebabcase"
import { Link } from "gatsby"
import Layout from "./layout"
import useSiteMetadata from "../hooks/use-site-metadata"
import SEO from "./seo"
import replaceSlashes from "../utils/replaceSlashes"

type PostsProps = {
  list: {
    fieldValue: string
    totalCount: number
  }[]
}

const Tags = ({ list }: PostsProps) => {
  const { tagsPath, basePath } = useSiteMetadata()

  return (
    <Layout>
      <SEO title="Tags" />
      <Styled.h2>Tags</Styled.h2>
      <Box mt={[4, 5]}>
        {list.map(listItem => (
          <Flex key={listItem.fieldValue} mb={[1, 1, 2]} sx={{ alignItems: `center` }}>
            <Styled.a
              as={Link}
              sx={{ variant: `links.listItem`, mr: 2 }}
              to={replaceSlashes(`/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`)}
            >
              {listItem.fieldValue} <span sx={{ color: `secondary` }}>({listItem.totalCount})</span>
            </Styled.a>
          </Flex>
        ))}
      </Box>
    </Layout>
  )
}

export default Tags
