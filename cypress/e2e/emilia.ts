/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe(`gatsby-theme-emilia`, () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange()
  })
  it(`should render the name`, () => {
    cy.get(`h1`).within(() => {
      cy.getByText(/lekoarts/i)
    })
  })
  it(`should render the location`, () => {
    cy.getByText(/germany/i)
  })
  it(`should render the social links in the header`, () => {
    cy.getByTestId(`social-header`).within(() => {
      cy.getByText(/Twitter/i)
        .should(`have.attr`, `href`, `https://twitter.com/lekoarts_de`)
        .getByText(/Instagram/i)
        .should(`have.attr`, `href`, `https://www.instagram.com/lekoarts.de/`)
    })
  })
  it(`should render about me`, () => {
    cy.getByText(/about me/i).getByText(/Boggarts lavender robes/i)
  })
  it(`should render the theme footer`, () => {
    cy.getByLabelText(`Link to the theme's GitHub repository`)
      .contains(`Theme`)
      .getByLabelText(`Link to the theme author's website`)
      .contains(`LekoArts`)
  })
  it(`should link and display the project page`, () => {
    cy.getByLabelText(/visit emilia project page/i)
      .click()
      .waitForRouteChange()
      .assertRoute(`/emilia`)
      .get(`h1`)
      .within(() => {
        cy.getByText(/emilia/i)
      })
      .getByText(/10.09.2019/i)
      .getByText(/Neon, Lights/i)
      .getByAltText(/sean-foley-0JD7kvxAq0Y-unsplash/i)
      .getByText(/more projects/i)
      .getByLabelText(/visit jodie project page/i)
      .getByText(/About Me/i)
  })
})
