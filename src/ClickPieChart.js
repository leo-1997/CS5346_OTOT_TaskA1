import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Bitcoin", value: 70 },
  { name: "Ethereum", value: 30 }
];

const COLORS = ["#0088FE", "#00C49F"];

const CryptoPieChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const renderTooltipContent = () => {
    if (activeIndex === null) {
      return null;
    }

    const { name, value } = data[activeIndex];

    return (
      <div>
        <p>{name}</p>
        <p>Market share: {value}%</p>
        <p>Additional information about {name} goes here</p>
      </div>
    );
  };

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
        onMouseEnter={onPieEnter}
        onMouseLeave={onPieLeave}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={renderTooltipContent} />
    </PieChart>
  );
};

export default CryptoPieChart;
