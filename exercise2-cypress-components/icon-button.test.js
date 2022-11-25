import * as React from "react";
import { mount } from "@cypress/react";

import IconButton from "components/icon-button";

describe("IconButton", () => {
  const name = "Sent it!";

  it("should label the button", () => {
    mount(<IconButton name={name} />);

    cy.get('[data-testid="btn-submit"]').should(
      "have.attr",
      "aria-label",
      name
    );
  });

  it.skip("can be operated with the keyboard and assistive tech", () => {
    let clicked = false;
    mount(
      <IconButton
        name={name}
        onClick={() => {
          clicked = true;
        }}
      />
    );

    cy.realPress("Tab");

    cy.get('[data-testid="btn-submit"]').focus().type("{enter}");

    cy.focused().then(() => {
      expect(clicked).to.be.true;
    });
  });

  it.skip("can be reached with the keyboard", () => {
    mount(<IconButton name={name} />);

    cy.realPress("Tab");

    cy.focused().should("have.attr", "aria-label", name);
  });
});
