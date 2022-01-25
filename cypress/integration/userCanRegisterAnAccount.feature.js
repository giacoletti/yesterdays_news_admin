describe("A user is able to register an account as journalist", () => {
  describe("when the account has been created", () => {
    before(() => {
      cy.intercept("POST", "api/auth", {
        fixture: "registration_successful_response.json",
      });
      cy.visit("/");
      cy.get("[data-cy=signup-button]").click();
      cy.get("[data-cy=name-input]").type("John Skoglund");
      cy.get("[data-cy=email-input]").type("johnskoglung@test.com");
      cy.get("[data-cy=password-input]").type("1234567890");
      cy.get("[data-cy=conf-password-input]").type("1234567890");
      cy.get("[data-cy=register-button]").click();
    });

    it('is expected to display "Your name" label', () => {
      cy.get("[data-cy=name-label]")
        .should("contain.text", "Your name:")
        .and("be.visible");
    });

    it('is expected to display "Email" label', () => {
      cy.get("[data-cy=email-label]")
        .should("contain.text", "Email:")
        .and("be.visible");
    });

    it('is expected to display "Password" label', () => {
      cy.get("[data-cy=password-label]")
        .should("contain.text", "Password:")
        .and("be.visible");
    });

    it('is expected to display "Confirm password" label', () => {
      cy.get("[data-cy=conf-password-label]")
        .should("contain.text", "Confirm password:")
        .and("be.visible");
    });

    it("is expected to display a register button", () => {
      cy.get("[data-cy=register-button]")
        .should("be.visible")
        .and("contain.text", "Register");
    });

    it("is expected to display account creation form", () => {
      cy.get("[data-cy=registration-header]")
        .should("contain.text", "Registration form")
        .and("be.visible");
    });

    it("is expected to display a successful message", () => {
      cy.get("[data-cy=flash-message]")
        .should("contain.text", "success")
        .and("be.visible");
    });
  });

  describe("if password mismatch", () => {
    before(() => {
      cy.intercept("POST", "api/auth", {
        fixture: "registration_password_mismatch.json",
        statusCode: 401,
      });

      cy.visit("/");
      cy.get("[data-cy=signup-button]").click();
      cy.get("[data-cy=name-input]").type("John Skoglund");
      cy.get("[data-cy=email-input]").type("johnskoglung@test.com");
      cy.get("[data-cy=password-input]").type("1234567890");
      cy.get("[data-cy=conf-password-input]").type("123434");
      cy.get("[data-cy=register-button]").click();
    });

    it("is expected to display an error message", () => {
      cy.get("[data-cy=flash-message]")
        .should("contain.text", "Password confirmation doesn't match Password")
        .and("be.visible");
    });
  });
});
