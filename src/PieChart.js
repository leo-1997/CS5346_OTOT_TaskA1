import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import cryptoData from './data/crypto_market_cap.json';
import PriceChart from "./LineChart"

const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#f58231",
    "#f5a3c7",
    "#d45087",
    "#8e6c8a",
    "#f6c5af",
    "#f5deb3",
    "#f08080",
    "#bc8f8f",
    "#b19cd9",
    "#a8d8ea",
    "#00caca",
    "#c7e3e3",
    "#7fc7af",
    "#2e8b57",
    "#4d4d4d",
    "#8db7e6",
    "#a2bf8a",
];

const renderTooltipContent = (props) => {
    const { active, payload, index } = props;

    if (active && payload && payload.length) {
        return (
            <div style={{
                backgroundColor: "rgba(241, 229, 222, 0.6)",
                padding: "5px",
                width: "400px",
                border: "1px solid"
            }}>
                <label>{`${payload[0].name} Market Cap: ${`$` + Number(payload[0].value) / 10000}M`}</label>
                <PriceChart stokeColor={COLORS[index % COLORS.length]} index = {index} />
            </div>
        );
    }

    return null;
};

// class PieRechartComponent extends React.Component {
const PieRechartComponent = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    return (
        <PieChart width={730} height={300}>
            <Pie
                data={cryptoData}
                color="#000000"
                dataKey="market_cap"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                onMouseEnter={onPieEnter}
            >
                {cryptoData.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                    />
                ))}
            </Pie>
            <Tooltip content={renderTooltipContent} index={activeIndex} />
            <Legend />
        </PieChart>
    );
    // }
}

export default PieRechartComponent;