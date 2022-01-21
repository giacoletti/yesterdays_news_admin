describe("Journalist attempts to use the platform", () => {
  describe('by logging in with valid credentials', () => {
    before(() => {
      cy.intercept("POST", "/api/auth/sign_in", {
        fixture: "authenticated_journalist_response.json",
      }).as('authenticateRequest');
      cy.intercept("GET", "/api/auth/validate_token", {
        fixture: "authenticated_journalist_response.json",
        headers: { uid: "thomas@craft.com", token: "12344556789" },
      }).as('validateTokenRequest');
      cy.visit("/");

      // let's log in the user by clicking on CTA "Log in"
      cy.get('[data-cy=authenticate]').contains('Log in').click()
      cy.get("[data-cy=email-field]").type("thomas@craft.com");
      cy.get("[data-cy=password-field]").type("password");
      cy.get("[data-cy=login-button]").click();

    });

    it('is expected to make an authentication request to API', () => {
      cy.wait('@authenticateRequest').its('response.statusCode').should('eq', 200);
    });

    it('is expected to display a welcome message', () => {
      cy.get("[data-cy=flash-message]").should("contain.text", "Welcome Thomas Ochman!");
    });
    
  });

  describe.only('but fails to authenticate', () => {
    before(() => {
      cy.intercept("POST", "/api/auth/sign_in", {
        body: { success: false, errors: ["Invalid login credentials. Please try again."]},
        statusCode: 401
      }).as('authenticateRequest');
      cy.visit("/");
      // cy.window().its('localStorage').invoke('setItem','foo','bar')

       // let's log in the user by clicking on CTA "Log in"
      cy.get('[data-cy=authenticate]').contains('Log in').click()
      cy.get("[data-cy=email-field]").type("thomas@craft.com");
      cy.get("[data-cy=password-field]").type("wrong");
      cy.get("[data-cy=login-button]").click();
    });

    it('is expected to display an error message', () => {
      cy.get("[data-cy=flash-message]").should("contain.text", "Invalid login credentials. Please try again.");
    });
  });
});
