import React, { useState } from "react";

const NumberOfEvents = () => {
  const [eventsAmount, setEventsAmount] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setEventsAmount(value);
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
