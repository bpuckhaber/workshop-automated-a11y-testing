describe("Passes Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/passes");

    cy.injectAxe();
  });

  it("should have an aria-current on the MegaNav passes sub-link", () => {
    cy.get('[data-testid="megamenu-section1"]').focus().click();

    cy.get("a.nav-link[href='/passes']").should(
      "have.attr",
      "aria-current",
      "page"
    );
  });

  it("should have no accessibility violations on load", () => {
    cy.checkA11y({
      exclude: ["div#portal-root"],
      rules: [
        {
          "color-contrast": { enabled: false },
        },
      ],
    });
  });

  it("should have an accessible payment dialog", () => {
    cy.get("#btn-join-basic").focus().click();

    cy.focused().should("have.attr", "role", "dialog");

    cy.realPress(["Tab"]);
    cy.focused().should("have.attr", "aria-label", "Close Dialog");

    cy.realPress(["Escape"]);
    cy.focused().should("have.attr", "id", "btn-join-basic");
  });
});
