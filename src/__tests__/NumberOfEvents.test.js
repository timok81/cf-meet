import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  test("the component contains an input field", () => {
    const numberComponent = render(<NumberOfEvents />);
    const numberInput = numberComponent.queryByRole("textbox");
    expect(numberInput).toBeInTheDocument();
  });

  test("the initial input field value is 32", () => {
    const numberComponent = render(<NumberOfEvents />);
    const numberInput = numberComponent.queryByRole("textbox");
    expect(numberInput).toHaveValue("32");
  });

  test("the value in input field changes when the user types in a new number", async () => {
    const numberComponent = render(<NumberOfEvents />);
    const numberInput = numberComponent.queryByRole("textbox");
    const user = userEvent.setup();
    await user.type(numberInput, "{backspace}{backspace}10");
    expect(numberInput).toHaveValue("10");
  });
});
