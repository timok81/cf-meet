import React from "react";
import { render } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

describe("<Event/> component", () => {
  test("title, start time, location and show-more button are rendered in initial state", async () => {
    const allEvents = await getEvents();
    const EventComponent = render(<Event event={allEvents[0]} />);
    const title = EventComponent.queryByText(allEvents[0].summary);
    const startTime = EventComponent.queryByText(allEvents[0].created);
    const location = EventComponent.queryByText(allEvents[0].location);
    const expandButton = EventComponent.queryByText("Show details");
    expect(title).toBeInTheDocument();
    expect(startTime).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(expandButton).toBeInTheDocument();
  });

  test("description and link should not be rendered in initial state", async () => {
    const allEvents = await getEvents();
    const EventComponent = render(<Event event={allEvents[0]} />);
    const description = EventComponent.queryByText(allEvents[0].description);
    const calendarLink = EventComponent.queryByText(allEvents[0].htmlLink);
    expect(description).not.toBeInTheDocument();
    expect(calendarLink).not.toBeInTheDocument();
  });

  test("description, link and hide-details button are rendered after clicking show-details button", async () => {
    const user = userEvent.setup();
    const allEvents = await getEvents();
    const EventComponent = render(<Event event={allEvents[0]} />);
    const expandButton = EventComponent.queryByText("Show details");
    await user.click(expandButton);
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

  test("description and link are not rendered after clicking hide-details button", async () => {
    const user = userEvent.setup();
    const allEvents = await getEvents();
    const EventComponent = render(<Event event={allEvents[0]} />);
    const expandButton = EventComponent.queryByText("Show details");
    await user.click(expandButton);
    const collapseButton = EventComponent.queryByText("Hide details");
    await user.click(collapseButton);
    const description = EventComponent.queryByText(allEvents[0].description);
    const calendarLink = EventComponent.queryByText(allEvents[0].htmlLink);
    expect(description).not.toBeInTheDocument();
    expect(calendarLink).not.toBeInTheDocument();
  });
});
