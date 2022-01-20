/* eslint-disable no-undef */
describe("Journalist can fill create article form and submit", () => {
  before(() => {
    cy.intercept("POST", "/api/articles", {
      fixture: "create_response.json",
    }).as("getArticle");
    cy.visit("/article/create");
    cy.get("[data-cy=title-input]").type("Vikings ate pizza");
    cy.get("[data-cy=body-input]").type(
      "New findings on Björkö shows that Vikings enjoyed Pineapple pizza"
    );
    cy.get("[data-cy=category-select").select("News");
    cy.get("[data-cy=submit-button").click();
  });

  it("is expected to make a POST request to the API", () => {
    cy.wait("@getArticle").its("request.method").should("eq", "POST");
  });

  it("is expected to display a successful message", () => {
    cy.get('[data-cy=message-box]')
      .should("contain.text", "Article succesfully created!");
  });
});
