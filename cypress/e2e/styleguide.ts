/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe(`gatsby-theme-styleguide`, () => {
  it(`should render the title`, () => {
    cy.visit(`/`)
      .assertRoute(`/`)
      .findByText(/Style Guide/i)
  })
  it(`should render the colors section`, () => {
    cy.visit(`/`)
      .findByText(/Colors/i)
      .findByText(/danger/i)
  })
  it(`should render the footer`, () => {
    cy.visit(`/`)
      .findByText(`@lekoarts/gatsby-theme-styleguide`)
      .should(
        `have.attr`,
        `href`,
        `https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-styleguide`
      )
  })
})
