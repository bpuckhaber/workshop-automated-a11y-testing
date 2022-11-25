import * as React from "react";
import { mount } from "@cypress/react";

import DropdownList from "components/dropdown-list";

describe("DropdownList", () => {
  beforeEach(() => {
    mount(
      <DropdownList
        defaultItemText="All site types"
        items={["Campgrounds", "State Parks", "Test Sites", "National Parks"]}
      />
    );
  });

  it.skip("can be reached with the keyboard", () => {
    cy.realPress("Tab");

    cy.focused().should("have.attr", '[data-testid="dropdown-btn"]');
  });
});
