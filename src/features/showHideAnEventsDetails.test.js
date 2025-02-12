import React from "react";
import { render } from "@testing-library/react";
import { loadFeature, defineFeature } from "jest-cucumber";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";
import { getEvents } from "../api";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let allEvents = [];
    let EventComponent;

    given("an event is listed", async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      const eventItem = EventComponent.container.querySelector(".event");
      expect(eventItem).toBeInTheDocument();
    });

    when("the user does nothing", () => {});

    then("the event element is collapsed", () => {
      const description = EventComponent.queryByText(allEvents[0].description);
      const calendarLink = EventComponent.queryByText(allEvents[0].htmlLink);
      expect(description).not.toBeInTheDocument();
      expect(calendarLink).not.toBeInTheDocument();
    });
  });

  test("User can expand an event to see details.", ({ given, when, then }) => {
    let allEvents = [];
    let EventComponent;

    given("an event element is collapsed", async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      const description = EventComponent.queryByText(allEvents[0].description);
      const calendarLink = EventComponent.queryByText(allEvents[0].htmlLink);
      expect(description).not.toBeInTheDocument();
      expect(calendarLink).not.toBeInTheDocument();
    });

    when("the user clicks button", async () => {
      const user = userEvent.setup();
      const expandButton = EventComponent.queryByText("Show details");
      await user.click(expandButton);
    });

    then("the event expands", async () => {
      const description =
        EventComponent.container.querySelector(".event-description");
      const calendarLink = EventComponent.queryByText(
        "See details on Google Calendar"
      );
      const collapseButton = EventComponent.queryByText("Hide details");
      expect(description).toBeInTheDocument();
      expect(calendarLink).toBeInTheDocument();
      expect(collapseButton).toBeInTheDocument();
    });
  });

  test("User can collapse an event to hide details.", ({
    given,
    and,
    when,
    then,
  }) => {
    let allEvents = [];
    let EventComponent;

    given("an event element is expanded", async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      const user = userEvent.setup();
      const expandButton = EventComponent.queryByText("Show details");
      await user.click(expandButton);
    });

    and("the event details are visible", () => {
      const description =
        EventComponent.container.querySelector(".event-description");
      const calendarLink = EventComponent.queryByText(
        "See details on Google Calendar"
      );
      const collapseButton = EventComponent.queryByText("Hide details");
      expect(description).toBeInTheDocument();
      expect(calendarLink).toBeInTheDocument();
      expect(collapseButton).toBeInTheDocument();
    });

    when("the user clicks button", async () => {
      const user = userEvent.setup();
      const collapseButton = EventComponent.queryByText("Hide details");
      await user.click(collapseButton);
    });

    then("the event collapses", () => {
      const description = EventComponent.queryByText(allEvents[0].description);
      const calendarLink = EventComponent.queryByText(allEvents[0].htmlLink);
      expect(description).not.toBeInTheDocument();
      expect(calendarLink).not.toBeInTheDocument();
    });
  });
});
