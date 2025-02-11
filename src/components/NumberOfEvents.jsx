import React, { useState } from "react";

const NumberOfEvents = ({ setCurrentNoe }) => {
  const [eventsAmount, setEventsAmount] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setEventsAmount(value);
    setCurrentNoe(value);
  };

  return (
    <div>
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
