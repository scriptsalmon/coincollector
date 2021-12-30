import React from "react";
import "./App.css";
import CoinList from './components/CoinList';

function App() {
  // const handleReveal = () => {
  //   setReveal(true);
  // };
  // const handleHide = () => {
  //   setReveal(false);
  // };

  // console.log(data);
  return (
    <div className="App">
      <CoinList />
      <header className="App-header">
        {/* <img src={data.image.small} alt="coin logo"/> */}
        {/* <div className="coinDiv" onMouseEnter={handleReveal} onMouseLeave={handleHide}>
          <h1>{data.name}</h1>
        </div> */}
        {/* <button onMouseEnter={handleReveal}>description</button> */}
        {/* {reveal ? <p>{data.description.en}</p> : ""} */}
      </header>
    </div>
  );
}

export default App;
