describe("Journalist can visit create article view", () => {
  before(() => {
    cy.visit("article/create");
  });

  it('is expected to display a "Title" label', () => {
    cy.get("[data-cy=title-label]")
      .should("contain.text", "Title")
      .and("be.visible");
  });

  it("is expected to display Title input field", () => {
    cy.get("[data-cy=title-input]").should("be.visible");
  });

  it('is expected to display a "Article Body" label', () => {
    cy.get("[data-cy=body-label]")
      .should("contain.text", "Article body")
      .and("be.visible");
  });

  it("is expected to display Article Boby text area", () => {
    cy.get("[data-cy=body-input]").should("be.visible");
  });

  it("is expected to display category select", () => {
    cy.get("[data-cy=category-select]")
      .should("contain.text", "--select category--")
      .and("be.visible");
  });

  it("is expected to display Article Boby text area", () => {
    cy.get("[data-cy=submit-button]")
      .should("contain.text", "Submit")
      .and("be.visible");
  });
});
