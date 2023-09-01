import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:8000`,
    specPattern: `cypress/e2e/*.ts`,
    viewportHeight: 900,
    viewportWidth: 1440,
    chromeWebSecurity: false,
    projectId: `546tyx`,
    video: false,
  },
})
