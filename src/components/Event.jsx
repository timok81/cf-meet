import React, { useState } from "react";

const Event = ({ event }) => {
  const [expanded, setExpanded] = useState(false);

  const title = event.summary;
  const startTime = event.created;
  const location = event.location;
  const description = event.description;
  const calendarLink = event.htmlLink;

  return (
    <li>
      <h1>{title}</h1>
      <p>{startTime}</p>
      <p>{location}</p>
      <button className="show-details" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Hide details" : "Show details"}
      </button>
      {expanded && (
        <>
          <h2>About event</h2>
          <a href={calendarLink}>See details on Google Calendar</a>
          <p className="event-description">{description}</p>
        </>
      )}
    </li>
  );
};

export default Event;
