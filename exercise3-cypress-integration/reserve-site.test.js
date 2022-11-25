describe("Reserve Site", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/");

    cy.get("#header");
  });

  it("should be able to navigate to a site and reserve a date", () => {
    cy.get('[data-testid="megamenu-section1"]').focus().click();

    cy.realPress("Tab");

    cy.focused().click();

    cy.title().should("contain", "Listings");

    // Click Cranberry Lake
    cy.get('img[alt="Cranberry Lake"]').click();

    // Assert on cranberry lake
    cy.get(".primary-heading.listing-name").contains("Cranberry Lake");

    // Click date
    cy.get('button[aria-label="January 1"]').focus().click();

    // Click reserve
    cy.get("button.reserve-btn").focus().click();

    // Confirm date
    cy.get("dialog li").contains("2023-01-01");

    // Click Accept
    cy.get("dialog button.btn-submit").focus().click();
  });
});
