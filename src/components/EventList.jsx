import React from "react";
import PropTypes from "prop-types";
import Event from "./Event";

const EventList = ({ events }) => {
  return (
    <ul id="event-list">
      {events
        ? events.map((event) => <Event key={event.id} event={event} />)
        : null}
    </ul>
  );
};

export default EventList;

EventList.propTypes = {
  events: PropTypes.array,
};
