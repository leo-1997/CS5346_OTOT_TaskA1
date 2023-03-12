import React from 'react';
import { Label, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import CryptoPrice from "./data/crypto_price.json"


const PriceChart = ({ stokeColor, index }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={CryptoPrice.cryptos[index].data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tick={{ fill: stokeColor }} />
        <YAxis tick={{ fill: stokeColor }} >
          <Label
            dx={-30}
            dy={-150}
            style={{
              fontSize: "100%",
              fill: stokeColor,
            }}
            position
            angle={180}
            value={"$"} />
        </YAxis>
        <Tooltip />
        <Line type="monotone" dataKey="priceUsd" stroke={stokeColor} strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceChart;