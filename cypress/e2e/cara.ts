/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe(`gatsby-theme-cara`, () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange()
  })
  it(`should render hero content`, () => {
    cy.findByText(/hi, i'm jane doe/i)
  })
  it(`should render project content`, () => {
    cy.findByText(/freiheit/i)
    cy.findByText(/this project is my entry to adobe's #challengeyourperspective contest./i)
  })
  it(`should render project cards with links`, () => {
    cy.findByText(/freiheit/i)
      .parent()
      .should(`have.attr`, `href`, `https://www.behance.net/gallery/58937147/Freiheit`)
  })
  it(`should render about content`, () => {
    cy.findByText(/winky face./i)
  })
  it(`should render contact content`, () => {
    cy.findByText(/Dribbble/i)
  })
  it(`should render the light/dark mode toggle`, () => {
    cy.findByLabelText(/toggle dark mode/i)
  })
  it(`should have functioning dark mode toggle`, () => {
    cy.get(`body`)
      .should(`have.css`, `color`, `rgb(226, 232, 240)`)
      .should(`have.css`, `background`, `rgb(20, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box`)
    cy.findByLabelText(/toggle dark mode/i).click()
    cy.get(`body`)
      .should(`have.css`, `color`, `rgb(45, 55, 72)`)
      .should(`have.css`, `background`, `rgb(247, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box`)
  })
  it(`should render the footer`, () => {
    cy.findByLabelText(`Link to the theme's GitHub repository`).contains(`Theme`)
    cy.findByLabelText(`Link to the theme author's website`).contains(`LekoArts`)
  })
})
