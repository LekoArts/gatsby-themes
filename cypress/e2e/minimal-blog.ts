/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe(`gatsby-theme-minimal-blog`, () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange()
  })
  it(`should have correct html[lang] attribute`, () => {
    cy.get(`html`).should(`have.attr`, `lang`, `en`)
  })
  it(`should have correct title in head`, () => {
    cy.title().should(`eq`, `Minimal Blog - Gatsby Theme`)
  })
  it(`should render the title`, () => {
    cy.get(`h1`).within(() => {
      cy.findByText(/Minimal Blog/i)
    })
  })
  it(`should link the about page`, () => {
    cy.get(`nav`).within(() => {
      cy.findByText(/About/i).click().waitForRouteChange().assertRoute(`/about/`)
      cy.title().should(`eq`, `About | Minimal Blog`)
    })
  })
  it(`should link the blog page`, () => {
    cy.get(`nav`).within(() => {
      cy.findByText(/Blog/i).click()
    })
    cy.waitForRouteChange()
      .assertRoute(`/blog/`)
      .get(`h1`)
      .within(() => {
        cy.findByText(/Blog/i)
      })
    cy.findByText(/With Images/i)
    cy.findByText(/View all tags/i)
    cy.title().should(`eq`, `Blog | Minimal Blog`)
  })
  it(`should have functioning tags in list items`, () => {
    cy.visit(`/blog`).waitForRouteChange()
    cy.findByText(/Tutorial/i)
      .click()
      .waitForRouteChange()
      .assertRoute(`/tags/tutorial/`)
      .get(`h1`)
      .within(() => {
        cy.findByText(/Tutorial/i)
      })
    cy.findByText(/With Images/i)
    cy.title().should(`eq`, `Tag: Tutorial | Minimal Blog`)
  })
  it(`should have functioning tags overview page`, () => {
    cy.visit(`/blog`).waitForRouteChange()
    cy.findByText(/View all tags/i)
      .click()
      .waitForRouteChange()
      .assertRoute(`/tags/`)
      .get(`h1`)
      .within(() => {
        cy.findByText(/Tags/i)
      })
    cy.findByText(/Tutorial/i)
    cy.title().should(`eq`, `Tags | Minimal Blog`)
  })
  it(`should have social media links`, () => {
    cy.get(`header`).within(() => {
      cy.findByText(/Twitter/i).should(`have.attr`, `href`, `https://twitter.com/lekoarts_de`)
    })
  })
  it(`should render the hero`, () => {
    cy.findByText(/I'm passionate about open source & teaching/i)
  })
  it(`should render the latest posts`, () => {
    cy.findByText(/Latest Posts/i)
    cy.findByText(/With Images/i)
    cy.findByText(/Read all posts/i)
  })
  it(`should render the bottom part`, () => {
    cy.findByText(/Projects/i)
    cy.findByText(/3D Art with Cinema4D/i).should(
      `have.attr`,
      `href`,
      `https://www.lekoarts.de/art/3d?utm_source=minimal-blog&utm_medium=Theme`
    )
  })
  it(`should render the footer`, () => {
    cy.findByLabelText(`Link to the theme's GitHub repository`).contains(`Theme`)
    cy.findByLabelText(`Link to the theme author's website`).contains(`LekoArts`)
  })
  it(`should link to individual blog post`, () => {
    cy.findByText(/Markdown Reference/i)
      .click()
      .waitForRouteChange()
      .assertRoute(`/markdown-reference/`)
      .get(`h1`)
      .within(() => {
        cy.findByText(/Markdown Reference/i)
      })
    cy.findByText(/12.09.2022/i)
    cy.get(`a[href='/tags/code/']`).contains(`Code`)
    cy.get(`a[href='/tags/markdown/']`).contains(`Markdown`)
    cy.findByText(/7 min read/i)
    cy.findByText(
      /What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself./i
    )
    cy.title().should(`eq`, `Markdown Reference | Minimal Blog`)
  })
  it(`should render blogpost with code components`, () => {
    cy.visit(`/code-block-examples`)
    cy.findByTestId(`code-block`).within(() => {
      cy.get(`.gatsby-highlight`).should(`have.attr`, `data-language`, `tsx`)
      cy.findByText(`src/components/blog.tsx`)
      cy.get(`pre`).should(`have.attr`, `data-linenumber`, `true`)
      cy.get(`pre`).then((el) => {
        const win = el[0].ownerDocument.defaultView
        const before = win?.getComputedStyle(el[0], `before`)
        const contentValue = before?.getPropertyValue(`content`)

        expect(contentValue).to.eq(`"tsx"`)
      })
      cy.get(`button`).should(`have.attr`, `name`, `src/components/blog.tsx: copy code to clipboard`)
      cy.get(`.token-line.highlight-line`).should(`have.css`, `border-left`, `4px solid rgb(2, 155, 206)`)
    })
  })
  it(`should accept custom slug in frontmatter and use that as URL`, () => {
    cy.visit(`/blog`).waitForRouteChange()
    cy.findByText(`Normal Text`).click().waitForRouteChange().assertRoute(`/normal-text-override/`)
    cy.title().should(`eq`, `Normal Text | Minimal Blog`)
  })
  it(`should render the light/dark mode toggle`, () => {
    cy.findByLabelText(/Activate Dark Mode/i)
  })
  it(`should have functioning dark mode toggle`, () => {
    cy.get(`html`)
      .should(`have.css`, `color`, `rgb(45, 55, 72)`)
      .should(`have.css`, `background`, `rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box`)
    cy.findByLabelText(/Activate Dark Mode/i).click()
    cy.get(`html`)
      .should(`have.css`, `color`, `rgb(203, 213, 224)`)
      .should(`have.css`, `background`, `rgb(26, 32, 44) none repeat scroll 0% 0% / auto padding-box border-box`)
  })
  it(`should accept canonical url in frontmatter and set in head`, () => {
    cy.visit(`/normal-text-override`).waitForRouteChange()
    cy.get(`head link[rel='canonical']`).should(`have.attr`, `href`, `https://blog-about-normal-text.com`)
  })
})
