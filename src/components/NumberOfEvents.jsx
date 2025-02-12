import React, { useState } from "react";
import PropTypes from "prop-types";

const NumberOfEvents = ({ setCurrentNoe }) => {
  const [eventsAmount, setEventsAmount] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setEventsAmount(value);
    setCurrentNoe(value);
  };

  return (
    <div>
      <label htmlFor="events-amount">Events: </label>
      <input
        type="text"
        id="events-amount"
        value={eventsAmount}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;

NumberOfEvents.propTypes = {
  setCurrentNoe: PropTypes.func.isRequired,
};
