/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe(`gatsby-theme-graphql-playground`, () => {
  it(`should work`, () => {
    cy.visit(`/`).assertRoute(`/`)
  })
})
