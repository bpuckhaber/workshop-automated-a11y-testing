/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import PresetsCustomAmounts from "../presets-custom-amounts";

const user = userEvent.setup();

describe("Preset amount radio buttons", () => {
  it("acts as one tab stop", async () => {
    render(
      <form>
        <PresetsCustomAmounts amounts={[10, 25, 50]} />
        <button>Text</button>
      </form>
    );

    await user.tab();

    const firstRadio = screen.getByDisplayValue(10);
    expect(firstRadio).toHaveFocus();

    await user.tab();

    const button = screen.getByRole("button");
    expect(button).toHaveFocus();
  });

  it.only("enables a custom field amount", async () => {
    render(
      <form>
        <PresetsCustomAmounts amounts={[10, 25, 50]} />
        <button>Text</button>
      </form>
    );

    await user.tab();

    const firstRadio = screen.getByDisplayValue(10);
    expect(firstRadio).toHaveFocus();

    // applying pointer event as arrow keys aren't yet
    // implemented on radios in user-event
    const customRadio = screen.getByDisplayValue("Custom");
    customRadio.click();
    expect(customRadio).toBeChecked();

    await user.tab();

    const customInputText = screen.getByPlaceholderText("$ Other amount");
    expect(customInputText).toHaveFocus();
  });
});
