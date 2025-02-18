import React from "react";
import { useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import PropTypes from "prop-types";

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ["React", "JavaScript", "Node", "JQuery", "Angular"];
  const colors = ["#E4572E", "#17BEBB", "#FFC914", "#2E6171", "#76B041"];

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.1;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.1;
    return percent ? (
      <text
        x={x}
        y={y}
        fill="#ce6ace"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  const getData = () => {
    const data = genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      );
      return { name: genre, value: filteredEvents.length };
    });
    return data;
  };

  return (
    <ResponsiveContainer width="99%" height={400} className={"pie-chart"}>
      <h2>Events by type</h2>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} stroke={colors[index]}/>
        ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;

EventGenresChart.propTypes = {
  events: PropTypes.array,
};
