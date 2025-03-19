import React from "react";
import PropTypes from "prop-types";
import Event from "./Event";

const EventList = ({ events }) => {
  return (
    <div id="event-list">
      {events
        ? events.map((event) => <Event key={event.id} event={event} />)
        : null}
    </div>
  );
};

export default EventList;

EventList.propTypes = {
  events: PropTypes.array,
};
