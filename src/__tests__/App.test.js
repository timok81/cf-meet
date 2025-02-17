import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "../App";
import { getEvents } from "../api";

describe("<App/> component", () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  });

  test("render alerts container", () => {
    expect(AppDOM.querySelector(".alerts-container")).toBeInTheDocument();
  });

  test("renders list of events", () => {
    expect(AppDOM.querySelector("#event-list")).toBeInTheDocument();
  });

  test("render CitySearch", () => {
    expect(AppDOM.querySelector("#city-search")).toBeInTheDocument();
  });

  test("render NumberOfEvents", () => {
    expect(AppDOM.querySelector("#events-amount")).toBeInTheDocument();
  });
});

describe("<App/> integration", () => {
  test("render a list of events matching the city selected by the user", async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector("#city-search");
    const CitySearchInput = within(CitySearchDOM).queryByRole("textbox");

    await user.type(CitySearchInput, "Berlin");
    const berlinSuggestionItem =
      within(CitySearchDOM).queryByText("Berlin, Germany");
    await user.click(berlinSuggestionItem);

    const EventListDOM = AppDOM.querySelector("#event-list");
    const allRenderedEventitems =
      within(EventListDOM).queryAllByRole("listitem");

    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(
      (event) => event.location === "Berlin, Germany"
    );

    expect(allRenderedEventitems.length).toBe(berlinEvents.length);
    allRenderedEventitems.forEach((event) => {
      expect(event.textContent).toContain("Berlin, Germany");
    });
  });

  test("the number of events rendered initially is 32", async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector("#city-search");
    const cityTextBox = within(CitySearchDOM).queryByRole("textbox");
    await user.click(cityTextBox);

    const EventListDOM = AppDOM.querySelector("#event-list");
    const allRenderedEventitems =
      within(EventListDOM).queryAllByRole("listitem");

    expect(allRenderedEventitems.length).toBe(32);
  });

  test("the number of events rendered matches what the user has specified", async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const NumberInputDOM = AppDOM.querySelector("#events-amount");
    await user.type(NumberInputDOM, "{backspace}{backspace}10");

    const EventListDOM = AppDOM.querySelector("#event-list");
    const allRenderedEventitems =
      within(EventListDOM).queryAllByRole("listitem");

    expect(allRenderedEventitems.length).toBe(10);
  });

  test("negative numbers in number input causes error alert to appear", async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const NumberInputDOM = AppDOM.querySelector("#events-amount");
    await user.type(NumberInputDOM, "{backspace}{backspace}-1");
    const AlertsContainerDOM = AppDOM.querySelector(".alerts-container");

    expect(AlertsContainerDOM.firstChild).toBeInTheDocument();
  });

  test("too big numbers in number input causes error alert to appear", async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const NumberInputDOM = AppDOM.querySelector("#events-amount");
    await user.type(NumberInputDOM, "{backspace}{backspace}33");
    const AlertsContainerDOM = AppDOM.querySelector(".alerts-container");

    expect(AlertsContainerDOM.firstChild).toBeInTheDocument();
  });
});
