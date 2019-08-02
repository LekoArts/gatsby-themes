/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress/typings" />

describe(`gatsby-theme-emma`, () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange()
  })
  it(`should render the site title`, () => {
    cy.getByLabelText(/emma, back to homepage/i)
  })
  it(`should render additional page in navigation`, () => {
    cy.getByText(/about/i)
  })
  it(`should render the light/dark mode toggle`, () => {
    cy.getByLabelText(/toggle dark mode/i)
  })
  it(`should render social media icons in header`, () => {
    cy.getByLabelText(/instagram/i).getByLabelText(/dribbble/i)
  })
  it(`should render the footer`, () => {
    cy.getByText(/theme by lekoarts/i)
  })
  it(`should have item with all information`, () => {
    cy.getByLabelText(/view detail page of hermione granger/i).within(() => {
      cy.getByText(/hogwarts/i).getByText(/witchcraft/i)
    })
  })
  it(`should link and display the project page`, () => {
    cy.getByLabelText(/view detail page of hermione granger/i)
      .click()
      .waitForRouteChange()
      .assertRoute(`/hermione-granger`)
      .get(`h1`)
      .within(() => {
        cy.getByText(/hermione granger/i)
      })
      .getByText(/hogwarts/i)
      .getByText(/10.06.2019/i)
      .getByText(/witchcraft/i)
  })
  it(`should link and display the about page`, () => {
    cy.getByText(/about/i)
      .click()
      .waitForRouteChange()
      .assertRoute(`/about`)
  })
})
