import React from "react";
import PropTypes from "prop-types";
import CityEventsChart from "./CityEventsChart";
import EventGenresChart from "./EventGenresChart";
import { useState } from "react";

const Charts = ({ events, allLocations }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={expanded ? "charts-container charts-container-expanded" : "charts-container"}>
      {!expanded && <h2>Event charts</h2>}
      {expanded && (
        <>
          <EventGenresChart events={events} />
          <CityEventsChart allLocations={allLocations} events={events} />
        </>
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
