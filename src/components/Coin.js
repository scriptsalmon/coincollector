import React, { useState } from "react";

const Coin = (props) => {
  const { data } = props;
  const [reveal, setReveal] = useState(false);

  const handleReveal = () => {
    setReveal(true);
  };
  const handleHide = () => {
    setReveal(false);
  };
  return (
    <div className="Coin">
      <h1 onMouseEnter={handleReveal} onMouseLeave={handleHide}>{data.name}</h1>
      {
          reveal ? <p>{data.id}</p> : ""
      }
    </div>
  );
};

export default Coin;
