/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress/typings" />

describe(`gatsby-theme-emma`, () => {
  it(`loads index page correctly`, () => {
    cy.visit(`/`).assertRoute(`/`)
  })
})
