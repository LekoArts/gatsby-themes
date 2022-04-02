exports.createSchemaCustomization = ({ actions }) => {
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
