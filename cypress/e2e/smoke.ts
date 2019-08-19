/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe(`app`, () => {
  it(`should work`, () => {
    cy.visit(`/`).assertRoute(`/`)
  })
})
