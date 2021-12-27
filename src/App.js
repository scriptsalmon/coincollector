import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/bitcoin")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleReveal = () => {
    setReveal(!reveal)
  }
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={data.image.small} alt="coin logo"/> */}
        <h1>{data.name}</h1>
        <button onClick={handleReveal}>description</button>
        {
          reveal ? <p>{data.description.en}</p> : ""
        }
      </header>
    </div>
  );
}

export default App;
