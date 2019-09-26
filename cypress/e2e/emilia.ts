/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe(`gatsby-theme-emilia`, () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange()
  })
  it(`should render the name`, () => {
    cy.get(`h1`).within(() => {
      cy.findByText(/lekoarts/i)
    })
  })
  it(`should render the location`, () => {
    cy.findByText(/germany/i)
  })
  it(`should render the social links in the header`, () => {
    cy.findByTestId(`social-header`).within(() => {
      cy.findByText(/Twitter/i)
        .should(`have.attr`, `href`, `https://twitter.com/lekoarts_de`)
        .findByText(/Instagram/i)
        .should(`have.attr`, `href`, `https://www.instagram.com/lekoarts.de/`)
    })
  })
  it(`should render about me`, () => {
    cy.findByText(/about me/i).findByText(/Boggarts lavender robes/i)
  })
  it(`should have functioning theme toggle`, () => {
    cy.findByTestId(`theme-root`)
      .should(`have.css`, `color`, `rgb(45, 55, 72)`)
      .should(`have.css`, `background`, `rgb(247, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box`)
      .findByLabelText(/activate dark mode/i)
      .click()
      .findByTestId(`theme-root`)
      .should(`have.css`, `color`, `rgb(203, 213, 224)`)
      .should(`have.css`, `background`, `rgb(26, 32, 44) none repeat scroll 0% 0% / auto padding-box border-box`)
      .findByLabelText(/activate light mode/i)
  })
  it(`should render the theme footer`, () => {
    cy.findByLabelText(`Link to the theme's GitHub repository`)
      .contains(`Theme`)
      .findByLabelText(`Link to the theme author's website`)
      .contains(`LekoArts`)
  })
  it(`should link and display the project page`, () => {
    cy.findByLabelText(/visit emilia project page/i)
      .click()
      .waitForRouteChange()
      .assertRoute(`/emilia`)
      .get(`h1`)
      .within(() => {
        cy.findByText(/emilia/i)
      })
      .findByText(/10.09.2019/i)
      .findByText(/Neon, Lights/i)
      .findByAltText(/sean-foley-0JD7kvxAq0Y-unsplash/i)
      .findByText(/more projects/i)
      .findByLabelText(/visit jodie project page/i)
      .findByText(/About Me/i)
  })
})
