describe("Journalist can visit the home view", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected to display Admin page header", () => {
    cy.get("[data-cy=home-view-header]").should(
      "contain.text",
      "Welcome to the admin page"
    );
  });

  it('is expected to display a "Email" label', () => {
    cy.get("[data-cy=login-email-label]")
      .should("be.visible")
      .and("contain.text", "Email:");
  });

  it("is expected to display Email input field", () => {
    cy.get("[data-cy=login-email-input]").should("be.visible");
  });

  it('is expected to display a "Password" label', () => {
    cy.get("[data-cy=login-password-label]")
      .should("be.visible")
      .and("contain.text", "Password:");
  });

  it("is expected to display Password input field", () => {
    cy.get("[data-cy=login-password-input]").should("be.visible");
  });

  it("is expected to display Login button", () => {
    cy.get("[data-cy=login-button]")
      .should("contain.text", "Login")
      .and("be.visible");
  });
});
