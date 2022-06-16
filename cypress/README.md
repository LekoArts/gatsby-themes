# Cypress

The Gatsby sites inside `examples` should be tested to ensure functionality of the `themes`. When adding a new theme/example in a PR also a test should be added.

## How to write tests

1. Add a file with the name of the example (from `name` in `package.json`) inside `e2e`
2. Write your tests. Ensure that every integral part of the theme is tested (it renders, it has its functionality)
   - When possible also test the `themeOptions`
3. Add the name to the `matrix` in the GitHub Action

```yaml
strategy:
  matrix:
    containers: [names-go-here]
```
