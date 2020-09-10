/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe(`gatsby-theme-emma`, () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange()
  })
  it(`should render the site title`, () => {
    cy.findByLabelText(/emma, back to homepage/i)
  })
  it(`should render additional page in navigation`, () => {
    cy.findByText(/about/i).click().waitForRouteChange().assertRoute(`/about`)
  })
  it(`should render the light/dark mode toggle`, () => {
    cy.findByLabelText(/toggle dark mode/i)
  })
  it(`should have functioning theme toggle`, () => {
    cy.findByLabelText(/toggle dark mode/i).then((button) => {
      if (button.text().includes(`Light`)) {
        cy.findByLabelText(/toggle dark mode/i).click()
      }
    })
    cy.get(`body`)
      .should(`have.css`, `color`, `rgb(45, 55, 72)`)
      .should(`have.css`, `background`, `rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box`)
    cy.findByLabelText(/toggle dark mode/i).click()
    cy.get(`body`)
      .should(`have.css`, `color`, `rgb(255, 255, 255)`)
      .should(`have.css`, `background`, `rgb(45, 55, 72) none repeat scroll 0% 0% / auto padding-box border-box`)
  })
  it(`should render social media icons in header`, () => {
    cy.findByLabelText(/instagram/i)
    cy.findByLabelText(/dribbble/i)
  })
  it(`should render the footer`, () => {
    cy.findByLabelText(`Link to the theme's GitHub repository`).contains(`Theme`)
    cy.findByLabelText(`Link to the theme author's website`).contains(`LekoArts`)
  })
  it(`should have item with all information`, () => {
    cy.findByLabelText(/view detail page of hermione granger/i).within(() => {
      cy.findByText(/hogwarts/i)
      cy.findByText(/witchcraft/i)
    })
  })
  it(`should link and display the project page`, () => {
    cy.findByLabelText(/view detail page of hermione granger/i)
      .click()
      .waitForRouteChange()
      .assertRoute(`/hermione-granger`)
      .get(`h1`)
      .within(() => {
        cy.findByText(/hermione granger/i)
      })
    cy.findByText(/hogwarts/i)
    cy.findByText(/10.06.2019/i)
    cy.findByText(/witchcraft/i)
  })
  it(`should accept custom slug in frontmatter and use that as URL`, () => {
    cy.findByLabelText(/View detail page of Proprius: steady, individual, personal/i)
      .click()
      .assertRoute(`/proprius`)
  })
  it(`should link and display the about page`, () => {
    cy.findByText(/about/i).click().waitForRouteChange().assertRoute(`/about`)
  })
})
