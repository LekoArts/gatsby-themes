export const onPreBootstrap = ({ reporter }) => {
  if (!process.env.NETLIFY_ACCESS_KEY || !process.env.CIRCLECI_KEY) {
    reporter.panicOnBuild(`
Please define both environment variables "NETLIFY_ACCESS_KEY" and "CIRCLECI_KEY".
They are mandatory for the source plugin to work.

Read the documentation on how to set environment variables locally or in your build tool:

https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/

If you're using Netlify to host your website you can also have a look at their documentation:

https://docs.netlify.com/configure-builds/environment-variables/
    `)
  }
}
