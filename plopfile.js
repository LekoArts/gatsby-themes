const prompt = [
  {
    type: `input`,
    name: `name`,
    message: `Name of the theme`,
  },
  {
    type: `input`,
    name: `readme-name`,
    message: `Name for the README title, alt tags of images and siteMetadata`,
  },
  {
    type: `input`,
    name: `starter-name`,
    message: `Name of the respective starter project (if already existing use the name after "LekoArts/" so "gatsby-starter-x")`,
  },
]

const themeActions = [
  {
    type: `add`,
    path: `themes/gatsby-theme-{{kebabCase name}}/.npmignore`,
    templateFile: `plop-templates/theme/.npmignore.hbs`,
  },
  {
    type: `add`,
    path: `themes/gatsby-theme-{{kebabCase name}}/gatsby-config.js`,
    templateFile: `plop-templates/theme/gatsby-config.js.hbs`,
  },
  {
    type: `add`,
    path: `themes/gatsby-theme-{{kebabCase name}}/index.js`,
    templateFile: `plop-templates/theme/index.js.hbs`,
  },
  {
    type: `add`,
    path: `themes/gatsby-theme-{{kebabCase name}}/package.json`,
    templateFile: `plop-templates/theme/package.json.hbs`,
  },
  {
    type: `add`,
    path: `themes/gatsby-theme-{{kebabCase name}}/README.md`,
    templateFile: `plop-templates/theme/README.md.hbs`,
  },
  {
    type: `add`,
    path: `themes/gatsby-theme-{{kebabCase name}}/src/components/seo.tsx`,
    templateFile: `plop-templates/theme/seo.tsx.hbs`,
  },
  {
    type: `add`,
    path: `themes/gatsby-theme-{{kebabCase name}}/src/gatsby-plugin-theme-ui/index.js`,
    templateFile: `plop-templates/theme/theme-ui.js.hbs`,
  },
  {
    type: `add`,
    path: `themes/gatsby-theme-{{kebabCase name}}/src/hooks/use-site-metadata.tsx`,
    templateFile: `plop-templates/theme/use-site-metadata.tsx.hbs`,
  },
]

const exampleActions = [
  {
    type: `add`,
    path: `examples/{{kebabCase name}}/gatsby-config.js`,
    templateFile: `plop-templates/example/gatsby-config.js.hbs`,
  },
  {
    type: `add`,
    path: `examples/{{kebabCase name}}/src/pages/index.js`,
    templateFile: `plop-templates/example/index-page.js.hbs`,
  },
  {
    type: `add`,
    path: `examples/{{kebabCase name}}/LICENSE`,
    templateFile: `plop-templates/example/LICENSE.hbs`,
  },
  {
    type: `add`,
    path: `examples/{{kebabCase name}}/.gitignore`,
    templateFile: `plop-templates/example/.gitignore.hbs`,
  },
  {
    type: `add`,
    path: `examples/{{kebabCase name}}/.github/FUNDING.yml`,
    templateFile: `plop-templates/example/FUNDING.yml.hbs`,
  },
  {
    type: `add`,
    path: `examples/{{kebabCase name}}/package.json`,
    templateFile: `plop-templates/example/package.json.hbs`,
  },
  {
    type: `add`,
    path: `examples/{{kebabCase name}}/README.md`,
    templateFile: `plop-templates/example/README.md.hbs`,
  },
  {
    type: `add`,
    path: `cypress/e2e/{{kebabCase name}}.ts`,
    templateFile: `plop-templates/cypress-test.ts.hbs`,
  },
]

module.exports = function (plop) {
  // Add a new theme + example to get going with theme development
  plop.setGenerator(`theme & example`, {
    description: `Use this template to get started with the next theme! It sets up a theme inside /themes, an example inside /examples and a Cypress test.`,
    prompts: [...prompt],
    actions: [...themeActions, ...exampleActions].filter(Boolean),
  })

  // Add a new theme
  plop.setGenerator(`theme`, {
    description: `Sets up a new theme`,
    prompts: [...prompt],
    actions: [...themeActions].filter(Boolean),
  })

  // Add a new example
  plop.setGenerator(`example`, {
    description: `Sets up a new example`,
    prompts: [...prompt],
    actions: [...exampleActions].filter(Boolean),
  })
}
