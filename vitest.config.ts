import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    setupFiles: `./vitest-setup.ts`,
    include: [`themes/**/__tests__/*.{ts,tsx}`, `packages/**/__tests__/*.{ts,tsx}`],
    coverage: {
      reporter: [`text`, `json`, `html`],
    },
  },
})
