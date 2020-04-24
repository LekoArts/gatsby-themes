import { graphql, useStaticQuery } from "gatsby"

type Props = {
  minimalBlogConfig: {
    basePath: string
    blogPath: string
    postsPath: string
    pagesPath: string
    tagsPath: string
    externalLinks: {
      name: string
      url: string
    }[]
    navigation: {
      title: string
      slug: string
    }[]
    showLineNumbers: boolean
    latestPostsText: string
    readAllPostsText: string
    viewAllTagsText: string
  }
}

const useMinimalBlogConfig = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      minimalBlogConfig {
        basePath
        blogPath
        postsPath
        pagesPath
        tagsPath
        externalLinks {
          name
          url
        }
        navigation {
          title
          slug
        }
        showLineNumbers
        latestPostsText
        readAllPostsText
        viewAllTagsText
      }
    }
  `)

  return data.minimalBlogConfig
}

export default useMinimalBlogConfig
