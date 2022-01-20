describe("A user that visits our application wants to register an account", () => {
  before(() => {
    cy.visit("/");
    cy.get("[data-cy=signup-button]").click();
  });

  it("is expected to display account creation form", () => {
    cy.get("[data-cy=registration-header]")
      .should("contain.text", "Registration form")
      .and("be.visible");
  });

  it('is expected to display "Your name" label', () => {
    cy.get("[data-cy=name-label]")
      .should("contain.text", "Your name:")
      .and("be.visible");
  });

  it("is expected to display name input", () => {
    cy.get("[data-cy=name-input]").should("be.visible");
  });

  it('is expected to display "Email" label', () => {
    cy.get("[data-cy=email-label]")
      .should("contain.text", "Email:")
      .and("be.visible");
  });

  it("is expected to display email input", () => {
    cy.get("[data-cy=email-input]").should("be.visible");
  });

  it('is expected to display "Password" label', () => {
    cy.get("[data-cy=password-label]")
      .should("contain.text", "Password:")
      .and("be.visible");
  });

  it("is expected to display password input", () => {
    cy.get("[data-cy=password-input]").should("be.visible");
  });

  it('is expected to display "Confirm password" label', () => {
    cy.get("[data-cy=conf-password-label]")
      .should("contain.text", "Confirm password:")
      .and("be.visible");
  });

  it("is expected to display confirm password input", () => {
    cy.get("[data-cy=conf-password-input]").should("be.visible");
  });

  it("is expected to display a register button", () => {
    cy.get("[data-cy=register-button]")
      .should("be.visible")
      .and("contain.text", "Register");
  });
});
