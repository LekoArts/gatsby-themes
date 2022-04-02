import type { GatsbyNode } from "gatsby"

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type GithubData implements Node {
      data: GithubDataData
    }

    type GithubDataData {
      repository: GithubDataDataRepository
    }

    type GithubDataDataRepository {
      stargazers: GithubDataDataRepositoryStargazers
    }

    type GithubDataDataRepositoryStargazers {
      totalCount: Int
    }
  `)
}
