describe("AboutPage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/about");
    cy.injectAxe();
  });

  it("should have a Header", () => {
    cy.get("header").contains("CampSpots");
  });

  it("should have a Footer", () => {
    cy.get("footer img").should("have.attr", "alt", "CampSpots");
  });

  it("should have no accessibility violations", () => {
    cy.checkA11y({
      exclude: ["div#portal-root"],
    });
  });
});
