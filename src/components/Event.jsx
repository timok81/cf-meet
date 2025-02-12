import React, { useState } from "react";
import PropTypes from "prop-types";

const Event = ({ event }) => {
  const [expanded, setExpanded] = useState(false);

  const title = event.summary;
  const startTime = event.created;
  const location = event.location;
  const description = event.description;
  const calendarLink = event.htmlLink;

  return (
    <li className="event">
      <h1>{title}</h1>
      <p>{startTime}</p>
      <p>{location}</p>
      <button className="show-details" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Hide details" : "Show details"}
      </button>
      {expanded && (
        <>
          <hr />
          <h2>About event</h2>
          <a href={calendarLink}>See details on Google Calendar</a>

          <br />
          <p className="event-description">{description}</p>
        </>
      )}
    </li>
  );
};

export default Event;

Event.propTypes = {
  event: PropTypes.shape({
    summary: PropTypes.string.isRequired,
    created: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    htmlLink: PropTypes.string,
  }).isRequired,
};
