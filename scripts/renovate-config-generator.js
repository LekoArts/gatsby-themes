const path = require(`path`)
const glob = require(`glob`)
const fs = require(`fs-extra`)

const ROOT_DIR = path.join(__dirname, `..`)
const packageRules = new Map()

const globalPackageRules = [
  {
    groupName: `monorepo`,
    commitMessageTopic: `monorepo`,
    groupSlug: `monorepo`,
    matchPaths: [`+(package.json)`],
    matchUpdateTypes: [`patch`, `minor`],
    matchDepTypes: [`devDependencies`],
  },
  {
    groupName: `formatting & linting`,
    commitMessageTopic: `Formatting & linting`,
    matchPaths: [`+(package.json)`],
    matchPackageNames: [`eslint`, `prettier`],
    matchPackagePatterns: [`^eslint-`],
    matchUpdateTypes: [`major`, `minor`, `patch`],
    matchDepTypes: [`dependencies`, `devDependencies`],
    automerge: true,
  },
  {
    groupName: `typescript`,
    matchPaths: [`+(package.json)`],
    matchPackageNames: [`typescript`],
    matchPackagePatterns: [`^@typescript-eslint/`, `^@types`],
    matchUpdateTypes: [`major`, `minor`, `patch`],
    matchDepTypes: [`devDependencies`],
    automerge: true,
  },
  {
    groupName: `testing library`,
    matchPaths: [`+(package.json)`],
    matchPackagePatterns: [`^@testing-library/`],
    matchUpdateTypes: [`major`, `minor`, `patch`],
    matchDepTypes: [`devDependencies`],
  },
  {
    groupName: `theme-ui`,
    commitMessageTopic: `theme-ui`,
    matchPaths: [`themes/**`, `examples/**`],
    matchPackageNames: [
      `@theme-ui/color`,
      `@theme-ui/components`,
      `@theme-ui/presets`,
      `@theme-ui/prism`,
      `@theme-ui/sidenav`,
      `@theme-ui/typography`,
      `gatsby-plugin-theme-ui`,
      `theme-ui`,
    ],
    matchUpdateTypes: [`major`, `minor`, `patch`],
    matchDepTypes: [`dependencies`, `devDependencies`],
    dependencyDashboardApproval: true,
  },
]

const globalExcludePackages = []
const globalExcludePackagePatterns = []

globalPackageRules.forEach((group) => {
  if (group.matchPackagePatterns) {
    globalExcludePackagePatterns.push(...group.matchPackagePatterns)
  }
  if (group.matchPackageNames) {
    globalExcludePackages.push(...group.matchPackageNames)
  }
})

const defaultPackageRules = [
  {
    groupName: `starters`,
    commitMessageTopic: `starters`,
    groupSlug: `starters-minor`,
    matchPaths: [`examples/**`],
    matchUpdateTypes: [`patch`, `minor`],
    matchDepTypes: [`dependencies`, `devDependencies`],
  },
  {
    groupName: `starters`,
    commitMessageTopic: `starters`,
    groupSlug: `starters-major`,
    matchPaths: [`examples/**`],
    matchUpdateTypes: [`major`],
    matchDepTypes: [`dependencies`, `devDependencies`],
  },
  {
    groupName: `www`,
    commitMessageTopic: `www`,
    groupSlug: `www-minor`,
    matchPaths: [`www/package.json`],
    matchUpdateTypes: [`patch`, `minor`],
    matchDepTypes: [`dependencies`, `devDependencies`],
    automerge: true,
    additionalBranchPrefix: `www-`,
  },
  {
    groupName: `www`,
    commitMessageTopic: `www`,
    groupSlug: `www-major`,
    matchPaths: [`www/package.json`],
    matchUpdateTypes: [`major`],
    matchDepTypes: [`dependencies`, `devDependencies`],
    additionalBranchPrefix: `www-`,
  },
  {
    matchDepTypes: [`engines`, `@types/node`],
    enabled: false,
  },
  ...globalPackageRules,
]

const themesPackages = glob.sync(`themes/*/package.json`).map((file) => file.match(/themes\/([^/]+)/)[1])

themesPackages.forEach((pkg) => {
  const packageRule = [
    {
      matchPaths: [`themes/${pkg}/package.json`],
      matchDepTypes: [`dependencies`],
      matchUpdateTypes: [`patch`, `minor`],
      groupName: `minor and patch dependencies for ${pkg}`,
      groupSlug: `${pkg}-prod-minor`,
      excludePackageNames: globalExcludePackages,
      excludePackagePatterns: globalExcludePackagePatterns,
      commitMessageSuffix: `{{#unless groupName}} for ${pkg}{{/unless}}`,
    },
    {
      matchPaths: [`themes/${pkg}/package.json`],
      matchDepTypes: [`dependencies`],
      matchUpdateTypes: [`major`],
      groupName: `major dependencies for ${pkg}`,
      groupSlug: `${pkg}-prod-major`,
      excludePackageNames: globalExcludePackages,
      excludePackagePatterns: globalExcludePackagePatterns,
      commitMessageSuffix: `{{#unless groupName}} for ${pkg}{{/unless}}`,
    },
  ]

  packageRules.set(pkg, packageRule)
})

const renovateConfig = {
  extends: [
    `config:base`,
    `:disablePeerDependencies`,
    `:ignoreModulesAndTests`,
    `:separateMajorReleases`,
    `:combinePatchMinorReleases`,
  ],
  dependencyDashboard: true,
  labels: [`renovate`],
  prHourlyLimit: 4,
  prConcurrentLimit: 16,
  rangeStrategy: `bump`,
  bumpVersion: null,
  semanticCommits: `enabled`,
  timezone: `GMT`,
  schedule: [`before 10am on the first day of the month`],
  automerge: false,
  ignoreDeps: [`react`, `react-dom`],
  ignorePaths: [`**/node_modules/**`, `.nvmrc`],
  postUpdateOptions: [`yarnDedupeHighest`],
  updateNotScheduled: false,
  packageRules: defaultPackageRules.concat(Array.from(packageRules.values()).flat()),
}

fs.writeJSONSync(path.join(ROOT_DIR, `renovate.json5`), renovateConfig, {
  spaces: 2,
})
