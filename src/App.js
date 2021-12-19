import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/bitcoin")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // console.log(data.tickers);
  return (
    <div className="App">
      <header className="App-header">
        <img src={data.image.small}/>
        <h1>{data.name}</h1>
        {/* <a>{data.market_cap_rank}</a> */}
        {/* <a>{data.tickers}</a> */}
      </header>
    </div>
  );
}

export default App;
