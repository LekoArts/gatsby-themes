/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe(`gatsby-theme-cara`, () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange()
  })
  it(`should render hero content`, () => {
    cy.getByText(/hi, i'm jane doe/i)
  })
  it(`should render project content`, () => {
    cy.getByText(/freiheit/i).getByText(/this project is my entry to adobe's #challengeyourperspective contest./i)
  })
  it(`should render project cards with links`, () => {
    cy.getByText(/freiheit/i)
      .parent()
      .should(`have.attr`, `href`, `https://www.behance.net/gallery/58937147/Freiheit`)
  })
  it(`should render about content`, () => {
    cy.getByText(/winky face./i)
  })
  it(`should render contact content`, () => {
    cy.getByText(/Dribbble/i)
  })
  it(`should render the light/dark mode toggle`, () => {
    cy.getByLabelText(/toggle dark mode/i)
  })
  it(`should render the footer`, () => {
    cy.getByLabelText(`Link to the theme's GitHub repository`)
      .contains(`Theme`)
      .getByLabelText(`Link to the theme author's website`)
      .contains(`LekoArts`)
  })
})
