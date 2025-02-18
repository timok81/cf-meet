import React from "react";
import PropTypes from "prop-types";
import CityEventsChart from "./CityEventsChart";
import EventGenresChart from "./EventGenresChart";
import { useState } from "react";

const Charts = ({ events, allLocations }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="charts-container">
      {!expanded && <h2>Event charts</h2>}
      {expanded && (
        <div className="charts-container-expanded">
          <EventGenresChart events={events} />
          <CityEventsChart allLocations={allLocations} events={events} />
        </div>
      )}
      <button className="show-charts" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Hide charts" : "Show charts"}
      </button>
    </div>
  );
};

export default Charts;

Charts.propTypes = {
  events: PropTypes.array,
  allLocations: PropTypes.array,
};
