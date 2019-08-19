/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe(`gatsby-theme-status-dashboard`, () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange()
  })
  it(`should render the title`, () => {
    cy.get(`h1`).within(() => {
      cy.getByText(/status dashboard - lekoarts/i)
    })
  })
  it(`should render the description`, () => {
    cy.getByText(/showing the statuses of my netlify deploys & circleci tests./i)
  })
  it(`should render the info`, () => {
    cy.getByText(/circleci projects/i)
  })
  it(`should render the repository title`, () => {
    cy.getByText(/gatsby-themes-by-lekoarts/i)
  })
  it(`should render the circleci icon`, () => {
    cy.getByLabelText(/view gatsby-themes-by-lekoarts on circleci/i)
  })
  it(`should render the github icon`, () => {
    cy.getByLabelText(/view gatsby-themes-by-lekoarts source on github/i)
  })
  it(`should render the netlify status badge`, () => {
    cy.getByAltText(/netlify deploy status of gatsby-themes-by-lekoarts/i)
  })
  it(`should render the circleci status badge`, () => {
    cy.getByAltText(/circleci status of gatsby-themes-by-lekoarts/i)
  })
  it(`should render the footer`, () => {
    cy.getByText(/theme by lekoarts/i)
  })
})
