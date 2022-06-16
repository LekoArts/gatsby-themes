/* eslint-disable @typescript-eslint/no-namespace */
import "@testing-library/cypress/add-commands"
import "gatsby-cypress/commands"

/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Assert the current URL
       * @param route
       * @example cy.assertRoute('/page-2')
       */
      assertRoute(route: string): Chainable<any>

      /**
       * Waits for Gatsby to finish the route change, in order to ensure event handlers are properly setup
       */
      waitForRouteChange(): Chainable<any>
    }
  }
}

Cypress.Commands.add(`assertRoute`, (route) => {
  cy.url().should(`equal`, `${window.location.origin}${route}`)
})
