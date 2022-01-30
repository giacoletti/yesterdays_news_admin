// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add('authenticateJournalist', (user, password) => {
  cy.intercept("POST", "/api/auth/sign_in", {
    fixture: "authenticated_journalist_response.json",
  }).as("authenticateRequest");
  cy.intercept("GET", "/api/auth/validate_token", {
    fixture: "authenticated_journalist_response.json",
    headers: { uid: user, token: password },
  }).as("validateTokenRequest");
  cy.visit("/");
  cy.get("[data-cy=login-email-input]").type(user);
  cy.get("[data-cy=login-password-input]").type(password);
  cy.get("[data-cy=login-button]").click();
});
