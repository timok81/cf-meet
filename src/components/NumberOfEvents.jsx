import React, { useState } from "react";
import PropTypes from "prop-types";

const NumberOfEvents = ({ setCurrentNoe, setErrorAlert }) => {
  const [eventsAmount, setEventsAmount] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setEventsAmount(value);


    let errorText;
    if (isNaN(value)) {
      errorText = "Please use numbers only";
    } else if (value < 0) {
      errorText = "Only positive numbers may be used";
    } else {
      errorText = "";
      setCurrentNoe(value);
    }
    setErrorAlert(errorText);
    
  };

  return (
    <div>
      <label htmlFor="events-amount">Events: </label>
      <input
        type="number"
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
  setErrorAlert: PropTypes.func.isRequired,
};
