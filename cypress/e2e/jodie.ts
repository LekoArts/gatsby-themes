/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe(`gatsby-theme-jodie`, () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange()
  })

  it(`should have functioning navigation`, () => {
    cy.get(`nav`).within(() => {
      cy.findByText(/projects/i)
        .click()
        .waitForRouteChange()
    })
    cy.assertRoute(`/projects`)
    cy.findByTestId(`page-title`)
    cy.should(`have.text`, `Projects`)
    cy.get(`nav`).within(() => {
      cy.findByText(/instagram/i)
        .click()
        .waitForRouteChange()
    })
    cy.assertRoute(`/instagram`)
    cy.findByTestId(`page-title`)
    cy.should(`have.text`, `Instagram`)
    cy.get(`nav`).within(() => {
      cy.findByText(/about/i).click().waitForRouteChange()
    })
    cy.assertRoute(`/about`)
    cy.get(`h1`).first()
    cy.should(`have.text`, `About`)
  })

  it(`should have existing footer`, () => {
    cy.get(`footer`).within(() => {
      cy.findByText(/jodie/i)
      cy.findByText(/lekoarts/i)
    })
  })

  it(`should link to a custom page on index page`, () => {
    cy.findByTestId(`About`).click().waitForRouteChange().assertRoute(`/about`)
  })

  it(`should have a complete project page`, () => {
    cy.findByTestId(`Color`).click().waitForRouteChange().assertRoute(`/color-in-all-its-glory`)
    cy.get(`h1`).should(`have.text`, `Color - In all its glory`)
    cy.findByText(/street art/i)
    cy.findByText(/Very colorful./i)
    cy.findByAltText(/projects-color-001/i)
  })

  it(`should have items on projects page`, () => {
    cy.visit(`/projects`).waitForRouteChange()
    cy.findByTestId(`Extreme Neon`).click().waitForRouteChange().assertRoute(`/extreme-neon-what-is-this-trend-about`)
  })

  it(`should accept "custom" flag in frontmatter of pages`, () => {
    cy.visit(`/instagram`).waitForRouteChange()
    cy.findByTestId(`page-content`).should(`have.css`, `margin`, `0px`).should(`have.css`, `padding`, `0px`)
  })

  it(`should use the "color" flag in frontmatter`, () => {
    cy.visit(`/instagram`).waitForRouteChange()
    cy.findByTestId(`sidebar`).should(
      `have.css`,
      `background`,
      `rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box`
    )
    cy.visit(`/breakfast`).waitForRouteChange()
    cy.findByTestId(`sidebar`).should(
      `have.css`,
      `background`,
      `rgb(130, 114, 107) none repeat scroll 0% 0% / auto padding-box border-box`
    )
  })
})
