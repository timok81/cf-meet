import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let numberInput;
  beforeEach(() => {
    const numberComponent = render(<NumberOfEvents setCurrentNoe={() => {}}/>);
    numberInput = numberComponent.queryByRole("textbox");
  });

  test("the component contains an input field", () => {
    expect(numberInput).toBeInTheDocument();
  });

  test("the initial input field value is 32", () => {
    expect(numberInput).toHaveValue("32");
  });

  test("the value in input field changes when the user types in a new number", async () => {
    const user = userEvent.setup();
    await user.type(numberInput, "{backspace}{backspace}10");
    expect(numberInput).toHaveValue("10");
  });
});
