/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
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