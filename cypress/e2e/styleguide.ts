/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe(`gatsby-theme-styleguide`, () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange()
  })
  it(`should have correct html[lang] attribute`, () => {
    cy.get(`html`).should(`have.attr`, `lang`, `en`)
  })
  it(`should have correct title in head`, () => {
    cy.title().should(`eq`, `Theme UI Styleguide`)
  })
  it(`should render the title`, () => {
    cy.findByText(/Style Guide/i)
  })
  it(`should render the colors section`, () => {
    cy.findByText(/Colors/i)
    cy.findByText(/danger/i)
  })
  it(`should render the footer`, () => {
    cy.findByText(`@lekoarts/gatsby-theme-styleguide`).should(
      `have.attr`,
      `href`,
      `https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-styleguide`
    )
  })
})
