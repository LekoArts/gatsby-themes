import { defineConfig } from "tsup"

export default defineConfig({
  name: `themes-utils`,
  entry: [`src/index.ts`],
  clean: true,
  dts: true,
  splitting: true,
  format: [`esm`],
  target: `node18`,
  minify: true,
  shims: true,
})
