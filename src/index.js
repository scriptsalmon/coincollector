import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./index.css";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);

  return <div>
    test
  </div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
