/* eslint-disable no-undef */
describe("Articles ", () => {
  describe("can be seen by journalist who created them", () => {
    before(() => {
      cy.intercept("GET", "/api/articles**", {
        fixture: "indexWithJournalistResponse",
      }).as("getArticles");
      cy.intercept("POST", "/api/auth/sign_in", {
        fixture: "authenticated_journalist_response",
      }).as("authenticateRequest");
      cy.intercept("GET", "/api/auth/validate_token**", {
        fixture: "authenticated_journalist_response",
        headers: { uid: "johnskoglund@test.com", token: "12344556789" },
      });

      cy.visit("/");

      cy.get("[data-cy=login-email-input]").type("johnskoglund@test.com");
      cy.get("[data-cy=login-password-input]").type("1234567890");
      cy.get("[data-cy=login-button]").click();
      cy.wait("@authenticateRequest");
    });

    it("is expected to make a GET request to the API", () => {
      cy.wait("@getArticles").its("request.method").should("eq", "GET");
    });

    it("is expected to see collection of articles", () => {
      cy.get("[data-cy=current-user-articles]").should("have.length", 7);
    });

    it("is expected to see article title", () => {
      cy.get("[data-cy=current-user-articles]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-title]").should(
            "contain",
            "The Doors of Perception"
          );
        });
    });

    it("is expected to see right article teaser", () => {
      cy.get("[data-cy=current-user-articles]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-teaser]").should(
            "contain",
            "I didn't work hard to make Ruby perfect for everyone, becaus..."
          );
        });
    });

    it("is expected to see article creation date", () => {
      cy.get("[data-cy=current-user-articles]")
        .children()
        .first()
        .within(() => {
          cy.get("[data-cy=article-created]").should(
            "contain",
            "January 28, 2022 12:31"
          );
        });
    });

    it("is expected to see attached image to article if present", () => {
      cy.get("[data-cy=current-user-articles]").children().first();
      cy.get('[data-cy="article-image"]')
      .attachFile("./dummy.png");
    });
  });

  describe("can't be displayed because the journalist hasn't created any yet", () => {
    before(() => {
      cy.intercept("GET", "/api/articles**", {
        fixture: "no_articles_was_created",
      }).as("getArticles");
      cy.intercept("POST", "/api/auth/sign_in", {
        fixture: "authenticated_journalist_response",
      }).as("authenticateRequest");
      cy.intercept("GET", "/api/auth/validate_token**", {
        fixture: "authenticated_journalist_response",
        headers: { uid: "johnskoglund@test.com", token: "12344556789" },
      });
      cy.visit("/");
      cy.get("[data-cy=login-email-input]").type("johnskoglund@test.com");
      cy.get("[data-cy=login-password-input]").type("1234567890");
      cy.get("[data-cy=login-button]").click();
      cy.wait("@authenticateRequest");
    });

    it("is expected to make a GET request to the API", () => {
      cy.wait("@getArticles").its("request.method").should("eq", "GET");
    });

    it("is expected to be replayed with a message when there is no articles to display", () => {
      cy.get("[data-cy=flesh-message]").should(
        "contain",
        "You haven't created any articles yet"
      );
    });
  });
});
