/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe(`gatsby-theme-graphql-playground`, () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange()
  })
  it(`should have correct html[lang] attribute`, () => {
    cy.get(`html`).should(`have.attr`, `lang`, `en`)
  })
  it(`should have correct title in head`, () => {
    cy.title().should(`eq`, `GraphQL Playground - @lekoarts/gatsby-theme-graphql-playground`)
  })
  it(`should contain the title`, () => {
    cy.findByTestId(`Title`).contains(`GraphQL Playground`)
  })
  it(`should render the homepage content`, () => {
    cy.get(`h1`).within(() => {
      cy.findByText(/GraphQL Playground/i)
    })
    cy.findByText(
      /This playground will walk you through a series of GraphQL queries, each designed to demonstrate a particular feature of GraphQL./i
    )
  })
  it(`should render the navigation and have a functioning link`, () => {
    cy.findByText(/Basics/i)
    cy.findByText(/Get the site title/i)
      .click()
      .waitForRouteChange()
      .assertRoute(`/get-the-site-title/`)
    cy.findByTestId(`item-title`)
    cy.findByText(/Start with the basics, pulling up the site/i)
    cy.findByTestId(/iFrame-Get the Site Title/i)
    cy.title().should(`eq`, `Get the Site Title | GraphQL Playground`)
  })
  it(`should have functioning theme toggle`, () => {
    cy.get(`html`)
      .should(`have.css`, `color`, `rgb(45, 55, 72)`)
      .should(`have.css`, `background`, `rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box`)
    cy.findByLabelText(/activate dark mode/i).click()
    cy.get(`html`)
      .should(`have.css`, `color`, `rgb(237, 242, 247)`)
      .should(`have.css`, `background`, `rgb(45, 55, 72) none repeat scroll 0% 0% / auto padding-box border-box`)
    cy.findByLabelText(/activate light mode/i)
  })
})
