import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, LabelList } from "recharts";
import cryptoData from './data/crypto_market_cap.json';
import PriceChart from "./LineChart"

// const COLORS = [
//     "#8884d8",
//     "#82ca9d",
//     "#ffc658",
//     "#f58231",
//     "#f5a3c7",
//     "#d45087",
//     "#8e6c8a",
//     "#f6c5af",
//     "#f5deb3",
//     "#f08080",
//     "#bc8f8f",
//     "#b19cd9",
//     "#a8d8ea",
//     "#00caca",
//     "#c7e3e3",
//     "#7fc7af",
//     "#2e8b57",
//     "#4d4d4d",
//     "#8db7e6",
//     "#a2bf8a",
// ];

const COLORS = [
    "#00008B ",
    "#0000CD ",
    "#0000FF ",
    "#1E90FF ",
    "#4169E1 ",
    "#4B0082 ",
    "#483D8B ",
    "#6A5ACD ",
    "#7B68EE ",
    "#87CEEB ",
    "#87CEFA ",
    "#ADD8E6 ",
    "#B0C4DE ",
    "#B0E0E6 ",
    "#C6E2FF ",
    "#CAE1FF ",
    "#E6E6FA ",
    "#E6F0F5 ",
    "#F0F8FF",
    "#F0FFFF",
    "#C0C0C0"
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
                <PriceChart stokeColor={COLORS[index % COLORS.length]} index={index} />
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

    const totalMarketCap = cryptoData.reduce((acc, curr) => acc + curr.market_cap, 0);

    let renderPercent = function () {
        return totalMarketCap
    }

    const CustomizedLabel = (index, label) => {
        return (
            <text dy={-4} fill={COLORS[index % COLORS.length]} fontSize={10} >{label}</text>
        );
    }


    return (
        <PieChart width={1130} height={850}>
            <Pie
                data={cryptoData}
                color="#000000"
                dataKey="market_cap"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={360}
                fill="#8884d8"
                onMouseEnter={onPieEnter}
                label={({ name, market_cap }) => `${name} (${((market_cap / totalMarketCap) * 100).toFixed(2)}%)`}
            >
                {cryptoData.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                    />
                ))}
            </Pie>
            <Tooltip content={renderTooltipContent} index={activeIndex} />
            <Legend wrapperStyle={{ top: "800px" }} />
        </PieChart>
    );
}

export default PieRechartComponent;