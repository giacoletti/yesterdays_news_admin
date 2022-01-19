/* eslint-disable no-undef */
describe("An aticle", () => {
  describe("can be created by a journalist", () => {
    before(() => {
      cy.intercept("POST", "/api/auth/sign_in", {
        fixture: "authenticated_journalist_response.json",
      }).as('authenticateRequest');
      cy.intercept("GET", "/api/auth/validate_token", {
        fixture: "authenticated_journalist_response.json",
        headers: { uid: "thomas@craft.com", token: "12344556789" },
      }).as('validateTokenRequest');
      cy.intercept("POST", "/api/articles", {
        fixture: "successful_article_create_response.json",
      }).as("articleCreateRequest");
      cy.visit("/");
      // let's log in the user by clicking on CTA "Log in"
      cy.get('[data-cy=authenticate]').contains('Log in').click()
      cy.get("[data-cy=email-field]").type("thomas@craft.com");
      cy.get("[data-cy=password-field]").type("password");
      cy.get("[data-cy=login-button]").click();

      cy.get("[data-cy=flash-message]").should(
        "contain.text",
        "Welcome Thomas Ochman!"
      );

      // let's create an article by clicking an a CTA: "Crate new article"
      cy.get("[data-cy=create-new-article]").click();
      cy.get("[data-cy=title-input]").type("Vikings ate pizza");
      cy.get("[data-cy=body-input]").type(
        "New findings on Björkö shows that Vikings enjoyed Pineapple pizza"
      );
      cy.get("[data-cy=category-select").select("News");
      cy.get("[data-cy=submit-button").click();
    });

    // it("is expected to make a POST request to the API for authentication", () => {
    //   cy.wait("@authenticateRequest").its("request.method").should("eq", "POST");
    // });


    it("is expected to make a POST request to the API", () => {
      cy.wait("@articleCreateRequest").its("request.method").should("eq", "POST");
    });

    it("is expected to display a successful message", () => {
      cy.get("[data-cy=message-box]").should(
        "contain.text",
        "Article succesfully created!"
      );
    });
  });

  describe("can't be created by anonymous visitor", () => {});
});
