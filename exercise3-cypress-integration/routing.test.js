describe("Routing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/");

    cy.get("#header");
  });

  it("should have title changes", () => {
    cy.title().should("eq", "Camp Spots");

    cy.visit("http://localhost:1234/about");

    cy.title().should("eq", "About Camp Spots");
  });

  it("should change the page via keyboard", () => {
    cy.get('[data-testid="megamenu-section1"]').focus().click();

    cy.realPress("Tab");

    cy.focused().click();

    cy.title().should("contain", "Listings");
  });
});
