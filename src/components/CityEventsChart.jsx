import React from "react";
import { useState, useEffect } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const CityEventsChart = ({ allLocations, events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const getData = () => {
    const data = allLocations.map((location) => {
      const count = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(/, | - /)[0];
      return { city, count };
    });
    return data;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 0,
          bottom: 60,
          left: -30,
        }}
      >
        <CartesianGrid />
        <XAxis
          type="category"
          dataKey="city"
          name="City"
          angle={60}
          interval={0}
          tick={{ dx: 20, dy: 40, fontSize: 14 }}
        />
        <YAxis type="number" dataKey="count" name="Number of events" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="A school" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default CityEventsChart;

CityEventsChart.propTypes = {
  allLocations: PropTypes.array,
  events: PropTypes.array,
};
