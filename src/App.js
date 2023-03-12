import { useEffect, useState } from "react";
import CryptoPieChart from "./PieChart";
import ClickPieChart from "./ClickPieChart"

export default function App() {

  return (
    <div className="App" style={{
      position: "absolute",
      top: "20%",
      height: "100%"
    }}>
      {/* <ClickPieChart /> */}
      <CryptoPieChart/>
      {/* <BitcoinPriceChart /> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}