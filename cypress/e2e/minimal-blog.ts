/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe(`gatsby-theme-minimal-blog`, () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange()
  })
  it(`should render the title`, () => {
    cy.get(`h1`).within(() => {
      cy.findByText(/Lupin/i)
    })
  })
  it(`should link the about page`, () => {
    cy.get(`nav`).within(() => {
      cy.findByText(/About/i).click().waitForRouteChange().assertRoute(`/about`)
    })
  })
  it(`should link the blog page`, () => {
    cy.get(`nav`).within(() => {
      cy.findByText(/Blog/i).click()
    })
    cy.waitForRouteChange()
      .assertRoute(`/blog`)
      .get(`h2`)
      .within(() => {
        cy.findByText(/Blog/i)
      })
      .findByText(/Fantastic Beasts and Where to Find Them/i)
      .findByText(/View all tags/i)
  })
  it(`should have functioning tags in list items`, () => {
    cy.visit(`/blog`)
      .waitForRouteChange()
      .findByText(/Tutorial/i)
      .click()
      .waitForRouteChange()
      .assertRoute(`/tags/tutorial`)
      .get(`h2`)
      .within(() => {
        cy.findByText(/Tutorial/i)
      })
      .findByText(/Introduction to "Defence against the Dark Arts"/i)
  })
  it(`should have functioning tags overview page`, () => {
    cy.visit(`/blog`)
      .waitForRouteChange()
      .findByText(/View all tags/i)
      .click()
      .waitForRouteChange()
      .assertRoute(`/tags`)
      .get(`h2`)
      .within(() => {
        cy.findByText(/Tags/i)
      })
      .findByText(/Novel/i)
  })
  it(`should have social media links`, () => {
    cy.get(`header`).within(() => {
      cy.findByText(/Twitter/i).should(`have.attr`, `href`, `https://twitter.com/lekoarts_de`)
    })
  })
  it(`should render the hero`, () => {
    cy.findByText(/Those nasty Dementors/i)
  })
  it(`should render the latest posts`, () => {
    cy.findByText(/Latest Posts/i)
      .findByText(/Fantastic Beasts and Where to Find Them/i)
      .findByText(/Read all posts/i)
  })
  it(`should render the bottom part`, () => {
    cy.findByText(/Projects/i)
      .findByText(/Instagram Project "Proprius"/i)
      .should(`have.attr`, `href`, `https://www.lekoarts.de/en/projects/private-instagram-project-proprius`)
  })
  it(`should render the footer`, () => {
    cy.findByLabelText(`Link to the theme's GitHub repository`)
      .contains(`Theme`)
      .findByLabelText(`Link to the theme author's website`)
      .contains(`LekoArts`)
  })
  it(`should link to individual blog post`, () => {
    cy.findByText(/Introduction to "Defence against the Dark Arts"/i)
      .click()
      .waitForRouteChange()
      .assertRoute(`/introduction-to-defence-against-the-dark-arts`)
      .get(`h2`)
      .within(() => {
        cy.findByText(/Introduction to "Defence against the Dark Arts"/i)
      })
      .findByText(/07.11.2019/i)
      .findByText(/Tutorial/i)
      .findByText(/2 min read/i)
      .findByText(
        /Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog./i
      )
  })
  it(`should render blogpost with code component`, () => {
    cy.visit(`/fantastic-beasts-and-where-to-find-them`)
      .assertRoute(`/fantastic-beasts-and-where-to-find-them`)
      .waitForRouteChange()
      .get(`h2`)
      .within(() => {
        cy.findByText(/Fantastic Beasts and Where to Find Them/i)
      })
      .findByTitle(`Spotify`)
      .get(`[data-name="live-editor"]`)
      .should(`exist`)
      .get(`[data-language="jsx"]`)
      .should(`exist`)
  })
  it(`should accept custom slug in frontmatter and use that as URL`, () => {
    cy.findByText(
      `Curses and Counter-curses (Bewitch Your Friends and Befuddle Your Enemies with the Latest Revenges: Hair Loss, Jelly-Legs, Tongue-Tying, and Much, Much More)`
    )
      .click()
      .waitForRouteChange()
      .assertRoute(`/curses-counter-curses-and-more`)
  })
  it(`should render the light/dark mode toggle`, () => {
    cy.findByLabelText(/Activate Dark Mode/i)
  })
  it(`should have functioning dark mode toggle`, () => {
    cy.findByTestId(`theme-root`)
      .should(`have.css`, `color`, `rgb(45, 55, 72)`)
      .should(`have.css`, `background`, `rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box`)
      .findByLabelText(/Activate Dark Mode/i)
      .click()
      .findByTestId(`theme-root`)
      .should(`have.css`, `color`, `rgb(203, 213, 224)`)
      .should(`have.css`, `background`, `rgb(26, 32, 44) none repeat scroll 0% 0% / auto padding-box border-box`)
  })
})
