import React from "react";
import "./App.css";
import EventList from "./components/EventList";
import CitySearch from "./components/CitySearch";
import NumberOfEvents from "./components/NumberOfEvents";

const App = () => {
  return (
    <div>
      <CitySearch />
      <NumberOfEvents />
      <EventList />
    </div>
  );
};

export default App;
