const standardBasePath = `/`

exports.onPreBootstrap = ({ reporter }) => {
  if (!process.env.NETLIFY_ACCESS_KEY || !process.env.CIRCLECI_KEY) {
    reporter.panicOnBuild(`
      Please define both environment variables "NETLIFY_ACCESS_KEY" and "CIRCLECI_KEY".
      They are mandatory for the source plugin to work.
      
      Read the documentation on how to set environment variables locally or in your build tool:
      
      https://www.gatsbyjs.org/docs/environment-variables/
      
      If you're using Netlify to host your website you can also have a look at their documentation:
      
      https://www.netlify.com/docs/continuous-deployment/#environment-variables
    `)
  }
}

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type CircleCiProjects implements Node @infer {
      vcs_url: String!
    }
    
    type CircleCiMe implements Node @infer {
      num_projects_followed: Int!
    }
    
    type NetlifySites implements Node @infer {
      netlify_id: Int!
      name: String!
      url: String!
      build_settings: BuildSettings
    }
    
    type BuildSettings @infer {
      repo_url: String!
    }
  `)
}
