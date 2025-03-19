import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

const Event = ({ event }) => {
  const [expanded, setExpanded] = useState(false);
  const eventRef = useRef(null);

  const title = event.summary;
  const startTime = event.created.slice(0, 10);
  const location = event.location;
  const description = event.description;
  const calendarLink = event.htmlLink;

  // Sets links parent container height dynamically to match child container height
  const eventStyles = {
    height: expanded
      ? `${eventRef.current.getBoundingClientRect().height + 60}px`
      : "150px",
  };

  return (
    <div className="event" style={eventStyles}>
      <div ref={eventRef}>
        <h1>{title}</h1>
        <p>{startTime}, {location}</p>
        <button className="show-details" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Hide details" : "Show details"}
        </button>
        
          <div className={expanded ? "details" : "details-hidden"}>
            <hr />
            <h2>About event</h2>
            <a href={calendarLink}>See details on Google Calendar</a>
            <br />
            <p className="event-description">{description}</p>
          </div>
        
      </div>
    </div>
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
