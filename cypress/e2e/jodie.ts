/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe(`gatsby-theme-jodie`, () => {
  it(`should work`, () => {
    cy.visit(`/`).assertRoute(`/`)
  })
})
