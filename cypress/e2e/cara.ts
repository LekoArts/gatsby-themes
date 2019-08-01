/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress/typings" />

describe(`gatsby-theme-cara`, () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange()
  })
  it(`should render the light/dark mode toggle`, () => {
    cy.getByLabelText(/toggle dark mode/i)
  })
  it(`should render the footer`, () => {
    cy.getByText(/theme by lekoarts/i)
  })
})
