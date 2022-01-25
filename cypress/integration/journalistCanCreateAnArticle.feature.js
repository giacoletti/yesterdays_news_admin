/* eslint-disable no-undef */
describe("An article", () => {
  describe("can be created by a journalist", () => {
    before(() => {
      cy.intercept("POST", "/api/auth/sign_in", {
        fixture: "authenticated_journalist_response.json",
      }).as("authenticateRequest");
      cy.intercept("GET", "/api/auth/validate_token", {
        fixture: "authenticated_journalist_response.json",
        headers: { uid: "johnskoglung@test.com", token: "12344556789" },
      }).as("validateTokenRequest");
      cy.intercept("POST", "/api/articles", {
        fixture: "create_response.json",
      }).as("articleCreateRequest");
      cy.visit("/");

      cy.get("[data-cy=login-email-input]").type("johnskoglung@test.com");
      cy.get("[data-cy=login-password-input]").type("1234567890");
      cy.get("[data-cy=login-button]").click();

      it("is expected to make an authentication request to API", () => {
        cy.wait("@authenticateRequest")
          .its("response.statusCode")
          .should("eq", 200);
      });

      cy.get("[data-cy=flash-message]").should(
        "contain.text",
        "Welcome John Skoglund!"
      );

      cy.get("[data-cy=create-article-btn]").click();
      cy.get("[data-cy=title-input]").type("Vikings ate pizza");
      cy.get("[data-cy=body-input]").type(
        "New findings on Björkö shows that Vikings enjoyed Pineapple pizza"
      );
      cy.get("[data-cy=category-select").select("News");
      cy.get("[data-cy=submit-button").click();
    });

    it("is expected to make a POST request to the API", () => {
      cy.wait("@articleCreateRequest")
        .its("request.method")
        .should("eq", "POST");
    });

    it("is expected to display a successful message", () => {
      cy.get("[data-cy=message-box]").should(
        "contain.text",
        "Article succesfully created!"
      );
    });
  });

  describe("can't be created by visitor without valid credentials", () => {
    before(() => {
      cy.intercept("POST", "/api/auth/sign_in", {
        body: {
          success: false,
          errors: ["Invalid login credentials. Please try again."],
        },
        statusCode: 401,
      }).as("authenticateRequest");
      cy.visit("/");
      cy.get("[data-cy=login-email-input]").type("johnskoglung@test.com");
      cy.get("[data-cy=login-password-input]").type("1234567890");
      cy.get("[data-cy=login-button]").click();
    });

    it("is expected to display an error message", () => {
      cy.get("[data-cy=flash-message]").should(
        "contain.text",
        "Invalid login credentials. Please try again."
      );
    });
  });
});
