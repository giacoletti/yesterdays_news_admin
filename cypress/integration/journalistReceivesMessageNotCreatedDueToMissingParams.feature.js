describe("Journalist can receive an error message if article is not created due to missing params", () => {
  describe("Missing title", () => {
    before(() => {
      cy.intercept("POST", "/api/articles", {
        fixture: "title_is_missing.json",
      });
      cy.visit("article/create");
      cy.get("[data-cy=body-input]").type(
        "New findings on Björkö shows that Vikings enjoyed Pineapple pizza"
      );
      cy.get("[data-cy=category-select").select("News");
      cy.get("[data-cy=submit-button").click();
    });

    it("is expected to return an error message if title is blank", () => {
      cy.get("[data-cy=message-box]")
        .should("contain", "Not Created - Title can't be blank")
        .and("be.visible");
    });
  });

  describe("Missing body", () => {
    before(() => {
      cy.intercept("POST", "/api/articles", {
        fixture: "body_is_missing.json",
      });
      cy.visit("article/create");
      cy.get("[data-cy=title-input]").type("Vikings ate pizza");
      cy.get("[data-cy=category-select").select("News");
      cy.get("[data-cy=submit-button").click();
    });

    it("is expected to return an error message if body is missing", () => {
      cy.get("[data-cy=message-box]")
        .should("contain", "Not Created - Article must have a body")
        .and("be.visible");
    });
  });

  describe("Missing category", () => {
    before(() => {
      cy.intercept("POST", "/api/articles", {
        fixture: "category_is_missing.json",
      });
      cy.visit("article/create");
      cy.get("[data-cy=title-input]").type("Vikings ate pizza");
      cy.get("[data-cy=body-input]").type(
        "New findings on Björkö shows that Vikings enjoyed Pineapple pizza"
      );
      cy.get("[data-cy=submit-button").click();
    });

    it("is expected to return an error message if category is missing", () => {
      cy.get("[data-cy=message-box]")
        .should("contain", "Not Created - Article must have a category")
        .and("be.visible");
    });
  });
});
