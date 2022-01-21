describe("A journalist is able to login to article creation form", () => {
  before(() => {
    cy.intercept("POST", "api/auth", {
      fixture: "login_successful.json",
    });
    cy.visit("/");
    cy.get("[data-cy=login-email-input]").type("johnskoglung@test.com");
    cy.get("[data-cy=login-password-input]").type("1234567890");
    cy.get("[data-cy=login-button]").click();
  });

  it("is expected to match email input with uid from API", () => {
    
  })
});
