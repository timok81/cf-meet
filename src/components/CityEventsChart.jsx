import React from "react";
import { useState, useEffect } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
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

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{`${payload[0].value}`}</p>
          <p>{`${payload[1].value} events`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="99%" height={400} className={"chart"}>
      <h2>Events by city</h2>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 60,
          left: -30,
        }}
      >
        <CartesianGrid opacity={0.5} />
        <XAxis
          type="category"
          dataKey="city"
          name="City"
          angle={60}
          interval={0}
          tick={{ dx: 10, dy: 30, fontSize: 14, fill: "white" }}
        />
        <YAxis type="number" dataKey="count" name="Number of events" />
        <ZAxis range={[150, 150]} />
        <Tooltip content={<CustomTooltip />} />
        <Scatter name="A school" data={data} fill="#5bfff1" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default CityEventsChart;

CityEventsChart.propTypes = {
  allLocations: PropTypes.array,
  events: PropTypes.array,
  active: PropTypes.bool,
  payload: PropTypes.array,
};
