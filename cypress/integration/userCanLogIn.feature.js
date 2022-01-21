describe("A journalist is able to login to article creation form", () => {
  before(() => {
    cy.intercept("POST", "api/auth/sign_in", {
      fixture: "login_successful.json",
    }).as('authenticatedResponse');
    cy.intercept("GET", "/api/auth/validate_token", {
      fixture: "authenticated_journalist_response.json",
      headers: { uid: "johnskoglung@test.com", token: "12344556789" },
    });
    cy.visit("/");
    cy.get("[data-cy=login-email-input]").type("johnskoglung@test.com");
    cy.get("[data-cy=login-password-input]").type("1234567890");
    cy.get("[data-cy=login-button]").click();
  });

  it('is expected to make an authentication request to API', () => {
    cy.wait('@authenticatedResponse').its('response.statusCode').should('eq', 200);
  });

  it('is expected to display a welcome message', () => {
    cy.get("[data-cy=flash-message]").should("contain.text", "Welcome John Skoglund!");
  });
});
