/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe(`gatsby-theme-cara`, () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange()
  })
  it(`should render hero content`, () => {
    cy.findByText(/hi, i'm your name/i)
  })
  it(`should render project content`, () => {
    cy.findByText(/tips & tricks for gatsby/i)
    cy.findByText(
      /A collection of short, but useful quick tips shared by me and the community about Gatsby. From GraphQL over local development to deployment./i
    )
  })
  it(`should render project cards with links`, () => {
    cy.findByText(/tips & tricks for gatsby/i)
      .parent()
      .should(
        `have.attr`,
        `href`,
        `https://www.lekoarts.de/gatsby/tips-and-tricks-for-gatsby?utm_source=cara&utm_medium=Theme`
      )
  })
  it(`should render about content`, () => {
    cy.findByText(/winky face./i)
  })
  it(`should render contact content`, () => {
    cy.findByText(/LinkedIn/i)
  })
  it(`should render the light/dark mode toggle`, () => {
    cy.findByLabelText(/toggle dark mode/i)
  })
  it(`should have functioning dark mode toggle`, () => {
    cy.findByLabelText(/toggle dark mode/i).then((button) => {
      if (button.text().includes(`Dark`)) {
        cy.findByLabelText(/toggle dark mode/i).click()
      }
    })
    cy.get(`html`)
      .should(`have.css`, `color`, `rgb(226, 232, 240)`)
      .should(`have.css`, `background`, `rgb(20, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box`)
    cy.findByLabelText(/toggle dark mode/i).click()
    cy.get(`html`)
      .should(`have.css`, `color`, `rgb(45, 55, 72)`)
      .should(`have.css`, `background`, `rgb(247, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box`)
  })
  it(`should render the footer`, () => {
    cy.findByLabelText(`Link to the theme's GitHub repository`).contains(`Theme`)
    cy.findByLabelText(`Link to the theme author's website`).contains(`LekoArts`)
  })
})
