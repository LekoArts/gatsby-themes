/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress/typings" />

describe(`gatsby-theme-emilia`, () => {
  it(`should work`, () => {
    cy.visit(`/`).assertRoute(`/`)
  })
})
